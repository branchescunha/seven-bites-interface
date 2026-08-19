import { useEffect, useMemo, useState } from "react";

import {
  AdminPageHeader,
  AdminPanel,
  FeedbackState,
} from "../../../components";
import { api } from "../../../services/api";
import { normalizeOrderStatus, orderStatusOptions } from "./orderStatus";
import { MobileOrderCard, Row } from "./row";
import {
  CardsGrid,
  Container,
  Filter,
  FilterOption,
  MetricCard,
  MetricsGrid,
  Table,
  TableScroll,
} from "./styles";

export function Orders() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(0);

  useEffect(() => {
    async function loadOrders() {
      try {
        const { data } = await api.get("orders");
        const orderList = Array.isArray(data) ? data : [];

        setOrders(orderList);
        setFilteredOrders(orderList);
      } catch (err) {
        setError(err.publicMessage || "Não foi possível carregar os pedidos.");
      } finally {
        setIsLoading(false);
      }
    }

    loadOrders();
  }, []);

  const rows = useMemo(() => {
    return filteredOrders.map((order) => ({
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: normalizeOrderStatus(order.status),
      products: order.products,
      totalAmount: order.totalAmount,
    }));
  }, [filteredOrders]);

  const statusCounts = useMemo(() => {
    return orderStatusOptions.map((status) => {
      if (status.id === 0) {
        return { ...status, count: orders.length };
      }

      return {
        ...status,
        count: orders.filter(
          (order) => normalizeOrderStatus(order.status) === status.value,
        ).length,
      };
    });
  }, [orders]);

  function handleStatus(status) {
    setActiveStatus(status.id);
  }

  useEffect(() => {
    const activeOption = orderStatusOptions.find(
      (item) => item.id === activeStatus,
    );

    if (!activeOption || activeOption.id === 0) {
      setFilteredOrders(orders);
      return;
    }

    setFilteredOrders(
      orders.filter(
        (order) => normalizeOrderStatus(order.status) === activeOption.value,
      ),
    );
  }, [activeStatus, orders]);

  return (
    <Container>
      <AdminPageHeader
        breadcrumb="Admin / Pedidos"
        description="Acompanhe pedidos recebidos, filtre por etapa e atualize o status operacional."
        title="Pedidos"
      />

      <MetricsGrid aria-label="Resumo de pedidos por status">
        {statusCounts.map((status) => (
          <MetricCard key={status.id}>
            <span>{status.label}</span>
            <strong>{status.count}</strong>
          </MetricCard>
        ))}
      </MetricsGrid>

      <Filter aria-label="Filtrar pedidos por status">
        {orderStatusOptions.map((status) => (
          <FilterOption
            key={status.id}
            type="button"
            onClick={() => handleStatus(status)}
            $isActiveStatus={activeStatus === status.id}
            aria-pressed={activeStatus === status.id}
          >
            {status.label}
          </FilterOption>
        ))}
      </Filter>

      {isLoading && <FeedbackState message="Carregando pedidos..." />}
      {!isLoading && error && (
        <FeedbackState message={error} title="Pedidos indisponíveis" />
      )}
      {!isLoading && !error && rows.length === 0 && (
        <FeedbackState message="Nenhum pedido encontrado." />
      )}

      {!isLoading && !error && rows.length > 0 && (
        <>
          <AdminPanel>
            <TableScroll>
              <Table aria-label="Tabela operacional de pedidos">
                <thead>
                  <tr>
                    <th aria-label="Expandir pedido" />
                    <th>Pedido</th>
                    <th>Cliente</th>
                    <th>Data</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <Row
                      key={row.orderId}
                      row={row}
                      orders={orders}
                      setOrders={setOrders}
                    />
                  ))}
                </tbody>
              </Table>
            </TableScroll>
          </AdminPanel>

          <CardsGrid>
            {rows.map((row) => (
              <MobileOrderCard
                key={row.orderId}
                row={row}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </CardsGrid>
        </>
      )}
    </Container>
  );
}

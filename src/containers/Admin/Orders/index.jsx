import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";

import { FeedbackState } from "../../../components";
import { api } from "../../../services/api";
import { normalizeOrderStatus, orderStatusOptions } from "./orderStatus";
import { Row } from "./row";
import { Container, Filter, FilterOption } from "./styles";

export function Orders() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(0);

  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      try {
        const { data } = await api.get("orders");
        const orderList = Array.isArray(data) ? data : [];

        setOrders(orderList);
        setFilteredOrders(orderList);
      } catch (err) {
        setError(err.publicMessage || "Nao foi possivel carregar os pedidos.");
      } finally {
        setIsLoading(false);
      }
    }

    loadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: normalizeOrderStatus(order.status),
      products: order.products,
    };
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: createData only maps order fields
  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order));

    setRows(newRows);
  }, [filteredOrders]);

  function handleStatus(status) {
    if (status.id === 0) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter(
        (order) => normalizeOrderStatus(order.status) === status.value,
      );

      setFilteredOrders(newOrders);
    }

    setActiveStatus(status.id);
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: reapply active filter when orders refresh
  useEffect(() => {
    if (activeStatus === 0) {
      setFilteredOrders(orders);
    } else {
      const statusIndex = orderStatusOptions.findIndex(
        (item) => item.id === activeStatus,
      );

      const newFilteredOrders = orders.filter(
        (order) =>
          normalizeOrderStatus(order.status) ===
          orderStatusOptions[statusIndex].value,
      );

      setFilteredOrders(newFilteredOrders);
    }
  }, [orders]);

  return (
    <Container>
      <Filter>
        {orderStatusOptions.map((status) => (
          <FilterOption
            key={status.id}
            type="button"
            onClick={() => handleStatus(status)}
            $isActiveStatus={activeStatus === status.id}
          >
            {status.label}
          </FilterOption>
        ))}
      </Filter>

      {isLoading && <FeedbackState message="Carregando pedidos..." />}
      {!isLoading && error && (
        <FeedbackState message={error} title="Pedidos indisponiveis" />
      )}
      {!isLoading && !error && rows.length === 0 && (
        <FeedbackState message="Nenhum pedido encontrado." />
      )}

      {!isLoading && !error && rows.length > 0 && (
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Pedido</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell>Data do Pedido</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row
                  key={row.orderId}
                  row={row}
                  orders={orders}
                  setOrders={setOrders}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}

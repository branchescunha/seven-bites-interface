import { CaretDown, CaretUp } from "@phosphor-icons/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";

import { AdminStatusBadge } from "../../../components";
import { api } from "../../../services/api";
import { formatDate } from "../../../utils/formatDate";
import { formatPrice } from "../../../utils/formatPrice";
import {
  getStatusTone,
  normalizeOrderStatus,
  orderStatusOptions,
} from "./orderStatus";
import {
  DetailsCell,
  ExpandButton,
  MobileCard,
  ProductImage,
  ProductsList,
  SelectStatus,
} from "./styles";

function formatOptionalAmount(value) {
  return Number.isFinite(value) ? formatPrice(value) : "Não informado";
}

function OrderDetails({ products }) {
  return (
    <ProductsList aria-label="Produtos do pedido">
      {products.map((product) => (
        <li key={`${product.id}-${product.name}`}>
          <ProductImage src={product.url} alt={product.name} />
          <div>
            <strong>{product.name}</strong>
            <span>{product.category}</span>
          </div>
          <p>
            {product.quantity} x {formatPrice(product.price)}
          </p>
        </li>
      ))}
    </ProductsList>
  );
}

OrderDetails.propTypes = {
  products: PropTypes.array.isRequired,
};

async function updateOrderStatus({
  id,
  orders,
  setLoading,
  setOrders,
  status,
}) {
  try {
    setLoading(true);
    await api.put(`orders/${id}`, { status });

    const normalizedStatus = normalizeOrderStatus(status);
    const newOrders = orders.map((order) =>
      order._id === id ? { ...order, status: normalizedStatus } : order,
    );

    setOrders(newOrders);
    toast.success("Status do pedido atualizado.");
  } catch (_err) {
    toast.error("Não foi possível atualizar o status do pedido.");
  } finally {
    setLoading(false);
  }
}

export function Row({ row, setOrders, orders }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <tr>
        <td>
          <ExpandButton
            type="button"
            aria-expanded={open}
            aria-label={open ? "Recolher pedido" : "Expandir pedido"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <CaretUp /> : <CaretDown />}
          </ExpandButton>
        </td>
        <td>
          <strong>{row.orderId}</strong>
        </td>
        <td>{row.name}</td>
        <td>{formatDate(row.date)}</td>
        <td>{formatOptionalAmount(row.totalAmount)}</td>
        <td>
          <AdminStatusBadge tone={getStatusTone(row.status)}>
            {row.status}
          </AdminStatusBadge>
          <SelectStatus
            options={orderStatusOptions.filter((status) => status.id !== 0)}
            placeholder="Status"
            defaultValue={orderStatusOptions.find(
              (status) => status.value === normalizeOrderStatus(row.status),
            )}
            onChange={(status) =>
              updateOrderStatus({
                id: row.orderId,
                orders,
                setLoading,
                setOrders,
                status: status.value,
              })
            }
            isLoading={loading}
            menuPortalTarget={document.body}
          />
        </td>
      </tr>
      {open && (
        <tr>
          <DetailsCell colSpan={6}>
            <OrderDetails products={row.products} />
          </DetailsCell>
        </tr>
      )}
    </>
  );
}

export function MobileOrderCard({ row, setOrders, orders }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <MobileCard>
      <header>
        <div>
          <span>Pedido</span>
          <strong>{row.orderId}</strong>
        </div>
        <AdminStatusBadge tone={getStatusTone(row.status)}>
          {row.status}
        </AdminStatusBadge>
      </header>
      <p>
        <span>Cliente</span>
        <strong>{row.name}</strong>
      </p>
      <p>
        <span>Data</span>
        <strong>{formatDate(row.date)}</strong>
      </p>
      <p>
        <span>Total</span>
        <strong>{formatOptionalAmount(row.totalAmount)}</strong>
      </p>
      <SelectStatus
        options={orderStatusOptions.filter((status) => status.id !== 0)}
        placeholder="Status"
        defaultValue={orderStatusOptions.find(
          (status) => status.value === normalizeOrderStatus(row.status),
        )}
        onChange={(status) =>
          updateOrderStatus({
            id: row.orderId,
            orders,
            setLoading,
            setOrders,
            status: status.value,
          })
        }
        isLoading={loading}
        menuPortalTarget={document.body}
      />
      <ExpandButton
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <CaretUp /> : <CaretDown />}
        {open ? "Recolher produtos" : "Ver produtos"}
      </ExpandButton>
      {open && <OrderDetails products={row.products} />}
    </MobileCard>
  );
}

const rowShape = {
  orderId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  status: PropTypes.string.isRequired,
  totalAmount: PropTypes.number,
};

Row.propTypes = {
  orders: PropTypes.array.isRequired,
  setOrders: PropTypes.func.isRequired,
  row: PropTypes.shape(rowShape).isRequired,
};

MobileOrderCard.propTypes = Row.propTypes;

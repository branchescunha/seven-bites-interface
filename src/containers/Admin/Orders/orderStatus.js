export const ORDER_STATUS = {
  all: "Todos",
  pending: "Pedido Realizado",
  legacyPending: "Pedido realizado",
  preparing: "Em Preparação",
  ready: "Pedido Pronto",
  onTheWay: "Pedido a Caminho",
  delivered: "Entregue",
};

export const normalizeOrderStatus = (status) =>
  status === ORDER_STATUS.legacyPending ? ORDER_STATUS.pending : status;

export const getStatusTone = (status) => {
  const normalizedStatus = normalizeOrderStatus(status);

  if (normalizedStatus === ORDER_STATUS.delivered) {
    return "green";
  }

  if (
    normalizedStatus === ORDER_STATUS.ready ||
    normalizedStatus === ORDER_STATUS.onTheWay
  ) {
    return "amber";
  }

  if (normalizedStatus === ORDER_STATUS.preparing) {
    return "brand";
  }

  return "neutral";
};

export const orderStatusOptions = [
  {
    id: 0,
    value: ORDER_STATUS.all,
    label: ORDER_STATUS.all,
  },
  {
    id: 1,
    value: ORDER_STATUS.pending,
    label: ORDER_STATUS.pending,
  },
  {
    id: 2,
    value: ORDER_STATUS.preparing,
    label: ORDER_STATUS.preparing,
  },
  {
    id: 3,
    value: ORDER_STATUS.ready,
    label: ORDER_STATUS.ready,
  },
  {
    id: 4,
    value: ORDER_STATUS.onTheWay,
    label: ORDER_STATUS.onTheWay,
  },
  {
    id: 5,
    value: ORDER_STATUS.delivered,
    label: ORDER_STATUS.delivered,
  },
];

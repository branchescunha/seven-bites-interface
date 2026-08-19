import { Elements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import stripePromise from "../../config/stripeConfig";
import {
  Actions,
  DetailCard,
  Page,
  StatusCard,
  StatusIcon,
  StatusLabel,
  StatusMessage,
} from "./styles";

const SuccessIcon = (
  // biome-ignore lint/a11y/noSvgWithoutTitle: status icon is paired with adjacent text
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.4695 0.232963C15.8241 0.561287 15.8454 1.1149 15.5171 1.46949L6.14206 11.5945C5.81373 11.9491 5.26012 11.9704 4.90553 11.6421L0.53053 7.59211C0.175942 7.26379 0.154651 6.71018 0.482975 6.35559C0.811299 6.001 1.36491 5.97971 1.7195 6.30803L5.45122 9.76498L14.233 0.28053C14.5613 -0.0740582 15.1149 -0.0953492 15.4695 0.232963Z"
      fill="white"
    />
  </svg>
);

const ErrorIcon = (
  // biome-ignore lint/a11y/noSvgWithoutTitle: status icon is paired with adjacent text
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.25628 1.25628C1.59799 0.914573 2.15201 0.914573 2.49372 1.25628L8 6.76256L13.5063 1.25628C13.848 0.914573 14.402 0.914573 14.7437 1.25628C15.0854 1.59799 15.0854 2.15201 14.7437 2.49372L9.23744 8L14.7437 13.5063C15.0854 13.848 15.0854 14.402 14.7437 14.7437C14.402 15.0854 13.848 15.0854 13.5063 14.7437L8 9.23744L2.49372 14.7437C2.15201 15.0854 1.59799 15.0854 1.25628 14.7437C0.914573 14.402 0.914573 13.848 1.25628 13.5063L6.76256 8L1.25628 2.49372C0.914573 2.15201 0.914573 1.59799 1.25628 1.25628Z"
      fill="white"
    />
  </svg>
);

const InfoIcon = (
  // biome-ignore lint/a11y/noSvgWithoutTitle: status icon is paired with adjacent text
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1.5H4C2.61929 1.5 1.5 2.61929 1.5 4V10C1.5 11.3807 2.61929 12.5 4 12.5H10C11.3807 12.5 12.5 11.3807 12.5 10V4C12.5 2.61929 11.3807 1.5 10 1.5ZM6 6.5H8V8.5H6V6.5ZM6 9.5H8V10.5H6V9.5Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.25 7C5.25 6.58984 5.58984 6.25 6 6.25H8C8.41016 6.25 8.75 6.58984 8.75 7C8.75 7.41016 8.41016 7.75 8 7.75H6C5.58984 7.75 5.25 7.41016 5.25 7ZM5.25 10C5.25 9.58984 5.58984 9.25 6 9.25H8C8.41016 9.25 8.75 9.58984 8.75 10C8.75 10.4102 8.41016 10.75 8 10.75H6C5.58984 10.75 5.25 10.4102 5.25 10Z"
      fill="white"
    />
    <path
      d="M5.75 4C5.75 3.31075 6.31075 2.75 7 2.75C7.68925 2.75 8.25 3.31075 8.25 4C8.25 4.68925 7.68925 5.25 7 5.25C6.31075 5.25 5.75 4.68925 5.75 4Z"
      fill="white"
    />
  </svg>
);

const STATUS_CONTENT_MAP = {
  succeeded: {
    label: "Pedido confirmado",
    text: "Pagamento efetuado com sucesso",
    message:
      "Seu pagamento foi aprovado em modo teste e o pedido foi registrado.",
    iconColor: "#2f7d4f",
    icon: SuccessIcon,
    primaryText: "Voltar ao cardápio",
    primaryUrl: "/cardapio",
    secondaryText: "Ir para Home",
    secondaryUrl: "/",
  },
  processing: {
    label: "Pagamento em processamento",
    text: "Estamos aguardando a confirmação",
    message:
      "A Stripe ainda está processando o pagamento. Você pode voltar ao cardápio enquanto o status é atualizado.",
    iconColor: "#c88a2d",
    icon: InfoIcon,
    primaryText: "Voltar ao cardápio",
    primaryUrl: "/cardapio",
    secondaryText: "Ir para Home",
    secondaryUrl: "/",
  },
  requires_payment_method: {
    label: "Pagamento recusado",
    text: "Não foi possível concluir o pagamento",
    message:
      "Revise seu carrinho e tente novamente com outro metodo de pagamento de teste.",
    iconColor: "#b3261e",
    icon: ErrorIcon,
    primaryText: "Tentar novamente",
    primaryUrl: "/carrinho",
    secondaryText: "Ir para Home",
    secondaryUrl: "/",
  },
  default: {
    label: "Status indisponível",
    text: "Não conseguimos confirmar o pagamento",
    message:
      "Volte ao carrinho e tente iniciar o checkout novamente se o problema continuar.",
    iconColor: "#b3261e",
    icon: ErrorIcon,
    primaryText: "Tentar novamente",
    primaryUrl: "/carrinho",
    secondaryText: "Ir para Home",
    secondaryUrl: "/",
  },
};

function CompletePaymentContent() {
  const stripe = useStripe();

  const [status, setStatus] = useState("default");
  const [intentId, setIntentId] = useState(null);
  const statusContent =
    STATUS_CONTENT_MAP[status] || STATUS_CONTENT_MAP.default;

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret",
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) {
        return;
      }

      setStatus(paymentIntent.status);
      setIntentId(paymentIntent.id);
    });
  }, [stripe]);

  return (
    <Page>
      <StatusCard id="payment-status">
        <StatusIcon
          $iconColor={statusContent.iconColor}
          aria-hidden="true"
          id="status-icon"
        >
          {statusContent.icon}
        </StatusIcon>
        <StatusLabel>{statusContent.label}</StatusLabel>
        <h1 id="status-text">{statusContent.text}</h1>
        <StatusMessage>{statusContent.message}</StatusMessage>
        {intentId && (
          <DetailCard aria-label="Detalhes do pagamento">
            <p>
              <span>PaymentIntent</span>
              <strong id="intent-id">{intentId}</strong>
            </p>
            <p>
              <span>Status</span>
              <strong id="intent-status">{status}</strong>
            </p>
          </DetailCard>
        )}
        <Actions>
          <Link id="retry-button" to={statusContent.primaryUrl}>
            {statusContent.primaryText}
          </Link>
          <Link to={statusContent.secondaryUrl}>
            {statusContent.secondaryText}
          </Link>
        </Actions>
      </StatusCard>
    </Page>
  );
}

export function CompletePayment() {
  return (
    <Elements stripe={stripePromise}>
      <CompletePaymentContent />
    </Elements>
  );
}

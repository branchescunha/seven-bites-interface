import { useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import "../../components/Stripe/styles.css";

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
    text: "Pagamento efetuado com sucesso",
    iconColor: "#30B130",
    icon: SuccessIcon,
    buttonText: "Voltar para a loja",
    url: "/",
  },
  processing: {
    text: "Pagamento em processamento",
    iconColor: "#6D6E78",
    icon: InfoIcon,
    buttonText: "Voltar para a loja",
    url: "/",
  },
  requires_payment_method: {
    text: "Falha no pagamento, tente novamente",
    iconColor: "#DF1B41",
    icon: ErrorIcon,
    buttonText: "Tentar novamente",
    url: "/carrinho",
  },
  default: {
    text: "Algo deu errado, tente novamente",
    iconColor: "#DF1B41",
    icon: ErrorIcon,
    buttonText: "Tentar novamente",
    url: "/carrinho",
  },
};

export function CompletePayment() {
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
    <div className="container">
      <div id="payment-status">
        <div
          id="status-icon"
          style={{ backgroundColor: statusContent.iconColor }}
        >
          {statusContent.icon()}
        </div>
        <h2 id="status-text" className="status-title">
          {statusContent.text}
        </h2>
        {intentId && (
          <div id="details-table">
            <table>
              <tbody>
                <tr>
                  <td className="TableLabel">id</td>
                  <td id="intent-id" className="TableContent">
                    {intentId}
                  </td>
                </tr>
                <tr>
                  <td className="TableLabel">status</td>
                  <td id="intent-status" className="TableContent">
                    {status}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {intentId && (
          <a
            href={`https://dashboard.stripe.com/payments/${intentId}`}
            id="view-details"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ver detalhes
            {/** biome-ignore lint/a11y/noSvgWithoutTitle: external link icon is decorative */}
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ paddingLeft: "5px" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.125 3.49998C2.64175 3.49998 2.25 4.37498V11.375C2.25 11.8582 2"
                fill="#0055DE"
              />
              <path
                d="M8.66672 0C8.18347 0 7.79172 0.391751 7.79172 0.875C7.79172 1.35825 8.18347 1."
                fill="#0055DE"
              />
            </svg>
          </a>
        )}
        <a id="retry-button" href={statusContent.url}>
          {statusContent.buttonText}
        </a>
      </div>
    </div>
  );
}

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import "../styles.css";

export function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();
  const { state } = useLocation();
  const dpmCheckerLink = state?.dpmCheckerLink;

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe ou Elements com falha, tente novamente.");
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
      toast.error(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      try {
        const products = cartProducts.map((product) => {
          return {
            productId: product.id,
            quantity: product.quantity,
          };
        });

        const { status } = await api.post(
          "/orders",
          {
            paymentIntentId: paymentIntent.id,
            products,
          },
          {
            validateStatus: () => true,
          },
        );

        if (status === 200 || status === 201) {
          setTimeout(() => {
            navigate(
              `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
            );
          }, 3000);

          clearCart();
          toast.success("Pedido realizado com sucesso!");
        } else if (status === 409) {
          toast.error("Falha ao realizar o seu pedido.");
        } else {
          throw new Error();
        }
      } catch (_error) {
        toast.error("Falha no sistema! Tente novamente.");
      }
    } else {
      const clientSecret = paymentIntent?.client_secret;

      if (clientSecret) {
        navigate(`/complete?payment_intent_client_secret=${clientSecret}`);
      }
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <div className="container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          type="submit"
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="button"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pagar agora"
            )}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>

      <div id="dpm-annotation">
        <p>
          Os metodos de pagamento sao disponibilizados de acordo com a sua
          regiao.&nbsp;
          <a
            href={dpmCheckerLink}
            target="_blank"
            rel="noopener noreferrer"
            id="dpm-integration-checker"
          >
            Ver metodos de pagamento
          </a>
        </p>
      </div>
    </div>
  );
}

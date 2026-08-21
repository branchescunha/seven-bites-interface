import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import { formatPrice } from "../../../utils/formatPrice";
import {
  CheckoutGrid,
  CheckoutHeader,
  ErrorMessage,
  FormCard,
  OrderList,
  Page,
  PaymentAside,
  PaymentForm,
  PrimaryButton,
  SecureNote,
  SummaryCard,
  SummaryLine,
  SummaryTotal,
  TestBadge,
} from "./styles";

const DELIVERY_TAX = 500;

export function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const subtotal = cartProducts.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  const deliveryTax = cartProducts.length > 0 ? DELIVERY_TAX : 0;
  const total = subtotal + deliveryTax;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setMessage("Não foi possível carregar o pagamento. Tente novamente.");
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
    <Page>
      <CheckoutHeader>
        <span>Finalizar pedido</span>
        <h1>Revise tudo antes de pagar.</h1>
        <p>
          Confira os itens, a taxa de entrega e escolha a forma de pagamento
          para concluir o pedido.
        </p>
      </CheckoutHeader>

      <CheckoutGrid>
        <FormCard>
          <div>
            <TestBadge>Compra de teste</TestBadge>
            <h2>Dados de pagamento</h2>
            <p>
              Use apenas cartões de teste nesta versão. Nenhum cartão real deve
              ser utilizado.
            </p>
          </div>

          <PaymentForm id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement
              id="payment-element"
              options={paymentElementOptions}
            />
            {message && <ErrorMessage role="alert">{message}</ErrorMessage>}
            <PrimaryButton
              disabled={isLoading || !stripe || !elements}
              id="submit"
              type="submit"
            >
              {isLoading ? "Processando pedido..." : "Confirmar pedido"}
            </PrimaryButton>
          </PaymentForm>

          <SecureNote>
            O pedido só é enviado para preparo depois da confirmação do
            pagamento.
          </SecureNote>
        </FormCard>

        <PaymentAside>
          <SummaryCard aria-label="Resumo do pedido">
            <header>
              <span>Resumo</span>
              <h2>Seu pedido</h2>
            </header>

            <OrderList>
              {cartProducts.map((product) => (
                <li key={product.id}>
                  <div>
                    <strong>{product.name}</strong>
                    <span>
                      {product.quantity} x {formatPrice(product.price)}
                    </span>
                  </div>
                  <strong>
                    {formatPrice(product.price * product.quantity)}
                  </strong>
                </li>
              ))}
            </OrderList>

            <SummaryLine>
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </SummaryLine>
            <SummaryLine>
              <span>Taxa de entrega</span>
              <strong>{formatPrice(deliveryTax)}</strong>
            </SummaryLine>
            <SummaryTotal>
              <span>Total</span>
              <strong>{formatPrice(total)}</strong>
            </SummaryTotal>
          </SummaryCard>
        </PaymentAside>
      </CheckoutGrid>
    </Page>
  );
}

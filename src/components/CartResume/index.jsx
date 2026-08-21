import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useCart } from "../../hooks/CartContext";
import { useUser } from "../../hooks/UserContext";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../index";
import {
  Actions,
  Container,
  ResumeLine,
  ResumeTitle,
  SummaryFooter,
} from "./styles";

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deliveryTax] = useState(500);

  const navigate = useNavigate();

  const { cartProducts } = useCart();
  const { userInfo } = useUser();
  const isCartEmpty = cartProducts.length === 0;
  const isAuthenticated = Boolean(userInfo?.name);
  const displayedDeliveryTax = isCartEmpty ? 0 : deliveryTax;

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllItems);
  }, [cartProducts]);

  const submitOrder = async () => {
    if (isCartEmpty || isSubmitting) {
      return;
    }

    if (!isAuthenticated) {
      toast.info("Faça login para continuar para o checkout.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/login");
      return;
    }

    setIsSubmitting(true);

    const products = cartProducts.map((product) => {
      return {
        productId: product.id,
        quantity: product.quantity,
      };
    });

    try {
      const { data } = await api.post("/create-payment-intent", { products });

      navigate("/checkout", {
        state: data,
      });
    } catch (_err) {
      toast.error("Erro! Tente novamente.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <ResumeTitle>
        <span>Resumo</span>
        <h2>Pedido</h2>
      </ResumeTitle>

      <ResumeLine>
        <span>Itens</span>
        <strong>{formatPrice(finalPrice)}</strong>
      </ResumeLine>
      <ResumeLine>
        <span>Taxa de entrega</span>
        <strong>{formatPrice(displayedDeliveryTax)}</strong>
      </ResumeLine>

      <SummaryFooter>
        <span>Total</span>
        <strong>{formatPrice(finalPrice + displayedDeliveryTax)}</strong>
      </SummaryFooter>

      <Actions>
        <Button disabled={isCartEmpty || isSubmitting} onClick={submitOrder}>
          {isSubmitting ? "Processando..." : "Continuar para checkout"}
        </Button>
        <Link to="/cardapio">Continuar comprando</Link>
      </Actions>
    </Container>
  );
}

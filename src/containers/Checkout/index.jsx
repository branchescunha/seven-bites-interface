import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

import { CheckoutForm, FeedbackState } from "../../components";
import stripePromise from "../../config/stripeConfig";

export function Checkout() {
  const { state } = useLocation();
  const clientSecret = state?.clientSecret;

  if (!clientSecret) {
    return (
      <FeedbackState
        message="Volte ao carrinho e tente iniciar o pagamento novamente."
        title="Pagamento indisponivel"
      />
    );
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}

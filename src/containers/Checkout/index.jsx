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
        title="Pagamento indisponível"
      />
    );
  }

  const appearance = {
    theme: "stripe",
    variables: {
      borderRadius: "8px",
      colorBackground: "#ffffff",
      colorDanger: "#b3261e",
      colorPrimary: "#8f1d2c",
      colorText: "#202124",
      fontFamily: "Poppins, system-ui, sans-serif",
      spacingUnit: "5px",
    },
  };

  return (
    <Elements stripe={stripePromise} options={{ appearance, clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}

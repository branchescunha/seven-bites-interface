import { loadStripe } from "@stripe/stripe-js";

const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const stripeOptions = {
  developerTools: {
    assistant: {
      enabled: false,
    },
  },
};

export const isDemoPaymentMode =
  !stripePublishableKey || stripePublishableKey.startsWith("pk_test_");

const stripePromise = stripePublishableKey
  ? loadStripe(stripePublishableKey, stripeOptions)
  : null;

export default stripePromise;

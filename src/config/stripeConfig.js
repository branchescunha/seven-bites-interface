import { loadStripe } from "@stripe/stripe-js";

const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

const stripePromise = stripePublishableKey
  ? loadStripe(stripePublishableKey)
  : null;

export default stripePromise;

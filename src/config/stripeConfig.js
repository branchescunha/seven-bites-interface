import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51TYVKXBN8QImVXUh6m9qHrD4By4OKVD7Ir6WTKh9VcfRkbp426IPA6EshgQswAoKB9M1TAaKtJK8GbJ59FEEqsAb004hX0ILjr",
);

export default stripePromise;

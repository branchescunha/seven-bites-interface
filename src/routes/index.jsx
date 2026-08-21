import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { FeedbackState } from "../components";
import { AdminLayout } from "../layouts/AdminLayout";
import { UserLayout } from "../layouts/UserLayout";

const Cart = lazy(() =>
  import("../containers/Cart").then((module) => ({ default: module.Cart })),
);
const Checkout = lazy(() =>
  import("../containers/Checkout").then((module) => ({
    default: module.Checkout,
  })),
);
const CompletePayment = lazy(() =>
  import("../containers/CompletePayment").then((module) => ({
    default: module.CompletePayment,
  })),
);
const EditProduct = lazy(() =>
  import("../containers/Admin/EditProduct").then((module) => ({
    default: module.EditProduct,
  })),
);
const Home = lazy(() =>
  import("../containers/Home").then((module) => ({ default: module.Home })),
);
const ForgotPassword = lazy(() =>
  import("../containers/ForgotPassword").then((module) => ({
    default: module.ForgotPassword,
  })),
);
const Login = lazy(() =>
  import("../containers/Login").then((module) => ({ default: module.Login })),
);
const Menu = lazy(() =>
  import("../containers/Menu").then((module) => ({ default: module.Menu })),
);
const NewProduct = lazy(() =>
  import("../containers/Admin/NewProduct").then((module) => ({
    default: module.NewProduct,
  })),
);
const Orders = lazy(() =>
  import("../containers/Admin/Orders").then((module) => ({
    default: module.Orders,
  })),
);
const Products = lazy(() =>
  import("../containers/Admin/Products").then((module) => ({
    default: module.Products,
  })),
);
const Register = lazy(() =>
  import("../containers/Register").then((module) => ({
    default: module.Register,
  })),
);
const ResetPassword = lazy(() =>
  import("../containers/ResetPassword").then((module) => ({
    default: module.ResetPassword,
  })),
);

export function Router() {
  return (
    <Suspense fallback={<FeedbackState message="Carregando..." />}>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Menu />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/complete" element={<CompletePayment />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/pedidos" element={<Orders />} />
          <Route path="/admin/novo-produto" element={<NewProduct />} />
          <Route path="/admin/editar-produto" element={<EditProduct />} />
          <Route path="/admin/produtos" element={<Products />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/esqueci-senha" element={<ForgotPassword />} />
        <Route path="/redefinir-senha" element={<ResetPassword />} />
      </Routes>
    </Suspense>
  );
}

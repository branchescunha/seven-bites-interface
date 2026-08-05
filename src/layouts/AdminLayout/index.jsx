import { Navigate, Outlet } from "react-router-dom";

import { SideNavAdmin } from "../../components/SideNavAdmin";
import { Container } from "./styles";

export function AdminLayout() {
  function getIsAdmin() {
    try {
      const userData = JSON.parse(localStorage.getItem("seven-bites:userData"));

      return Boolean(userData?.admin);
    } catch (_error) {
      return false;
    }
  }

  const isAdmin = getIsAdmin();

  return isAdmin ? (
    <Container>
      <SideNavAdmin />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  ) : (
    <Navigate to="/login" replace />
  );
}

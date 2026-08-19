import { Navigate, Outlet } from "react-router-dom";

import { SideNavAdmin } from "../../components/SideNavAdmin";
import { Container, Content, Main, Topbar } from "./styles";

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
      <Main>
        <Topbar>
          <div>
            <span>Painel administrativo</span>
            <strong>Operação Seven Bites</strong>
          </div>
          <p>Gestão de pedidos e catálogo</p>
        </Topbar>
        <Content>
          <Outlet />
        </Content>
      </Main>
    </Container>
  ) : (
    <Navigate to="/login" replace />
  );
}

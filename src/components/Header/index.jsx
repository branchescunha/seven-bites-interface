import { List, ShoppingCart, UserCircle, X } from "@phosphor-icons/react";
import { useState } from "react";
import { useNavigate, useResolvedPath } from "react-router-dom";

import { useCart } from "../../hooks/CartContext";
import { useUser } from "../../hooks/UserContext";
import {
  AccountAction,
  AccountPanel,
  Brand,
  CartBadge,
  CartLink,
  Container,
  Content,
  HeaderLink,
  LinkContainer,
  Logout,
  MenuButton,
  MobilePanel,
  Navigation,
  Options,
  Profile,
} from "./styles";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cartProducts } = useCart();
  const { logout, userInfo } = useUser();

  const { pathname } = useResolvedPath();
  const isAuthenticated = Boolean(userInfo?.name);
  const cartItemsCount = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function logoutUser() {
    logout();
    closeMobileMenu();
    navigate("/login");
  }

  function goToLogin() {
    closeMobileMenu();
    navigate("/login");
  }

  const navigation = (
    <Navigation aria-label="Navegação principal">
      <HeaderLink to="/" $isActive={pathname === "/"} onClick={closeMobileMenu}>
        Home
      </HeaderLink>
      <HeaderLink
        to="/cardapio"
        $isActive={pathname === "/cardapio"}
        onClick={closeMobileMenu}
      >
        Cardápio
      </HeaderLink>
    </Navigation>
  );

  const cartLink = (
    <CartLink
      to="/carrinho"
      aria-label={`Carrinho com ${cartItemsCount} itens`}
      onClick={closeMobileMenu}
    >
      <ShoppingCart size={22} weight="bold" />
      <span>Carrinho</span>
      {cartItemsCount > 0 && <CartBadge>{cartItemsCount}</CartBadge>}
    </CartLink>
  );

  const account = isAuthenticated ? (
    <Profile>
      <UserCircle size={24} weight="bold" />
      <div>
        <p>
          Olá, <span>{userInfo.name}</span>
        </p>
        <Logout type="button" onClick={logoutUser}>
          Sair
        </Logout>
      </div>
    </Profile>
  ) : (
    <AccountAction type="button" onClick={goToLogin}>
      Entrar
    </AccountAction>
  );

  return (
    <Container>
      <Content>
        <Brand to="/" aria-label="Seven Bites - página inicial">
          <strong>Seven Bites</strong>
        </Brand>

        {navigation}

        <Options>
          <LinkContainer>{cartLink}</LinkContainer>
          <AccountPanel>{account}</AccountPanel>
          <MenuButton
            type="button"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </MenuButton>
        </Options>
      </Content>

      <MobilePanel $isOpen={isMobileMenuOpen}>
        {navigation}
        {cartLink}
        {account}
      </MobilePanel>
    </Container>
  );
}

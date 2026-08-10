import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 28px 18px;
  background:
    linear-gradient(180deg, rgba(32, 33, 36, 1), rgba(95, 16, 29, 0.96)),
    ${(props) => props.theme.graphite};

  @media (max-width: 760px) {
    height: auto;
    min-height: unset;
    padding: 18px;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px 10px 32px;
  color: ${(props) => props.theme.white};

  strong {
    font-size: 24px;
    font-weight: 800;
    line-height: 1;
  }

  span {
    color: ${(props) => props.theme.amber};
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 8px;
  text-decoration: none;
  color: ${(props) => props.theme.white};
  background-color: ${(props) =>
    props.$isActive ? props.theme.brand : "transparent"};
  font-weight: 700;
  transition: background-color 180ms ease;

  &:hover {
    background-color: ${(props) => props.theme.brand};
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;

  @media (max-width: 760px) {
    margin-top: 16px;
  }
`;

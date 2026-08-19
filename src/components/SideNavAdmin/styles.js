import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  height: 100vh;
  padding: 28px 18px;
  background:
    linear-gradient(180deg, rgba(32, 33, 36, 1), rgba(95, 16, 29, 0.96)),
    ${(props) => props.theme.graphite};

  @media (max-width: 860px) {
    position: static;
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
  min-width: 0;
  max-width: 100%;

  @media (max-width: 860px) {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 4px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 8px;
  text-decoration: none;
  color: ${(props) => props.theme.white};
  background-color: ${(props) =>
    props.$isActive ? props.theme.brand : "transparent"};
  font-weight: 700;
  white-space: nowrap;
  transition:
    background-color 180ms ease,
    box-shadow 180ms ease;

  svg {
    flex: 0 0 auto;
    width: 20px;
    height: 20px;
  }

  &:hover,
  &:focus-visible {
    background-color: ${(props) => props.theme.brand};
    outline: none;
    box-shadow: 0 0 0 3px rgba(200, 138, 45, 0.22);
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;

  @media (max-width: 860px) {
    margin-top: 16px;
  }
`;

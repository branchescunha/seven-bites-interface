import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: ${(props) => props.theme.zIndex.header};
  width: 100%;
  border-bottom: 1px solid rgba(255, 248, 239, 0.12);
  background: ${(props) => props.theme.graphite};
  box-shadow: 0 12px 34px rgba(32, 33, 36, 0.16);
`;

export const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100% - 40px, ${(props) => props.theme.layout.wide});
  min-height: ${(props) => props.theme.layout.headerHeight};
  margin: 0 auto;
  gap: ${(props) => props.theme.spacing[6]};

  @media (max-width: 760px) {
    width: min(100% - 32px, ${(props) => props.theme.layout.wide});
    min-height: 72px;
  }

  @media (max-width: 520px) {
    width: min(100% - 28px, ${(props) => props.theme.layout.wide});
    gap: ${(props) => props.theme.spacing[3]};
  }
`;

export const Brand = styled(Link)`
  display: flex;
  min-width: 190px;
  flex-direction: column;
  color: ${(props) => props.theme.white};
  text-decoration: none;

  strong {
    font-size: 24px;
    font-weight: 800;
    line-height: 1;
  }

  span {
    margin-top: ${(props) => props.theme.spacing[2]};
    color: ${(props) => props.theme.amber};
    font-size: ${(props) => props.theme.typography.label.size};
    font-weight: ${(props) => props.theme.typography.label.weight};
    line-height: ${(props) => props.theme.typography.label.lineHeight};
    text-transform: uppercase;
  }

  @media (max-width: 520px) {
    min-width: 0;
    flex: 1 1 auto;

    strong {
      font-size: 21px;
    }

    > span:first-of-type {
      display: none;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing[2]};
  padding: ${(props) => props.theme.spacing[2]};
  border: 1px solid rgba(255, 248, 239, 0.12);
  border-radius: ${(props) => props.theme.radii.pill};
  background: rgba(255, 248, 239, 0.06);

  @media (max-width: 860px) {
    display: none;
  }
`;

export const HeaderLink = styled(Link)`
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${(props) => props.theme.spacing[4]};
  border-radius: ${(props) => props.theme.radii.pill};
  color: ${(props) =>
    props.$isActive ? props.theme.graphite : props.theme.white};
  background: ${(props) =>
    props.$isActive ? props.theme.amber : "transparent"};
  text-decoration: none;
  font-size: ${(props) => props.theme.typography.button.size};
  font-weight: ${(props) => props.theme.typography.button.weight};
  line-height: ${(props) => props.theme.typography.button.lineHeight};
  transition:
    background-color ${(props) => props.theme.transitions.base},
    color ${(props) => props.theme.transitions.base},
    transform ${(props) => props.theme.transitions.fast};

  &:hover {
    background: ${(props) =>
      props.$isActive ? props.theme.amber : "rgba(255, 248, 239, 0.1)"};
    transform: translateY(-1px);
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${(props) => props.theme.spacing[3]};
  flex: 0 0 auto;

  @media (max-width: 520px) {
    gap: ${(props) => props.theme.spacing[2]};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
`;

export const CartLink = styled(Link)`
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing[2]};
  padding: 0 ${(props) => props.theme.spacing[4]};
  border: 1px solid rgba(255, 248, 239, 0.14);
  border-radius: ${(props) => props.theme.radii.pill};
  color: ${(props) => props.theme.white};
  background: rgba(255, 248, 239, 0.06);
  text-decoration: none;
  font-size: ${(props) => props.theme.typography.button.size};
  font-weight: ${(props) => props.theme.typography.button.weight};
  transition:
    border-color ${(props) => props.theme.transitions.base},
    background-color ${(props) => props.theme.transitions.base},
    transform ${(props) => props.theme.transitions.fast};

  &:hover {
    border-color: ${(props) => props.theme.amber};
    background: rgba(200, 138, 45, 0.14);
    transform: translateY(-1px);
  }

  @media (max-width: 520px) {
    min-width: 44px;
    padding: 0 ${(props) => props.theme.spacing[3]};

    > span:first-of-type {
      display: none;
    }
  }
`;

export const CartBadge = styled.span`
  display: grid;
  min-width: 22px;
  height: 22px;
  padding: 0 ${(props) => props.theme.spacing[2]};
  place-items: center;
  border-radius: ${(props) => props.theme.radii.pill};
  background: ${(props) => props.theme.amber};
  color: ${(props) => props.theme.graphite};
  font-size: 12px;
  font-weight: 800;
  line-height: 1;

  @media (max-width: 520px) {
    display: grid;
  }
`;

export const AccountPanel = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 860px) {
    display: none;
  }
`;

export const Profile = styled.div`
  display: flex;
  min-height: 44px;
  align-items: center;
  gap: ${(props) => props.theme.spacing[3]};
  padding: 0 ${(props) => props.theme.spacing[4]};
  border-left: 1px solid rgba(255, 248, 239, 0.14);
  color: ${(props) => props.theme.white};

  p {
    max-width: 170px;
    overflow: hidden;
    color: ${(props) => props.theme.white};
    font-size: ${(props) => props.theme.typography.small.size};
    font-weight: 500;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;

    span {
      font-weight: 800;
      color: ${(props) => props.theme.amber};
    }
  }
`;

export const AccountAction = styled.button`
  min-height: 44px;
  padding: 0 ${(props) => props.theme.spacing[5]};
  border: 0;
  border-radius: ${(props) => props.theme.radii.pill};
  background: ${(props) => props.theme.cream};
  color: ${(props) => props.theme.graphite};
  font-size: ${(props) => props.theme.typography.button.size};
  font-weight: ${(props) => props.theme.typography.button.weight};
  transition:
    background-color ${(props) => props.theme.transitions.base},
    transform ${(props) => props.theme.transitions.fast};

  &:hover {
    background: ${(props) => props.theme.amberSoft};
    transform: translateY(-1px);
  }
`;

export const Logout = styled.button`
  margin-top: ${(props) => props.theme.spacing[1]};
  border: 0;
  background: transparent;
  color: ${(props) => props.theme.amber};
  font-size: ${(props) => props.theme.typography.small.size};
  font-weight: 800;
`;

export const MenuButton = styled.button`
  display: none;
  width: 44px;
  min-width: 44px;
  flex: 0 0 44px;
  height: 44px;
  place-items: center;
  border: 1px solid rgba(255, 248, 239, 0.16);
  border-radius: ${(props) => props.theme.radii.pill};
  background: rgba(255, 248, 239, 0.06);
  color: ${(props) => props.theme.white};

  @media (max-width: 860px) {
    display: grid;
  }
`;

export const MobilePanel = styled.div`
  display: none;

  @media (max-width: 860px) {
    display: ${(props) => (props.$isOpen ? "grid" : "none")};
    width: min(100% - 28px, ${(props) => props.theme.layout.wide});
    margin: 0 auto ${(props) => props.theme.spacing[4]};
    gap: ${(props) => props.theme.spacing[3]};
    padding: ${(props) => props.theme.spacing[4]};
    border: 1px solid rgba(255, 248, 239, 0.12);
    border-radius: ${(props) => props.theme.radii.md};
    background: ${(props) => props.theme.graphiteLight};
    box-shadow: ${(props) => props.theme.shadows.medium};

    ${Navigation} {
      display: grid;
      justify-content: stretch;
      gap: ${(props) => props.theme.spacing[2]};
      padding: 0;
      border: 0;
      border-radius: 0;
      background: transparent;
    }

    ${HeaderLink}, ${CartLink}, ${AccountAction} {
      width: 100%;
      justify-content: center;
    }

    ${CartLink} > span:first-of-type {
      display: inline;
    }

    ${Profile} {
      justify-content: center;
      padding: ${(props) => props.theme.spacing[3]};
      border: 1px solid rgba(255, 248, 239, 0.12);
      border-radius: ${(props) => props.theme.radii.md};
    }
  }
`;

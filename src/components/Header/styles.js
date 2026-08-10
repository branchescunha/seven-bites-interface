import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  min-height: 78px;
  padding: 0 32px;
  border-bottom: 1px solid rgba(234, 223, 210, 0.16);
  background-color: rgba(32, 33, 36, 0.96);
  backdrop-filter: blur(16px);

  @media (max-width: 760px) {
    padding: 12px 16px;
  }
`;

export const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  min-height: 78px;
  margin: 0 auto;
  gap: 24px;

  @media (max-width: 920px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
  }
`;

export const Brand = styled(Link)`
  display: flex;
  min-width: 180px;
  flex-direction: column;
  color: ${(props) => props.theme.white};
  text-decoration: none;

  strong {
    font-size: 22px;
    font-weight: 800;
    line-height: 1;
  }

  span {
    margin-top: 5px;
    color: ${(props) => props.theme.amber};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  @media (max-width: 520px) {
    align-items: center;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 72px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    hr {
      height: 24px;
      border: 1px solid #625e5e;
    }
  }
`;

export const HeaderLink = styled(Link)`
  color: ${(props) =>
    props.$isActive
      ? (props) => props.theme.amber
      : (props) => props.theme.white};
  border-bottom: ${(props) =>
    props.$isActive ? `2px solid ${(props) => props.theme.amber}` : "none"};
  padding-bottom: 5px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  transition: color 200ms;

  &:hover {
    color: ${(props) => props.theme.amber};
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;

  @media (max-width: 520px) {
    width: 100%;
    justify-content: space-between;
    gap: 16px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: ${(props) => props.theme.white};

  p {
    color: ${(props) => props.theme.white};
    line-height: 90%;
    font-weight: 300;

    span {
      font-weight: 700;
      color: ${(props) => props.theme.amber};
    }
  }

  @media (max-width: 520px) {
    p {
      max-width: 140px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.white};
`;

export const Logout = styled.button`
  color: ${(props) => props.theme.amber};
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  border: none;
`;

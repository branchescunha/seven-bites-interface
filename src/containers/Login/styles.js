import { Link as ReactLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(360px, 1.05fr);
  min-height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.cream};

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 56px;
  background:
    linear-gradient(145deg, rgba(32, 33, 36, 0.94), rgba(143, 29, 44, 0.82)),
    radial-gradient(circle at 20% 20%, rgba(200, 138, 45, 0.35), transparent 18rem),
    ${(props) => props.theme.graphite};
  overflow: hidden;

  &::after {
    position: absolute;
    right: 56px;
    bottom: 48px;
    width: 148px;
    height: 148px;
    border: 1px solid rgba(255, 248, 239, 0.18);
    border-radius: 50%;
    content: "";
  }

  span {
    position: relative;
    z-index: 1;
    color: ${(props) => props.theme.amber};
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h1 {
    position: relative;
    z-index: 1;
    max-width: 540px;
    margin-top: 18px;
    color: ${(props) => props.theme.white};
    font-size: clamp(34px, 5vw, 58px);
    font-weight: 800;
    line-height: 1.05;
  }

  p {
    position: relative;
    z-index: 1;
    max-width: 430px;
    margin-top: 20px;
    color: ${(props) => props.theme.darkWhite};
    font-size: 17px;
    line-height: 1.7;
  }

  @media (max-width: 860px) {
    min-height: 320px;
    padding: 44px 24px;

    &::after {
      right: 24px;
      bottom: 24px;
      width: 96px;
      height: 96px;
    }
  }
`;

export const TrustList = styled.ul`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 520px;
  margin-top: 30px;
  padding: 0;
  list-style: none;

  li {
    border: 1px solid rgba(255, 248, 239, 0.18);
    border-radius: ${(props) => props.theme.radii.pill};
    padding: 9px 12px;
    background: rgba(255, 248, 239, 0.08);
    color: ${(props) => props.theme.darkWhite};
    font-size: 13px;
    font-weight: 700;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.58), rgba(255, 248, 239, 0.92)),
    ${(props) => props.theme.cream};

  > p {
    color: ${(props) => props.theme.muted};
    font-size: 15px;
    font-weight: 600;
    text-align: center;
  }
`;

export const Title = styled.h2`
  width: 100%;
  max-width: 420px;
  color: ${(props) => props.theme.graphite};
  font-size: 28px;
  font-weight: 800;
  line-height: 1.2;
  text-align: left;

  span {
    color: ${(props) => props.theme.brand};
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 420px;
  flex-direction: column;
  gap: 14px;
  margin: 22px 0 16px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.md};
  padding: 24px;
  background: ${(props) => props.theme.paper};
  box-shadow: ${(props) => props.theme.shadows.soft};

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const FormMessage = styled.div`
  width: 100%;
  max-width: 420px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.sm};
  padding: 14px 16px;
  background: ${(props) => props.theme.amberSoft};
  color: ${(props) => props.theme.brandDark};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 7px;

  input {
    width: 100%;
    height: 52px;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 8px;
    padding: 0 16px;
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.graphite};
    outline: none;
    transition:
      border-color ${(props) => props.theme.transitions.fast},
      box-shadow ${(props) => props.theme.transitions.fast};

    &:focus {
      border-color: ${(props) => props.theme.amber};
      box-shadow: 0 0 0 3px rgba(200, 138, 45, 0.16);
    }
  }

  label {
    color: ${(props) => props.theme.graphite};
    font-size: 14px;
    font-weight: 700;
  }

  p {
    min-height: 16px;
    color: ${(props) => props.theme.red};
    font-size: 13px;
    font-weight: 600;
    line-height: 1.2;
  }
`;

export const PasswordField = styled.div`
  position: relative;

  input {
    padding-right: 92px;
  }

  button {
    position: absolute;
    top: 50%;
    right: 10px;
    min-width: 72px;
    border: none;
    border-radius: ${(props) => props.theme.radii.sm};
    padding: 8px 10px;
    background: ${(props) => props.theme.amberSoft};
    color: ${(props) => props.theme.brandDark};
    cursor: pointer;
    font-size: 12px;
    font-weight: 800;
    transform: translateY(-50%);
  }
`;

export const Link = styled(ReactLink)`
  color: ${(props) => props.theme.brand};
  font-weight: 800;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const InlineActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  max-width: 420px;
  margin-top: -4px;

  p {
    color: ${(props) => props.theme.muted};
    font-size: 15px;
    font-weight: 600;
  }
`;

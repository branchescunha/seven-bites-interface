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
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 56px;
  background:
    linear-gradient(145deg, rgba(32, 33, 36, 0.94), rgba(143, 29, 44, 0.82)),
    radial-gradient(circle at 20% 20%, rgba(200, 138, 45, 0.35), transparent 18rem),
    ${(props) => props.theme.graphite};

  span {
    color: ${(props) => props.theme.amber};
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h1 {
    max-width: 540px;
    margin-top: 18px;
    color: ${(props) => props.theme.white};
    font-size: clamp(34px, 5vw, 58px);
    font-weight: 800;
    line-height: 1.05;
  }

  p {
    max-width: 430px;
    margin-top: 20px;
    color: ${(props) => props.theme.darkWhite};
    font-size: 17px;
    line-height: 1.7;
  }

  @media (max-width: 860px) {
    min-height: 320px;
    padding: 44px 24px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;

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
  gap: 18px;
  padding: 24px 0;
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

export const Link = styled(ReactLink)`
  color: ${(props) => props.theme.brand};
  font-weight: 800;
  text-decoration: none;
`;

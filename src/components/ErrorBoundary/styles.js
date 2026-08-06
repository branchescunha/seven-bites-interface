import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  text-align: center;
  background-color: ${(props) => props.theme.secondWhite};
  color: ${(props) => props.theme.mainBlack};

  h1 {
    font-size: 28px;
    font-weight: 700;
  }

  p {
    font-size: 16px;
    color: ${(props) => props.theme.darkGray};
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;

  button {
    min-width: 112px;
    border: none;
    border-radius: 8px;
    padding: 10px 16px;
    cursor: pointer;
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    font-weight: 600;
  }
`;

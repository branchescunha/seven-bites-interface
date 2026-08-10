import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 120px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 24px;
  text-align: center;
  color: ${(props) => props.theme.darkGray};

  strong {
    color: ${(props) => props.theme.mainBlack};
    font-size: 18px;
  }

  span {
    max-width: 520px;
    font-size: 15px;
  }

  button {
    border: none;
    border-radius: 8px;
    padding: 10px 16px;
    cursor: pointer;
    background-color: ${(props) => props.theme.brand};
    color: ${(props) => props.theme.white};
    font-weight: 700;
  }
`;

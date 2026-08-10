import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.brand};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0;
  color: ${(props) => props.theme.white};
  transition:
    background-color 180ms ease,
    transform 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    background-color: ${(props) => props.theme.brandDark};
    box-shadow: 0 10px 24px rgba(95, 16, 29, 0.22);
    transform: translateY(-1px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
    transform: none;
    box-shadow: none;
  }
`;

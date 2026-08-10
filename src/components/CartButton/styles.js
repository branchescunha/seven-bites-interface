import styled from "styled-components";

export const ContainerButton = styled.button`
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border: 0;
  border-radius: 8px;
  background-color: ${(props) => props.theme.brand};
  color: ${(props) => props.theme.white};
  transition:
    background-color 180ms ease,
    transform 180ms ease;

  img {
    width: 22px;
    height: 22px;
  }

  &:hover {
    background-color: ${(props) => props.theme.brandDark};
    transform: translateY(-1px);
  }
`;

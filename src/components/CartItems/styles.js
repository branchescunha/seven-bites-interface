import styled from "styled-components";

export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 8px;
  object-fit: cover;
  background-color: ${(props) => props.theme.darkWhite};
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: ${(props) => props.theme.white};
    border-radius: 8px;
    background-color: ${(props) => props.theme.brand};
    transition: all 0.4s;
    border: none;
    font-weight: 800;

    &:hover {
      background-color: ${(props) => props.theme.brandDark};
    }
  }
`;

export const EmptyCart = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  padding: 32px;
  color: ${(props) => props.theme.muted};
`;

export const ProductTotalPrice = styled.p`
  font-weight: bold;
`;

export const TrashImage = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
  opacity: 0.72;
`;

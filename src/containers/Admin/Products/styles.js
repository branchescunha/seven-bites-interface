import styled from "styled-components";

export const Container = styled.div`
  h1,
  h2 {
    color: ${(props) => props.theme.graphite};
  }

  .MuiPaper-root {
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 8px;
    box-shadow: 0 18px 36px rgba(32, 33, 36, 0.08);
    overflow-x: auto;
  }

  .MuiTableHead-root .MuiTableCell-root {
    background-color: ${(props) => props.theme.graphite};
    color: ${(props) => props.theme.white};
    font-weight: 800;
  }

  .MuiTableCell-root {
    color: ${(props) => props.theme.graphite};
    font-family: ${(props) => props.theme.poppinsFont};
  }
`;

export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  padding: 12px;
  border-radius: 8px;
  object-fit: cover;
  background-color: ${(props) => props.theme.darkWhite};
`;

export const EditButton = styled.button`
  border: 0;
  background-color: ${(props) => props.theme.darkWhite};
  height: 32px;
  width: 32px;
  border-radius: 8px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 18px;
    width: 18px;
  }

  &:hover {
    background-color: ${(props) => props.theme.brand};

    svg {
      fill: ${(props) => props.theme.white};
    }
  }
`;

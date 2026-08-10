import Select from "react-select";
import styled from "styled-components";

export const Container = styled.div`
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

  .MuiTableCell-root,
  .MuiTypography-root {
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

export const SelectStatus = styled(Select)`
  width: 240px;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 28px 0;
  gap: 12px;
`;

export const FilterOption = styled.button`
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 999px;
  background: ${(props) =>
    props.$isActiveStatus ? props.theme.brand : props.theme.white};
  color: ${(props) =>
    props.$isActiveStatus ? props.theme.white : props.theme.darkGray};
  font-size: 15px;
  font-weight: 700;
  line-height: 1;
  padding: 10px 16px;
`;

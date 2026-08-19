import styled from "styled-components";

export const Container = styled.div`
  min-width: 0;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.spacing[2]};
    border-radius: ${(props) => props.theme.radii.pill};
    padding: 0 ${(props) => props.theme.spacing[5]};
    background: ${(props) => props.theme.brand};
    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: 800;
    text-decoration: none;
  }
`;

export const TableScroll = styled.div`
  max-width: 100%;
  min-width: 0;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;

  th {
    padding: 16px;
    background: ${(props) => props.theme.graphite};
    color: ${(props) => props.theme.white};
    font-size: 12px;
    font-weight: 800;
    text-align: left;
    text-transform: uppercase;
  }

  td {
    padding: 14px 16px;
    border-bottom: 1px solid ${(props) => props.theme.border};
    color: ${(props) => props.theme.graphite};
    font-size: 14px;
    vertical-align: middle;
  }

  td > div {
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacing[3]};
  }

  strong {
    font-weight: 800;
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

export const ProductImage = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 8px;
  object-fit: cover;
  background-color: ${(props) => props.theme.darkWhite};
`;

export const EditButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing[2]};
  min-height: 38px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  padding: 0 ${(props) => props.theme.spacing[3]};
  background-color: ${(props) => props.theme.darkWhite};
  color: ${(props) => props.theme.graphite};
  cursor: pointer;
  font-weight: 800;

  svg {
    height: 18px;
    width: 18px;
  }

  &:hover,
  &:focus-visible {
    background-color: ${(props) => props.theme.brand};
    color: ${(props) => props.theme.white};
    outline: none;
  }
`;

export const CardsGrid = styled.div`
  display: none;
  min-width: 0;

  @media (max-width: 720px) {
    display: grid;
    gap: ${(props) => props.theme.spacing[4]};
  }
`;

export const MobileProductCard = styled.article`
  display: grid;
  min-width: 0;
  gap: ${(props) => props.theme.spacing[3]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.md};
  padding: ${(props) => props.theme.spacing[4]};
  background: ${(props) => props.theme.paper};
  box-shadow: ${(props) => props.theme.shadows.soft};

  header {
    display: flex;
    min-width: 0;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${(props) => props.theme.spacing[3]};
  }

  strong {
    color: ${(props) => props.theme.graphite};
    font-size: 17px;
    font-weight: 800;
  }

  span {
    color: ${(props) => props.theme.muted};
    font-size: 13px;
    font-weight: 700;
  }

  p {
    color: ${(props) => props.theme.brand};
    font-size: 22px;
    font-weight: 800;
  }
`;

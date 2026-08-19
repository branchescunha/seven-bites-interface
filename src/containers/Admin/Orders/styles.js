import Select from "react-select";
import styled from "styled-components";

export const Container = styled.div`
  min-width: 0;
`;

export const MetricsGrid = styled.div`
  display: grid;
  min-width: 0;
  grid-template-columns: repeat(6, minmax(120px, 1fr));
  gap: ${(props) => props.theme.spacing[3]};
  margin-bottom: ${(props) => props.theme.spacing[5]};

  @media (max-width: 1120px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const MetricCard = styled.div`
  display: grid;
  gap: ${(props) => props.theme.spacing[2]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.sm};
  padding: ${(props) => props.theme.spacing[4]};
  background: ${(props) => props.theme.paper};

  span {
    color: ${(props) => props.theme.muted};
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
  }

  strong {
    color: ${(props) => props.theme.graphite};
    font-size: 26px;
    font-weight: 800;
  }
`;

export const Filter = styled.div`
  display: flex;
  max-width: 100%;
  min-width: 0;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing[3]};
  margin-bottom: ${(props) => props.theme.spacing[5]};

  @media (max-width: 640px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 4px;
  }
`;

export const FilterOption = styled.button`
  min-height: 40px;
  border: 1px solid
    ${(props) =>
      props.$isActiveStatus ? props.theme.brand : props.theme.border};
  border-radius: ${(props) => props.theme.radii.pill};
  padding: 0 ${(props) => props.theme.spacing[4]};
  background: ${(props) =>
    props.$isActiveStatus ? props.theme.brand : props.theme.paper};
  color: ${(props) =>
    props.$isActiveStatus ? props.theme.white : props.theme.graphite};
  cursor: pointer;
  font-size: 14px;
  font-weight: 800;
  white-space: nowrap;

  &:focus-visible {
    outline: 3px solid rgba(200, 138, 45, 0.28);
  }
`;

export const TableScroll = styled.div`
  max-width: 100%;
  min-width: 0;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 920px;
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
    vertical-align: top;
  }

  td > strong {
    display: block;
    max-width: 190px;
    overflow-wrap: anywhere;
    font-size: 12px;
  }

  @media (max-width: 860px) {
    display: none;
  }
`;

export const CardsGrid = styled.div`
  display: none;
  min-width: 0;

  @media (max-width: 860px) {
    display: grid;
    gap: ${(props) => props.theme.spacing[4]};
  }
`;

export const SelectStatus = styled(Select)`
  width: min(240px, 100%);
  min-width: 0;
  margin-top: ${(props) => props.theme.spacing[2]};
`;

export const ExpandButton = styled.button`
  display: inline-flex;
  min-height: 38px;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing[2]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.sm};
  padding: 0 ${(props) => props.theme.spacing[3]};
  background: ${(props) => props.theme.paper};
  color: ${(props) => props.theme.graphite};
  cursor: pointer;
  font-weight: 800;

  svg {
    width: 18px;
    height: 18px;
  }

  &:focus-visible {
    outline: 3px solid rgba(200, 138, 45, 0.28);
  }
`;

export const DetailsCell = styled.td`
  background: ${(props) => props.theme.cream};
`;

export const ProductsList = styled.ul`
  display: grid;
  min-width: 0;
  gap: ${(props) => props.theme.spacing[3]};
  padding: ${(props) => props.theme.spacing[4]};
  list-style: none;

  li {
    display: grid;
    grid-template-columns: 56px minmax(0, 1fr) auto;
    gap: ${(props) => props.theme.spacing[3]};
    align-items: center;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: ${(props) => props.theme.radii.sm};
    padding: ${(props) => props.theme.spacing[3]};
    background: ${(props) => props.theme.paper};
  }

  strong {
    color: ${(props) => props.theme.graphite};
    font-weight: 800;
  }

  span,
  p {
    color: ${(props) => props.theme.muted};
    font-size: 13px;
    font-weight: 700;
  }

  @media (max-width: 560px) {
    li {
      grid-template-columns: 48px minmax(0, 1fr);
    }

    p {
      grid-column: 1 / -1;
    }
  }
`;

export const ProductImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${(props) => props.theme.radii.sm};
  object-fit: cover;
  background: ${(props) => props.theme.darkWhite};
`;

export const MobileCard = styled.article`
  display: grid;
  min-width: 0;
  gap: ${(props) => props.theme.spacing[4]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.md};
  padding: ${(props) => props.theme.spacing[4]};
  background: ${(props) => props.theme.paper};
  box-shadow: ${(props) => props.theme.shadows.soft};

  header,
  p {
    display: flex;
    min-width: 0;
    justify-content: space-between;
    gap: ${(props) => props.theme.spacing[3]};
  }

  header strong {
    display: block;
    max-width: 190px;
    overflow-wrap: anywhere;
  }

  span {
    color: ${(props) => props.theme.muted};
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
  }

  strong {
    color: ${(props) => props.theme.graphite};
    font-weight: 800;
    text-align: right;
  }
`;

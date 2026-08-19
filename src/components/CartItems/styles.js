import styled from "styled-components";

export const ItemsList = styled.section`
  display: grid;
  gap: ${(props) => props.theme.spacing[4]};
`;

export const ItemRow = styled.article`
  display: grid;
  grid-template-columns: 132px minmax(0, 1fr);
  gap: ${(props) => props.theme.spacing[5]};
  padding: ${(props) => props.theme.spacing[4]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.md};
  background: ${(props) => props.theme.paper};
  box-shadow: ${(props) => props.theme.shadows.soft};

  @media (max-width: 620px) {
    grid-template-columns: 96px minmax(0, 1fr);
    gap: ${(props) => props.theme.spacing[3]};
    padding: ${(props) => props.theme.spacing[3]};
  }

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductImage = styled.img`
  width: 132px;
  height: 132px;
  border-radius: ${(props) => props.theme.radii.sm};
  object-fit: cover;
  background:
    linear-gradient(
      145deg,
      ${(props) => props.theme.cream},
      ${(props) => props.theme.creamDeep}
    ),
    ${(props) => props.theme.cream};

  @media (max-width: 620px) {
    width: 96px;
    height: 96px;
  }

  @media (max-width: 430px) {
    width: 100%;
    height: 180px;
  }
`;

export const ProductInfo = styled.div`
  display: grid;
  gap: ${(props) => props.theme.spacing[5]};
  min-width: 0;
`;

export const ItemHeader = styled.header`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing[4]};

  h2 {
    margin-top: ${(props) => props.theme.spacing[1]};
    color: ${(props) => props.theme.graphite};
    font-size: ${(props) => props.theme.typography.h3.mobile};
    font-weight: ${(props) => props.theme.typography.h3.weight};
    line-height: ${(props) => props.theme.typography.h3.lineHeight};
  }
`;

export const ItemMeta = styled.span`
  color: ${(props) => props.theme.muted};
  font-size: ${(props) => props.theme.typography.small.size};
  font-weight: 700;
`;

export const ItemDetails = styled.div`
  display: grid;
  grid-template-columns: minmax(110px, 1fr) auto minmax(110px, 1fr);
  align-items: end;
  gap: ${(props) => props.theme.spacing[4]};

  span {
    display: block;
    margin-bottom: ${(props) => props.theme.spacing[1]};
    color: ${(props) => props.theme.muted};
    font-size: ${(props) => props.theme.typography.small.size};
    font-weight: 700;
  }

  strong {
    color: ${(props) => props.theme.graphite};
    font-size: 18px;
    font-weight: 800;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    align-items: stretch;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing[2]};
  min-height: 44px;
  padding: ${(props) => props.theme.spacing[1]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.pill};
  background: ${(props) => props.theme.cream};

  button {
    display: grid;
    width: 36px;
    height: 36px;
    place-items: center;
    border: none;
    border-radius: ${(props) => props.theme.radii.pill};
    background-color: ${(props) => props.theme.paper};
    color: ${(props) => props.theme.graphite};
    transition:
      background-color ${(props) => props.theme.transitions.base},
      color ${(props) => props.theme.transitions.base},
      transform ${(props) => props.theme.transitions.fast};

    &:hover {
      background-color: ${(props) => props.theme.brand};
      color: ${(props) => props.theme.white};
      transform: translateY(-1px);
    }
  }
`;

export const QuantityValue = styled.strong`
  min-width: 28px;
  color: ${(props) => props.theme.graphite};
  font-size: 16px;
  font-weight: 800;
  text-align: center;
`;

export const EmptyCart = styled.div`
  display: grid;
  justify-items: center;
  gap: ${(props) => props.theme.spacing[4]};
  padding: ${(props) => props.theme.spacing[12]}
    ${(props) => props.theme.spacing[6]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.md};
  background: ${(props) => props.theme.paper};
  color: ${(props) => props.theme.muted};
  text-align: center;
  box-shadow: ${(props) => props.theme.shadows.soft};

  span {
    color: ${(props) => props.theme.amber};
    font-size: ${(props) => props.theme.typography.label.size};
    font-weight: ${(props) => props.theme.typography.label.weight};
    text-transform: uppercase;
  }

  h2 {
    color: ${(props) => props.theme.graphite};
    font-size: ${(props) => props.theme.typography.h3.desktop};
    font-weight: ${(props) => props.theme.typography.h3.weight};
  }

  p {
    max-width: 420px;
    line-height: ${(props) => props.theme.typography.body.lineHeight};
  }

  a {
    min-height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${(props) => props.theme.spacing[5]};
    border-radius: ${(props) => props.theme.radii.pill};
    background: ${(props) => props.theme.amber};
    color: ${(props) => props.theme.graphite};
    font-size: ${(props) => props.theme.typography.button.size};
    font-weight: ${(props) => props.theme.typography.button.weight};
    text-decoration: none;
  }
`;

export const ProductTotalPrice = styled.p`
  color: ${(props) => props.theme.brand};
  font-size: 20px;
  font-weight: 800;
`;

export const RemoveButton = styled.button`
  display: grid;
  width: 40px;
  min-width: 40px;
  height: 40px;
  place-items: center;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.pill};
  background: ${(props) => props.theme.paper};
  color: ${(props) => props.theme.brand};
  transition:
    background-color ${(props) => props.theme.transitions.base},
    color ${(props) => props.theme.transitions.base},
    transform ${(props) => props.theme.transitions.fast};

  &:hover {
    background: ${(props) => props.theme.brand};
    color: ${(props) => props.theme.white};
    transform: translateY(-1px);
  }
`;

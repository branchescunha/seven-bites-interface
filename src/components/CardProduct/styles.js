import styled from "styled-components";

export const Container = styled.article`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: ${(props) => props.theme.spacing[5]};
  min-height: 100%;
  padding: ${(props) => props.theme.spacing[4]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.md};
  background-color: ${(props) => props.theme.paper};
  box-shadow: ${(props) => props.theme.shadows.soft};
  position: relative;
  transition:
    border-color ${(props) => props.theme.transitions.base},
    box-shadow ${(props) => props.theme.transitions.base},
    transform ${(props) => props.theme.transitions.fast};

  &:hover {
    border-color: ${(props) => props.theme.borderStrong};
    box-shadow: ${(props) => props.theme.shadows.medium};
    transform: translateY(-3px);
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  display: grid;
  min-height: 220px;
  place-items: center;
  overflow: hidden;
  border-radius: ${(props) => props.theme.radii.sm};
  background:
    linear-gradient(
      145deg,
      ${(props) => props.theme.cream},
      ${(props) => props.theme.creamDeep}
    ),
    ${(props) => props.theme.cream};

  @media (max-width: 430px) {
    min-height: 196px;
  }
`;

export const OfferTag = styled.span`
  position: absolute;
  top: ${(props) => props.theme.spacing[3]};
  left: ${(props) => props.theme.spacing[3]};
  z-index: 1;
  padding: ${(props) => props.theme.spacing[2]}
    ${(props) => props.theme.spacing[3]};
  border-radius: ${(props) => props.theme.radii.pill};
  background: ${(props) => props.theme.brand};
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.typography.label.size};
  font-weight: ${(props) => props.theme.typography.label.weight};
  line-height: ${(props) => props.theme.typography.label.lineHeight};
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 220px;
  object-fit: cover;

  @media (max-width: 430px) {
    min-height: 196px;
  }
`;

export const CardContent = styled.div`
  display: grid;
  align-content: start;
  gap: ${(props) => props.theme.spacing[2]};
  min-height: 78px;

  h3 {
    color: ${(props) => props.theme.graphite};
    font-size: ${(props) => props.theme.typography.h3.mobile};
    font-weight: ${(props) => props.theme.typography.h3.weight};
    line-height: ${(props) => props.theme.typography.h3.lineHeight};
  }
`;

export const CategoryName = styled.p`
  color: ${(props) => props.theme.muted};
  font-size: ${(props) => props.theme.typography.small.size};
  font-weight: 700;
`;

export const ProductFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing[3]};

  strong {
    color: ${(props) => props.theme.brand};
    font-size: 24px;
    font-weight: 800;
    line-height: 1;
  }

  @media (max-width: 430px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const AddButton = styled.button`
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing[2]};
  padding: 0 ${(props) => props.theme.spacing[4]};
  border: 0;
  border-radius: ${(props) => props.theme.radii.pill};
  background: ${(props) => props.theme.graphite};
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.typography.button.size};
  font-weight: ${(props) => props.theme.typography.button.weight};
  transition:
    background-color ${(props) => props.theme.transitions.base},
    transform ${(props) => props.theme.transitions.fast};

  &:hover {
    background: ${(props) => props.theme.brand};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;

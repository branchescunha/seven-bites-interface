import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background:
    linear-gradient(
      180deg,
      ${(props) => props.theme.cream} 0%,
      ${(props) => props.theme.creamDeep} 100%
    ),
    ${(props) => props.theme.cream};
`;

export const Banner = styled.section`
  width: 100%;
  padding: ${(props) => props.theme.spacing[16]}
    max(24px, calc((100vw - ${(props) => props.theme.layout.wide}) / 2))
    ${(props) => props.theme.spacing[12]};
  background:
    linear-gradient(
      120deg,
      rgba(32, 33, 36, 0.98),
      rgba(63, 11, 20, 0.95) 62%,
      rgba(95, 16, 29, 0.9)
    ),
    ${(props) => props.theme.graphite};

  @media (max-width: 430px) {
    padding: ${(props) => props.theme.spacing[10]} 16px
      ${(props) => props.theme.spacing[8]};
  }
`;

export const BannerContent = styled.div`
  max-width: 760px;

  > span {
    color: ${(props) => props.theme.amber};
    font-size: ${(props) => props.theme.typography.label.size};
    font-weight: ${(props) => props.theme.typography.label.weight};
    line-height: ${(props) => props.theme.typography.label.lineHeight};
    text-transform: uppercase;
  }

  h1 {
    margin-top: ${(props) => props.theme.spacing[4]};
    color: ${(props) => props.theme.white};
    font-size: ${(props) => props.theme.typography.h1.desktop};
    font-weight: ${(props) => props.theme.typography.h1.weight};
    line-height: ${(props) => props.theme.typography.h1.lineHeight};
  }

  p {
    max-width: 620px;
    margin-top: ${(props) => props.theme.spacing[5]};
    color: ${(props) => props.theme.darkWhite};
    font-size: ${(props) => props.theme.typography.body.desktop};
    line-height: ${(props) => props.theme.typography.body.lineHeight};
  }

  @media (max-width: 430px) {
    h1 {
      font-size: clamp(32px, 9vw, 38px);
    }

    p {
      margin-top: ${(props) => props.theme.spacing[4]};
      font-size: ${(props) => props.theme.typography.body.mobile};
      line-height: 1.55;
    }
  }
`;

export const MenuContent = styled.section`
  width: min(100% - 40px, ${(props) => props.theme.layout.wide});
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing[12]} 0
    ${(props) => props.theme.spacing[20]};

  @media (max-width: 430px) {
    width: min(100% - 32px, ${(props) => props.theme.layout.wide});
    padding: ${(props) => props.theme.spacing[6]} 0
      ${(props) => props.theme.spacing[12]};
  }
`;

export const MenuHeader = styled.header`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing[6]};
  margin-bottom: ${(props) => props.theme.spacing[6]};

  span {
    color: ${(props) => props.theme.amber};
    font-size: ${(props) => props.theme.typography.label.size};
    font-weight: ${(props) => props.theme.typography.label.weight};
    line-height: ${(props) => props.theme.typography.label.lineHeight};
    text-transform: uppercase;
  }

  h2 {
    margin-top: ${(props) => props.theme.spacing[2]};
    color: ${(props) => props.theme.graphite};
    font-size: ${(props) => props.theme.typography.h2.desktop};
    font-weight: ${(props) => props.theme.typography.h2.weight};
    line-height: ${(props) => props.theme.typography.h2.lineHeight};
  }

  @media (max-width: 620px) {
    align-items: start;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing[3]};
    margin-bottom: ${(props) => props.theme.spacing[4]};

    h2 {
      font-size: ${(props) => props.theme.typography.h2.mobile};
    }
  }
`;

export const ProductsCount = styled.p`
  padding: ${(props) => props.theme.spacing[2]}
    ${(props) => props.theme.spacing[4]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.pill};
  background: ${(props) => props.theme.paper};
  color: ${(props) => props.theme.muted};
  font-size: ${(props) => props.theme.typography.small.size};
  font-weight: 700;
`;

export const CategoryMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing[3]};
  margin-bottom: ${(props) => props.theme.spacing[10]};
  padding: ${(props) => props.theme.spacing[3]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.md};
  background: rgba(255, 255, 255, 0.72);

  @media (max-width: 520px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${(props) => props.theme.spacing[2]};
    margin-bottom: ${(props) => props.theme.spacing[6]};
    padding: ${(props) => props.theme.spacing[2]};
  }
`;

export const CategoryButton = styled.button`
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.pill};
  background: ${(props) =>
    props.$isActiveCategory ? props.theme.graphite : props.theme.paper};
  color: ${(props) =>
    props.$isActiveCategory ? props.theme.white : props.theme.graphite};
  font-size: ${(props) => props.theme.typography.button.size};
  font-weight: ${(props) => props.theme.typography.button.weight};
  line-height: ${(props) => props.theme.typography.button.lineHeight};
  padding: 0 ${(props) => props.theme.spacing[5]};
  transition:
    background-color ${(props) => props.theme.transitions.base},
    border-color ${(props) => props.theme.transitions.base},
    color ${(props) => props.theme.transitions.base},
    transform ${(props) => props.theme.transitions.fast};

  &:hover {
    border-color: ${(props) => props.theme.amber};
    transform: translateY(-1px);
  }

  @media (max-width: 520px) {
    width: 100%;
    min-height: 40px;
    padding: 0 ${(props) => props.theme.spacing[3]};
    font-size: 13px;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${(props) => props.theme.spacing[5]};

  @media (max-width: 1180px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${(props) => props.theme.spacing[3]};
  }
`;

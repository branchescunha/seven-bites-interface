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
  display: grid;
  gap: ${(props) => props.theme.spacing[4]};
  padding: ${(props) => props.theme.spacing[12]}
    max(24px, calc((100vw - ${(props) => props.theme.layout.wide}) / 2));
  background:
    linear-gradient(120deg, rgba(32, 33, 36, 0.98), rgba(95, 16, 29, 0.88)),
    ${(props) => props.theme.graphite};

  > span {
    color: ${(props) => props.theme.amber};
    font-size: ${(props) => props.theme.typography.label.size};
    font-weight: ${(props) => props.theme.typography.label.weight};
    text-transform: uppercase;
  }

  strong {
    max-width: 760px;
    color: ${(props) => props.theme.white};
    font-size: ${(props) => props.theme.typography.h1.desktop};
    font-weight: 800;
    line-height: ${(props) => props.theme.typography.h1.lineHeight};
  }

  p {
    max-width: 580px;
    color: ${(props) => props.theme.darkWhite};
    line-height: ${(props) => props.theme.typography.body.lineHeight};
  }

  @media (max-width: 430px) {
    gap: ${(props) => props.theme.spacing[3]};
    padding: ${(props) => props.theme.spacing[7]} 16px;

    strong {
      font-size: clamp(30px, 8.5vw, 36px);
    }

    p {
      font-size: ${(props) => props.theme.typography.body.mobile};
      line-height: 1.5;
    }
  }
`;

export const PageHeader = styled.header`
  width: min(100% - 40px, ${(props) => props.theme.layout.wide});
  margin: 0 auto;
  padding-top: ${(props) => props.theme.spacing[10]};

  span {
    color: ${(props) => props.theme.amber};
    font-size: ${(props) => props.theme.typography.label.size};
    font-weight: ${(props) => props.theme.typography.label.weight};
    text-transform: uppercase;
  }

  h1 {
    margin-top: ${(props) => props.theme.spacing[2]};
    color: ${(props) => props.theme.graphite};
    font-size: ${(props) => props.theme.typography.h2.desktop};
    font-weight: ${(props) => props.theme.typography.h2.weight};
    line-height: ${(props) => props.theme.typography.h2.lineHeight};
  }

  @media (max-width: 430px) {
    width: min(100% - 32px, ${(props) => props.theme.layout.wide});
    padding-top: ${(props) => props.theme.spacing[6]};

    h1 {
      font-size: clamp(26px, 7.5vw, 30px);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 380px);
  align-items: start;
  gap: ${(props) => props.theme.spacing[6]};
  width: min(100% - 40px, ${(props) => props.theme.layout.wide});
  padding: ${(props) => props.theme.spacing[8]} 0
    ${(props) => props.theme.spacing[20]};
  margin: 0 auto;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 430px) {
    width: min(100% - 32px, ${(props) => props.theme.layout.wide});
    gap: ${(props) => props.theme.spacing[4]};
    padding-top: ${(props) => props.theme.spacing[5]};
    padding-bottom: ${(props) => props.theme.spacing[12]};
  }
`;

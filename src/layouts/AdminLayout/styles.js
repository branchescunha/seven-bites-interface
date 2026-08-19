import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(236px, 280px) 1fr;
  width: 100%;
  min-width: 0;
  min-height: 100vh;
  background: ${(props) => props.theme.cream};

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  min-width: 0;
  min-height: 100vh;
  flex-direction: column;
  background:
    radial-gradient(circle at 12% 0%, rgba(200, 138, 45, 0.12), transparent 26rem),
    ${(props) => props.theme.cream};
`;

export const Topbar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  width: 100%;
  min-width: 0;
  min-height: 72px;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing[4]};
  border-bottom: 1px solid ${(props) => props.theme.border};
  padding: ${(props) => props.theme.spacing[4]} ${(props) => props.theme.spacing[6]};
  background: rgba(255, 248, 239, 0.94);
  backdrop-filter: blur(10px);

  div {
    display: grid;
    min-width: 0;
    gap: 2px;
  }

  span {
    color: ${(props) => props.theme.amber};
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
  }

  strong {
    color: ${(props) => props.theme.graphite};
    font-size: 18px;
    font-weight: 800;
  }

  p {
    color: ${(props) => props.theme.muted};
    font-size: 14px;
    font-weight: 700;
  }

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
    padding: ${(props) => props.theme.spacing[4]};
  }
`;

export const Content = styled.section`
  width: min(1240px, 100%);
  min-width: 0;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing[8]} ${(props) => props.theme.spacing[6]}
    ${(props) => props.theme.spacing[12]};

  @media (max-width: 640px) {
    padding: ${(props) => props.theme.spacing[6]} ${(props) => props.theme.spacing[4]}
      ${(props) => props.theme.spacing[10]};
  }
`;

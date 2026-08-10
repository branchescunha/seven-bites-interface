import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.cream};
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 210px;
  padding: 48px 20px;
  background:
    linear-gradient(110deg, rgba(32, 33, 36, 0.95), rgba(95, 16, 29, 0.82)),
    ${(props) => props.theme.graphite};

  strong {
    color: ${(props) => props.theme.white};
    font-size: clamp(34px, 6vw, 56px);
    font-weight: 800;
    line-height: 1;
  }

  span {
    color: ${(props) => props.theme.amber};
    font-size: 15px;
    font-weight: 700;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin-top: 36px;
  padding-bottom: 12px;
  color: ${(props) => props.theme.graphite};
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    left: calc(50% + -28px);
    bottom: 0;
    content: "";
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.brand};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);
  gap: 24px;
  width: 100%;
  max-width: 1180px;
  padding: 40px 24px 72px;
  margin: 0 auto;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  min-height: min(620px, calc(100vh - 78px));
  align-items: center;
  padding: 72px 32px;
  background:
    linear-gradient(110deg, rgba(32, 33, 36, 0.92), rgba(95, 16, 29, 0.78)),
    radial-gradient(circle at 72% 28%, rgba(200, 138, 45, 0.34), transparent 20rem),
    ${(props) => props.theme.graphite};

  div {
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
  }

  span {
    color: ${(props) => props.theme.amber};
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h1 {
    max-width: 720px;
    margin-top: 18px;
    color: ${(props) => props.theme.white};
    font-size: clamp(38px, 6vw, 72px);
    font-weight: 800;
    line-height: 1.02;
  }

  p {
    max-width: 560px;
    margin-top: 22px;
    color: ${(props) => props.theme.darkWhite};
    font-size: 18px;
    line-height: 1.7;
  }

  @media (max-width: 640px) {
    min-height: 520px;
    padding: 56px 20px;

    p {
      font-size: 16px;
    }
  }
`;

export const Container = styled.section`
  padding: 56px 0 72px;
  background: ${(props) => props.theme.cream};

  > div {
    display: grid;
    gap: 48px;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
`;

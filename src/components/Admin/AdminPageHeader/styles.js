import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  min-width: 0;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing[6]};
  align-items: flex-start;
  margin-bottom: ${(props) => props.theme.spacing[6]};

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: grid;
  min-width: 0;
  gap: ${(props) => props.theme.spacing[2]};

  p {
    max-width: 720px;
    color: ${(props) => props.theme.muted};
    font-size: 15px;
    line-height: 1.6;
  }
`;

export const Breadcrumb = styled.nav`
  overflow-wrap: anywhere;
  color: ${(props) => props.theme.muted};
  font-size: 13px;
  font-weight: 700;
`;

export const Eyebrow = styled.span`
  color: ${(props) => props.theme.amber};
  font-size: ${(props) => props.theme.typography.label.size};
  font-weight: ${(props) => props.theme.typography.label.weight};
  text-transform: uppercase;
`;

export const Title = styled.h1`
  overflow-wrap: anywhere;
  color: ${(props) => props.theme.graphite};
  font-size: clamp(30px, 4vw, 42px);
  font-weight: 800;
  line-height: 1.08;
`;

export const Actions = styled.div`
  display: flex;
  min-width: 0;
  gap: ${(props) => props.theme.spacing[3]};
  flex-wrap: wrap;

  a,
  button {
    min-height: 44px;
  }
`;

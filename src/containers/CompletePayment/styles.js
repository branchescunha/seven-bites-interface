import styled from "styled-components";

export const Page = styled.main`
  display: grid;
  min-height: calc(100vh - ${(props) => props.theme.layout.headerHeight});
  place-items: center;
  padding: ${(props) => props.theme.spacing[10]} ${(props) => props.theme.spacing[5]};
  background:
    radial-gradient(circle at 18% 8%, rgba(200, 138, 45, 0.18), transparent 24rem),
    linear-gradient(180deg, ${(props) => props.theme.cream}, ${(props) => props.theme.creamDeep});
`;

export const StatusCard = styled.section`
  display: grid;
  justify-items: center;
  width: min(620px, 100%);
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.md};
  padding: ${(props) => props.theme.spacing[8]};
  background: ${(props) => props.theme.paper};
  text-align: center;
  box-shadow: ${(props) => props.theme.shadows.medium};

  h1 {
    max-width: 520px;
    margin-top: ${(props) => props.theme.spacing[3]};
    color: ${(props) => props.theme.graphite};
    font-size: clamp(30px, 7vw, 44px);
    font-weight: 800;
    line-height: 1.08;
  }

  @media (max-width: 480px) {
    padding: ${(props) => props.theme.spacing[6]} ${(props) => props.theme.spacing[5]};
  }
`;

export const StatusIcon = styled.div`
  display: grid;
  width: 58px;
  height: 58px;
  place-items: center;
  border-radius: 50%;
  background: ${(props) => props.$iconColor};
`;

export const StatusLabel = styled.span`
  margin-top: ${(props) => props.theme.spacing[5]};
  color: ${(props) => props.theme.amber};
  font-size: ${(props) => props.theme.typography.label.size};
  font-weight: ${(props) => props.theme.typography.label.weight};
  text-transform: uppercase;
`;

export const StatusMessage = styled.p`
  max-width: 500px;
  margin-top: ${(props) => props.theme.spacing[4]};
  color: ${(props) => props.theme.muted};
  font-size: ${(props) => props.theme.typography.body.mobile};
  line-height: 1.7;
`;

export const DetailCard = styled.div`
  display: grid;
  gap: ${(props) => props.theme.spacing[3]};
  width: 100%;
  margin-top: ${(props) => props.theme.spacing[6]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.sm};
  padding: ${(props) => props.theme.spacing[4]};
  background: ${(props) => props.theme.cream};

  p {
    display: flex;
    justify-content: space-between;
    gap: ${(props) => props.theme.spacing[4]};
    color: ${(props) => props.theme.muted};
    font-size: 13px;
    text-align: left;
  }

  strong {
    max-width: 70%;
    overflow-wrap: anywhere;
    color: ${(props) => props.theme.graphite};
    font-weight: 800;
    text-align: right;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${(props) => props.theme.spacing[3]};
  width: 100%;
  margin-top: ${(props) => props.theme.spacing[6]};

  a {
    min-height: 50px;
    display: inline-flex;
    flex: 1 1 180px;
    align-items: center;
    justify-content: center;
    border-radius: ${(props) => props.theme.radii.pill};
    padding: 0 ${(props) => props.theme.spacing[5]};
    color: ${(props) => props.theme.graphite};
    font-size: ${(props) => props.theme.typography.button.size};
    font-weight: ${(props) => props.theme.typography.button.weight};
    text-decoration: none;
  }

  a:first-child {
    background: ${(props) => props.theme.brand};
    color: ${(props) => props.theme.white};
  }

  a:last-child {
    border: 1px solid ${(props) => props.theme.border};
    background: ${(props) => props.theme.paper};
  }
`;

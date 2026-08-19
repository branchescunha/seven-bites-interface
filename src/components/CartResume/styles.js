import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: calc(${(props) => props.theme.layout.headerHeight} + ${(props) => props.theme.spacing[6]});
  display: grid;
  gap: ${(props) => props.theme.spacing[4]};
  padding: ${(props) => props.theme.spacing[6]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.md};
  background-color: ${(props) => props.theme.paper};
  box-shadow: ${(props) => props.theme.shadows.medium};

  @media (max-width: 920px) {
    position: static;
  }
`;

export const ResumeTitle = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing[2]};
  padding-bottom: ${(props) => props.theme.spacing[4]};
  border-bottom: 1px solid ${(props) => props.theme.border};

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
`;

export const ResumeLine = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing[4]};
  color: ${(props) => props.theme.muted};
  font-size: ${(props) => props.theme.typography.body.mobile};

  strong {
    color: ${(props) => props.theme.graphite};
    font-weight: 800;
  }
`;

export const SummaryFooter = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing[4]};
  margin-top: ${(props) => props.theme.spacing[2]};
  padding-top: ${(props) => props.theme.spacing[5]};
  border-top: 1px solid ${(props) => props.theme.border};

  span {
    color: ${(props) => props.theme.graphite};
    font-size: 18px;
    font-weight: 800;
  }

  strong {
    color: ${(props) => props.theme.brand};
    font-size: 26px;
    font-weight: 800;
  }
`;

export const Actions = styled.div`
  display: grid;
  gap: ${(props) => props.theme.spacing[3]};
  margin-top: ${(props) => props.theme.spacing[4]};

  a {
    min-height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: ${(props) => props.theme.radii.pill};
    background: ${(props) => props.theme.paper};
    color: ${(props) => props.theme.graphite};
    font-size: ${(props) => props.theme.typography.button.size};
    font-weight: ${(props) => props.theme.typography.button.weight};
    text-decoration: none;
    transition:
      border-color ${(props) => props.theme.transitions.base},
      transform ${(props) => props.theme.transitions.fast};

    &:hover {
      border-color: ${(props) => props.theme.amber};
      transform: translateY(-1px);
    }
  }
`;

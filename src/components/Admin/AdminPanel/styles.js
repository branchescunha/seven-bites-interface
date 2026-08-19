import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-width: 0;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.md};
  background: ${(props) => props.theme.paper};
  box-shadow: ${(props) => props.theme.shadows.soft};
  overflow: hidden;
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  gap: ${(props) => props.theme.spacing[4]};
  padding: ${(props) => props.theme.spacing[10]} ${(props) => props.theme.spacing[5]};
  border-top: 1px solid rgba(234, 223, 210, 0.14);
  background:
    linear-gradient(180deg, rgba(32, 33, 36, 0.98), rgba(63, 11, 20, 0.96)),
    ${(props) => props.theme.graphite};
  color: ${(props) => props.theme.darkWhite};
  text-align: center;

  strong {
    color: ${(props) => props.theme.white};
    font-size: 28px;
    font-weight: 800;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.spacing[3]};
  }

  a {
    display: inline-flex;
    min-height: 44px;
    align-items: center;
    color: ${(props) => props.theme.amber};
    font-size: ${(props) => props.theme.typography.button.size};
    font-weight: ${(props) => props.theme.typography.button.weight};
    text-decoration: none;
  }

  p {
    color: ${(props) => props.theme.lightGray};
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
`;

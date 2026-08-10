import styled from "styled-components";

export const Container = styled.div`
  min-height: 64px;
  background-color: ${(props) => props.theme.graphite};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-top: 1px solid rgba(234, 223, 210, 0.14);

  p {
    color: ${(props) => props.theme.lightGray};
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
`;

import styled from "styled-components";

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 18px 36px rgba(32, 33, 36, 0.08);

  @media (max-width: 760px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

export const Header = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.graphite};
  border-bottom: 1px solid rgba(234, 223, 210, 0.18);

  &:last-child {
    border-top-right-radius: 8px;
  }

  &:first-child {
    border-top-left-radius: 8px;
  }
`;

export const Td = styled.td`
  padding: 16px;
  color: ${(props) => props.theme.darkGray};
  font-weight: 500;
  line-height: 115%;
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

export const Body = styled.tbody``;

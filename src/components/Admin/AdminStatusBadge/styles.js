import styled, { css } from "styled-components";

const tones = {
  amber: css`
    border-color: rgba(200, 138, 45, 0.34);
    background: ${(props) => props.theme.amberSoft};
    color: ${(props) => props.theme.amberDark};
  `,
  brand: css`
    border-color: rgba(143, 29, 44, 0.24);
    background: ${(props) => props.theme.brandSoft};
    color: ${(props) => props.theme.brandDark};
  `,
  green: css`
    border-color: rgba(47, 125, 79, 0.24);
    background: rgba(47, 125, 79, 0.1);
    color: ${(props) => props.theme.green};
  `,
  neutral: css`
    border-color: ${(props) => props.theme.border};
    background: ${(props) => props.theme.cream};
    color: ${(props) => props.theme.graphiteSoft};
  `,
  red: css`
    border-color: rgba(179, 38, 30, 0.22);
    background: rgba(179, 38, 30, 0.08);
    color: ${(props) => props.theme.red};
  `,
};

export const Badge = styled.span`
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: ${(props) => props.theme.radii.pill};
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 800;
  line-height: 1;
  white-space: nowrap;

  ${(props) => tones[props.$tone]}
`;

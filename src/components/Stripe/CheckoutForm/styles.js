import styled from "styled-components";

export const Page = styled.main`
  min-height: calc(100vh - ${(props) => props.theme.layout.headerHeight});
  padding: ${(props) => props.theme.spacing[12]} ${(props) => props.theme.spacing[5]};
  background:
    radial-gradient(circle at 12% 0%, rgba(200, 138, 45, 0.16), transparent 28rem),
    ${(props) => props.theme.cream};

  @media (max-width: 640px) {
    padding: ${(props) => props.theme.spacing[8]} ${(props) => props.theme.spacing[4]};
  }
`;

export const CheckoutHeader = styled.header`
  width: min(${(props) => props.theme.layout.container}, 100%);
  margin: 0 auto ${(props) => props.theme.spacing[8]};

  span {
    color: ${(props) => props.theme.amber};
    font-size: ${(props) => props.theme.typography.label.size};
    font-weight: ${(props) => props.theme.typography.label.weight};
    text-transform: uppercase;
  }

  h1 {
    max-width: 720px;
    margin-top: ${(props) => props.theme.spacing[3]};
    color: ${(props) => props.theme.graphite};
    font-size: clamp(34px, 5vw, 56px);
    font-weight: ${(props) => props.theme.typography.h1.weight};
    line-height: ${(props) => props.theme.typography.h1.lineHeight};
  }

  p {
    max-width: 640px;
    margin-top: ${(props) => props.theme.spacing[4]};
    color: ${(props) => props.theme.muted};
    font-size: ${(props) => props.theme.typography.body.desktop};
    line-height: ${(props) => props.theme.typography.body.lineHeight};
  }
`;

export const CheckoutGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: ${(props) => props.theme.spacing[6]};
  width: min(${(props) => props.theme.layout.container}, 100%);
  margin: 0 auto;
  align-items: start;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

export const FormCard = styled.article`
  display: grid;
  gap: ${(props) => props.theme.spacing[6]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.md};
  padding: ${(props) => props.theme.spacing[6]};
  background: ${(props) => props.theme.paper};
  box-shadow: ${(props) => props.theme.shadows.medium};

  h2 {
    margin-top: ${(props) => props.theme.spacing[3]};
    color: ${(props) => props.theme.graphite};
    font-size: ${(props) => props.theme.typography.h3.desktop};
    font-weight: 800;
  }

  p {
    margin-top: ${(props) => props.theme.spacing[2]};
    color: ${(props) => props.theme.muted};
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    padding: ${(props) => props.theme.spacing[5]};
  }
`;

export const TestBadge = styled.span`
  display: inline-flex;
  width: fit-content;
  border: 1px solid ${(props) => props.theme.amber};
  border-radius: ${(props) => props.theme.radii.pill};
  padding: 7px 10px;
  background: ${(props) => props.theme.amberSoft};
  color: ${(props) => props.theme.brandDark};
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
`;

export const PaymentForm = styled.form`
  display: grid;
  gap: ${(props) => props.theme.spacing[5]};
`;

export const PrimaryButton = styled.button`
  min-height: 54px;
  border: none;
  border-radius: ${(props) => props.theme.radii.sm};
  background: ${(props) => props.theme.brand};
  color: ${(props) => props.theme.white};
  cursor: pointer;
  font-size: 15px;
  font-weight: 800;
  transition:
    background-color ${(props) => props.theme.transitions.base},
    box-shadow ${(props) => props.theme.transitions.base},
    transform ${(props) => props.theme.transitions.fast};

  &:hover:not(:disabled) {
    background: ${(props) => props.theme.brandDark};
    box-shadow: 0 12px 28px rgba(95, 16, 29, 0.22);
    transform: translateY(-1px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.68;
  }
`;

export const ErrorMessage = styled.div`
  border: 1px solid rgba(179, 38, 30, 0.28);
  border-radius: ${(props) => props.theme.radii.sm};
  padding: ${(props) => props.theme.spacing[3]};
  background: rgba(179, 38, 30, 0.08);
  color: ${(props) => props.theme.red};
  font-size: 14px;
  font-weight: 700;
`;

export const PaymentAside = styled.aside`
  display: grid;
  gap: ${(props) => props.theme.spacing[4]};
`;

export const SummaryCard = styled.div`
  display: grid;
  gap: ${(props) => props.theme.spacing[4]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.md};
  padding: ${(props) => props.theme.spacing[6]};
  background: ${(props) => props.theme.paper};
  box-shadow: ${(props) => props.theme.shadows.soft};

  header {
    padding-bottom: ${(props) => props.theme.spacing[4]};
    border-bottom: 1px solid ${(props) => props.theme.border};
  }

  header span {
    color: ${(props) => props.theme.amber};
    font-size: ${(props) => props.theme.typography.label.size};
    font-weight: ${(props) => props.theme.typography.label.weight};
    text-transform: uppercase;
  }

  h2 {
    margin-top: ${(props) => props.theme.spacing[2]};
    color: ${(props) => props.theme.graphite};
    font-size: ${(props) => props.theme.typography.h3.desktop};
    font-weight: 800;
  }

  @media (max-width: 480px) {
    padding: ${(props) => props.theme.spacing[5]};
  }
`;

export const OrderList = styled.ul`
  display: grid;
  gap: ${(props) => props.theme.spacing[3]};
  max-height: 260px;
  overflow: auto;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
    gap: ${(props) => props.theme.spacing[4]};
    color: ${(props) => props.theme.graphite};
  }

  div {
    display: grid;
    gap: 2px;
  }

  span {
    color: ${(props) => props.theme.muted};
    font-size: 13px;
  }

  strong {
    font-weight: 800;
  }
`;

export const SummaryLine = styled.p`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing[4]};
  color: ${(props) => props.theme.muted};
  font-size: 15px;

  strong {
    color: ${(props) => props.theme.graphite};
    font-weight: 800;
  }
`;

export const SummaryTotal = styled.p`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing[4]};
  padding-top: ${(props) => props.theme.spacing[5]};
  border-top: 1px solid ${(props) => props.theme.border};

  span {
    color: ${(props) => props.theme.graphite};
    font-size: 18px;
    font-weight: 800;
  }

  strong {
    color: ${(props) => props.theme.brand};
    font-size: clamp(22px, 6vw, 28px);
    font-weight: 800;
  }
`;

export const SecureNote = styled.p`
  color: ${(props) => props.theme.muted};
  font-size: 13px;
  line-height: 1.6;

  a {
    color: ${(props) => props.theme.brand};
    font-weight: 800;
    text-decoration: none;
  }
`;

import ReactSelect from "react-select";
import styled from "styled-components";

import { Button } from "../../../components";

export const FormGrid = styled.div`
  display: grid;
  min-width: 0;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);
  gap: ${(props) => props.theme.spacing[6]};
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Form = styled.form`
  display: grid;
  min-width: 0;
  gap: ${(props) => props.theme.spacing[4]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.md};
  padding: ${(props) => props.theme.spacing[6]};
  background-color: ${(props) => props.theme.paper};
  box-shadow: ${(props) => props.theme.shadows.soft};
`;

export const Fieldset = styled.div`
  display: grid;
  min-width: 0;
  grid-template-columns: 1fr 180px;
  gap: ${(props) => props.theme.spacing[4]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const InputGroup = styled.div`
  display: grid;
  min-width: 0;
  gap: 7px;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.graphite};
  font-size: 14px;
  font-weight: 800;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.sm};
  padding: 0 12px;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.graphite};
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.amber};
    box-shadow: 0 0 0 3px rgba(200, 138, 45, 0.16);
  }
`;

export const LabelUpload = styled.label`
  display: flex;
  min-width: 0;
  min-height: 62px;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing[3]};
  border: 1px dashed ${(props) => props.theme.brand};
  border-radius: ${(props) => props.theme.radii.sm};
  padding: ${(props) => props.theme.spacing[4]};
  background: ${(props) => props.theme.brandSoft};
  color: ${(props) => props.theme.brandDark};
  cursor: pointer;
  font-weight: 800;

  input {
    width: 1px;
    height: 1px;
    position: absolute;
    opacity: 0;
  }
`;

export const FileName = styled.span`
  overflow-wrap: anywhere;
  color: ${(props) => props.theme.muted};
  font-size: 13px;
  font-weight: 700;
`;

export const Select = styled(ReactSelect)`
  min-width: 0;

  .select__control {
    min-height: 48px;
  }
`;

export const SubmitButton = styled(Button)`
  margin-top: ${(props) => props.theme.spacing[3]};
`;

export const ErrorMessage = styled.span`
  min-height: 16px;
  color: ${(props) => props.theme.darkRed};
  font-size: 13px;
  font-weight: 700;
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing[3]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.sm};
  padding: ${(props) => props.theme.spacing[3]};
  background: ${(props) => props.theme.cream};

  input {
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: ${(props) => props.theme.brand};
  }
`;

export const PreviewCard = styled.aside`
  display: grid;
  min-width: 0;
  gap: ${(props) => props.theme.spacing[4]};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.radii.md};
  padding: ${(props) => props.theme.spacing[5]};
  background: ${(props) => props.theme.paper};
  box-shadow: ${(props) => props.theme.shadows.soft};

  > span {
    color: ${(props) => props.theme.amber};
    font-size: ${(props) => props.theme.typography.label.size};
    font-weight: ${(props) => props.theme.typography.label.weight};
    text-transform: uppercase;
  }

  strong {
    color: ${(props) => props.theme.graphite};
    font-size: 20px;
    font-weight: 800;
  }

  p {
    color: ${(props) => props.theme.muted};
    font-size: 14px;
    line-height: 1.6;
  }

  > div {
    display: grid;
    min-width: 0;
    min-height: 220px;
    place-items: center;
    border: 1px dashed ${(props) => props.theme.borderStrong};
    border-radius: ${(props) => props.theme.radii.sm};
    padding: ${(props) => props.theme.spacing[5]};
    text-align: center;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: ${(props) => props.theme.radii.sm};
  object-fit: cover;
`;

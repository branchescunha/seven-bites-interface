import PropTypes from "prop-types";

import {
  Actions,
  Breadcrumb,
  Container,
  Content,
  Eyebrow,
  Title,
} from "./styles";

export function AdminPageHeader({
  action,
  breadcrumb,
  children,
  description,
  title,
}) {
  return (
    <Container>
      <Content>
        <Breadcrumb aria-label="Breadcrumb">{breadcrumb}</Breadcrumb>
        <Eyebrow>Operação Seven Bites</Eyebrow>
        <Title>{title}</Title>
        {description && <p>{description}</p>}
      </Content>
      {(action || children) && <Actions>{action || children}</Actions>}
    </Container>
  );
}

AdminPageHeader.propTypes = {
  action: PropTypes.node,
  breadcrumb: PropTypes.string.isRequired,
  children: PropTypes.node,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

import PropTypes from "prop-types";

import { Container } from "./styles";

export function AdminPanel({ children }) {
  return <Container>{children}</Container>;
}

AdminPanel.propTypes = {
  children: PropTypes.node.isRequired,
};

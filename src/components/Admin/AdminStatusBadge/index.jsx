import PropTypes from "prop-types";

import { Badge } from "./styles";

export function AdminStatusBadge({ children, tone = "neutral" }) {
  return <Badge $tone={tone}>{children}</Badge>;
}

AdminStatusBadge.propTypes = {
  children: PropTypes.node.isRequired,
  tone: PropTypes.oneOf(["amber", "brand", "green", "neutral", "red"]),
};

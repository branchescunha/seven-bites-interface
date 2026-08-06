import PropTypes from "prop-types";

import { Container } from "./styles";

export function FeedbackState({ actionLabel, message, onAction, title }) {
  return (
    <Container aria-live="polite">
      {title && <strong>{title}</strong>}
      <span>{message}</span>
      {actionLabel && onAction && (
        <button type="button" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </Container>
  );
}

FeedbackState.propTypes = {
  actionLabel: PropTypes.string,
  message: PropTypes.string.isRequired,
  onAction: PropTypes.func,
  title: PropTypes.string,
};

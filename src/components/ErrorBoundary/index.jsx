import PropTypes from "prop-types";
import { Component } from "react";

import { Actions, Container } from "./styles";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleReload = () => {
    window.location.reload();
  };

  handleHome = () => {
    window.location.assign("/");
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container role="alert">
          <h1>Algo deu errado.</h1>
          <p>Atualize a pagina ou volte para o inicio.</p>
          <Actions>
            <button type="button" onClick={this.handleReload}>
              Atualizar
            </button>
            <button type="button" onClick={this.handleHome}>
              Inicio
            </button>
          </Actions>
        </Container>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <strong>Seven Bites</strong>
      <nav aria-label="Navegação do rodapé">
        <a href="/">Home</a>
        <a href="/cardapio">Cardápio</a>
        <a href="/carrinho">Carrinho</a>
      </nav>
      <p>Hambúrgueres artesanais, pedido online e preparo sob demanda.</p>
    </Container>
  );
}

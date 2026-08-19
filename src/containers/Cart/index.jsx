import { CartItems, CartResume } from "../../components";
import { Banner, Container, Content, PageHeader } from "./styles";

export function Cart() {
  return (
    <Container>
      <Banner>
        <span>Seu carrinho</span>
        <strong>Revise o pedido antes do pagamento.</strong>
        <p>
          Confira quantidades, subtotais e total antes de seguir para o
          checkout.
        </p>
      </Banner>
      <PageHeader>
        <span>Pedido online</span>
        <h1>Itens selecionados</h1>
      </PageHeader>
      <Content>
        <CartItems />
        <CartResume />
      </Content>
    </Container>
  );
}

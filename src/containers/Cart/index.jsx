import { CartItems, CartResume } from "../../components";
import { Banner, Container, Content, Title } from "./styles";

export function Cart() {
  return (
    <Container>
      <Banner>
        <strong>Seven Bites</strong>
        <span>Revise seu pedido antes do pagamento.</span>
      </Banner>
      <Title>Seu pedido</Title>
      <Content>
        <CartItems />
        <CartResume />
      </Content>
    </Container>
  );
}

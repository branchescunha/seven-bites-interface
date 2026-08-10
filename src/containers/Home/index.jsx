import { CategoriesCarousel, OffersCarousel } from "../../components";
import { Banner, Container } from "./styles";

export function Home() {
  return (
    <main>
      <Banner>
        <div>
          <span>Seven Bites</span>
          <h1>Sete mordidas para lembrar o sabor.</h1>
          <p>
            Hamburguers artesanais, ingredientes selecionados e pedidos online
            sem complicacao.
          </p>
        </div>
      </Banner>
      <Container>
        <div>
          <CategoriesCarousel />
          <OffersCarousel />
        </div>
      </Container>
    </main>
  );
}

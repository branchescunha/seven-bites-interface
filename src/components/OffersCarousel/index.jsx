import { useEffect, useState } from "react";
import CarouselModule from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../CardProduct";
import { FeedbackState } from "../FeedbackState";
import { Container, Title } from "./styles";

const Carousel = CarouselModule.default || CarouselModule;

export function OffersCarousel() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await api.get("/products");
        const productList = Array.isArray(data) ? data : [];

        const onlyOffers = productList
          .filter((product) => product.offer)
          .map((product) => ({
            currencyValue: formatPrice(product.price),
            ...product,
          }));

        setOffers(onlyOffers);
      } catch (err) {
        setError(err.publicMessage || "Nao foi possivel carregar ofertas.");
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    },
  };

  return (
    <Container>
      <Title>Ofertas do dia</Title>

      {isLoading && <FeedbackState message="Carregando ofertas..." />}
      {!isLoading && error && (
        <FeedbackState message={error} title="Ofertas indisponiveis" />
      )}
      {!isLoading && !error && offers.length === 0 && (
        <FeedbackState message="Nenhuma oferta disponivel." />
      )}

      {!isLoading && !error && offers.length > 0 && (
        <Carousel
          responsive={responsive}
          infinite={true}
          partialVisible={false}
          itemClass="carousel-item"
        >
          {offers.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </Carousel>
      )}
    </Container>
  );
}

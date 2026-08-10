import { useEffect, useState } from "react";
import CarouselModule from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { FeedbackState } from "../FeedbackState";
import { CategoryButton, Container, ContainerItems, Title } from "./styles";

const Carousel = CarouselModule.default || CarouselModule;

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get("/categories");

        setCategories(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.publicMessage || "Nao foi possivel carregar categorias.");
      } finally {
        setIsLoading(false);
      }
    }

    loadCategories();
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
      <Title>Categorias</Title>

      {isLoading && <FeedbackState message="Carregando categorias..." />}
      {!isLoading && error && (
        <FeedbackState message={error} title="Categorias indisponiveis" />
      )}
      {!isLoading && !error && categories.length === 0 && (
        <FeedbackState message="Nenhuma categoria cadastrada." />
      )}

      {!isLoading && !error && categories.length > 0 && (
        <Carousel
          responsive={responsive}
          infinite={true}
          partialVisible={false}
          itemClass="carousel-item"
        >
          {categories.map((category) => (
            <ContainerItems key={category.id} $imageUrl={category.url}>
              <CategoryButton
                onClick={() => {
                  navigate({
                    pathname: "/cardapio",
                    search: `?categoria=${category.id}`,
                  });
                }}
              >
                {category.name}
              </CategoryButton>
            </ContainerItems>
          ))}
        </Carousel>
      )}
    </Container>
  );
}

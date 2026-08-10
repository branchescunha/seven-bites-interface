import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { CardProduct } from "../../components/CardProduct";
import { FeedbackState } from "../../components/FeedbackState";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import {
  Banner,
  CategoryButton,
  CategoryMenu,
  Container,
  ProductsContainer,
} from "./styles";

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get("categoria");

    if (categoryId) {
      return categoryId;
    }

    return 0;
  });

  useEffect(() => {
    async function loadMenu() {
      try {
        const [categoriesResponse, productsResponse] = await Promise.all([
          api.get("/categories"),
          api.get("/products"),
        ]);

        const categoryList = Array.isArray(categoriesResponse.data)
          ? categoriesResponse.data
          : [];
        const productList = Array.isArray(productsResponse.data)
          ? productsResponse.data
          : [];

        const newCategories = [{ id: 0, name: "Todas" }, ...categoryList];
        const newProducts = productList.map((product) => ({
          currencyValue: formatPrice(product.price),
          ...product,
        }));

        setCategories(newCategories);
        setProducts(newProducts);
      } catch (err) {
        setError(err.publicMessage || "Nao foi possivel carregar o cardapio.");
      } finally {
        setIsLoading(false);
      }
    }

    loadMenu();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory,
      );
      setFilteredProducts(newFilteredProducts);
    }
  }, [products, activeCategory]);

  return (
    <Container>
      <Banner>
        <h1>
          Cardapio Seven Bites
          <span>Escolha sua proxima mordida com preparo sob demanda.</span>
        </h1>
      </Banner>
      <CategoryMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              navigate(
                {
                  pathname: "/cardapio",
                  search: `?categoria=${category.id}`,
                },
                {
                  replace: true,
                },
              );
              setActiveCategory(category.id);
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryMenu>

      <ProductsContainer>
        {isLoading && <FeedbackState message="Carregando cardapio..." />}
        {!isLoading && error && (
          <FeedbackState message={error} title="Cardapio indisponivel" />
        )}
        {!isLoading && !error && filteredProducts.length === 0 && (
          <FeedbackState message="Nenhum produto encontrado." />
        )}
        {!isLoading &&
          !error &&
          filteredProducts.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
      </ProductsContainer>
    </Container>
  );
}

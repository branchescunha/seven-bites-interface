import {
  ArrowRight,
  Clock,
  Fire,
  ForkKnife,
  ShoppingCart,
  Sparkle,
} from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { FeedbackState } from "../../components";
import { mediaAssets } from "../../config/mediaAssets";
import { useCart } from "../../hooks/CartContext";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import {
  BenefitCard,
  BenefitsGrid,
  CategoryCard,
  CategoryGrid,
  CategoryMedia,
  CtaActions,
  CtaBand,
  CtaContent,
  Eyebrow,
  Hero,
  HeroActions,
  HeroContent,
  HeroHighlights,
  HeroMedia,
  HomeSection,
  HomeShell,
  ProductCard,
  ProductGrid,
  ProductImage,
  SectionHeader,
  StatCard,
} from "./styles";

const categoryContent = {
  Entradas: {
    label: "Comece por aqui",
    tone: "amber",
  },
  Hambúrgueres: {
    label: "Chapa quente",
    tone: "bordeaux",
  },
  Bebidas: {
    label: "Para acompanhar",
    tone: "green",
  },
  Sobremesas: {
    label: "Final doce",
    tone: "cream",
  },
};

const benefits = [
  {
    icon: ForkKnife,
    title: "Feito na hora",
    text: "Escolha o burger, revise o carrinho e acompanhe tudo sem perder o apetite.",
  },
  {
    icon: Clock,
    title: "Pedido sem enrolação",
    text: "Cardápio claro, preço visível e checkout direto para quem já decidiu.",
  },
  {
    icon: Fire,
    title: "Sabor em primeiro plano",
    text: "Fotos, ofertas e categorias ajudam você a escolher pelo que dá vontade.",
  },
];

export function Home() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { putProductInCart } = useCart();

  useEffect(() => {
    async function loadHomeData() {
      try {
        const [categoriesResponse, productsResponse] = await Promise.all([
          api.get("/categories"),
          api.get("/products"),
        ]);

        setCategories(
          Array.isArray(categoriesResponse.data) ? categoriesResponse.data : [],
        );
        setProducts(
          Array.isArray(productsResponse.data) ? productsResponse.data : [],
        );
      } catch (err) {
        setError(err.publicMessage || "Não foi possível carregar a vitrine.");
      } finally {
        setIsLoading(false);
      }
    }

    loadHomeData();
  }, []);

  const featuredProducts = useMemo(() => {
    return products
      .filter((product) => product.offer)
      .slice(0, 4)
      .map((product) => ({
        ...product,
        currencyValue: formatPrice(product.price),
      }));
  }, [products]);

  function handleAddToCart(product) {
    putProductInCart({
      ...product,
      currencyValue: product.currencyValue || formatPrice(product.price),
    });
    toast.success(`${product.name} adicionado ao carrinho.`);
  }

  return (
    <HomeShell>
      <Hero>
        <HeroContent>
          <Eyebrow>
            <Sparkle size={18} weight="fill" />
            Hambúrgueres artesanais
          </Eyebrow>
          <h1>O burger chega primeiro pelos olhos.</h1>
          <p>
            Pães tostados, queijo derretido, molhos marcantes e um pedido online
            simples para escolher sem quebrar o clima.
          </p>
          <HeroActions>
            <Link to="/cardapio">
              Ver cardápio
              <ArrowRight size={18} weight="bold" />
            </Link>
            <a href="#ofertas">Ofertas de hoje</a>
          </HeroActions>
        </HeroContent>

        <HeroMedia>
          <img
            src={mediaAssets.homeHero}
            alt="Hambúrguer artesanal Seven Bites"
          />
          <div>
            <span>Seven Bites</span>
            <strong>Burger da casa</strong>
          </div>
        </HeroMedia>

        <HeroHighlights aria-label="Diferenciais Seven Bites">
          <StatCard>
            <strong>36</strong>
            <span>opções no catálogo</span>
          </StatCard>
          <StatCard>
            <strong>4</strong>
            <span>categorias principais</span>
          </StatCard>
          <StatCard>
            <strong>Pedido</strong>
            <span>online simples</span>
          </StatCard>
        </HeroHighlights>
      </Hero>

      <HomeSection>
        <SectionHeader>
          <Eyebrow>Escolha por fome</Eyebrow>
          <h2>Do começo doce ao burger principal.</h2>
          <p>
            Entradas, burgers, bebidas e sobremesas organizados para chegar
            rápido ao que você quer pedir.
          </p>
        </SectionHeader>

        {isLoading && <FeedbackState message="Carregando categorias..." />}
        {!isLoading && error && (
          <FeedbackState message={error} title="Vitrine indisponível" />
        )}
        {!isLoading && !error && (
          <CategoryGrid>
            {categories.slice(0, 4).map((category) => {
              const content = categoryContent[category.name] || {
                label: "Seleção Seven Bites",
                tone: "bordeaux",
              };

              return (
                <CategoryCard
                  key={category.id}
                  to={`/cardapio?categoria=${category.id}`}
                  $tone={content.tone}
                >
                  <CategoryMedia $imageUrl={category.url} aria-hidden="true" />
                  <span>{content.label}</span>
                  <strong>{category.name}</strong>
                  <small>Explorar categoria</small>
                </CategoryCard>
              );
            })}
          </CategoryGrid>
        )}
      </HomeSection>

      <HomeSection id="ofertas">
        <SectionHeader>
          <Eyebrow>
            <Fire size={18} weight="fill" />
            Em destaque
          </Eyebrow>
          <h2>Favoritos para decidir rápido.</h2>
          <p>
            Alguns itens aparecem com destaque para encurtar o caminho entre
            fome e carrinho.
          </p>
        </SectionHeader>

        {isLoading && <FeedbackState message="Carregando ofertas..." />}
        {!isLoading && error && (
          <FeedbackState message={error} title="Ofertas indisponíveis" />
        )}
        {!isLoading && !error && featuredProducts.length === 0 && (
          <FeedbackState message="Nenhuma oferta disponível." />
        )}
        {!isLoading && !error && featuredProducts.length > 0 && (
          <ProductGrid>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id}>
                <ProductImage>
                  <img src={product.url} alt={product.name} />
                  <span>Oferta</span>
                </ProductImage>
                <div>
                  <strong>{product.name}</strong>
                  <p>{product.category?.name || "Seven Bites"}</p>
                </div>
                <footer>
                  <span>{product.currencyValue}</span>
                  <button
                    type="button"
                    aria-label={`Adicionar ${product.name} ao carrinho`}
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart size={18} weight="bold" />
                    Adicionar
                  </button>
                </footer>
              </ProductCard>
            ))}
          </ProductGrid>
        )}
      </HomeSection>

      <HomeSection>
        <SectionHeader>
          <Eyebrow>Por que Seven Bites</Eyebrow>
          <h2>Menos passos. Mais vontade de comer.</h2>
        </SectionHeader>
        <BenefitsGrid>
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <BenefitCard key={benefit.title}>
                <Icon size={28} weight="bold" />
                <strong>{benefit.title}</strong>
                <p>{benefit.text}</p>
              </BenefitCard>
            );
          })}
        </BenefitsGrid>
      </HomeSection>

      <CtaBand>
        <CtaContent>
          <Eyebrow>Pedido online</Eyebrow>
          <h2>Escolha agora, revise no carrinho.</h2>
          <p>
            Abra o cardápio, adicione seus favoritos e finalize quando o pedido
            estiver do seu jeito.
          </p>
        </CtaContent>
        <CtaActions>
          <Link to="/cardapio">Abrir cardápio</Link>
          <Link to="/carrinho">Ver carrinho</Link>
        </CtaActions>
      </CtaBand>
    </HomeShell>
  );
}

import {
  ArrowRight,
  Clock,
  Fire,
  ForkKnife,
  ShieldCheck,
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
    label: "Para abrir o apetite",
    tone: "amber",
  },
  Hambúrgueres: {
    label: "Assinaturas da casa",
    tone: "bordeaux",
  },
  Bebidas: {
    label: "Escolhas para acompanhar",
    tone: "green",
  },
  Sobremesas: {
    label: "Final doce e memoravel",
    tone: "cream",
  },
};

const benefits = [
  {
    icon: ForkKnife,
    title: "Artesanal sem espera confusa",
    text: "Cardápio direto, preparo sob demanda e pedido revisado antes do pagamento.",
  },
  {
    icon: ShieldCheck,
    title: "Pagamento protegido",
    text: "Fluxo integrado ao Stripe em modo seguro, com validação do pedido no backend.",
  },
  {
    icon: Clock,
    title: "Experiência objetiva",
    text: "Da escolha ao checkout, cada etapa foi pensada para reduzir fricção.",
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
            Premium fast-casual
          </Eyebrow>
          <h1>Burgers artesanais com ritmo de cidade.</h1>
          <p>
            Seven Bites combina ingredientes selecionados, preparo sob demanda e
            uma jornada digital simples para pedir sem perder o apetite.
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
            alt="Hamburguer artesanal premium Seven Bites"
          />
          <div>
            <span>Seven Bites</span>
            <strong>Signature burger</strong>
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
            <strong>Stripe</strong>
            <span>checkout seguro</span>
          </StatCard>
        </HeroHighlights>
      </Hero>

      <HomeSection>
        <SectionHeader>
          <Eyebrow>Escolha por momento</Eyebrow>
          <h2>Categorias com personalidade própria.</h2>
          <p>
            Quatro caminhos para montar o pedido: entrada, burger, bebida e
            sobremesa no mesmo ritmo.
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
                label: "Selecao Seven Bites",
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
          <h2>Ofertas com sabor de assinatura.</h2>
          <p>
            Seleções com destaque para quem quer decidir rápido sem abrir mão de
            uma boa escolha.
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
          <h2>Uma experiência premium sem complicar o pedido.</h2>
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
          <h2>Monte sua próxima mordida.</h2>
          <p>
            Escolha, revise o carrinho e finalize pelo checkout conectado ao
            fluxo seguro da Seven Bites.
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

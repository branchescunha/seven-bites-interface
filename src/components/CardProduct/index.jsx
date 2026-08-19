import { ShoppingCart } from "@phosphor-icons/react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import { useCart } from "../../hooks/CartContext";
import {
  AddButton,
  CardContent,
  CardImage,
  CategoryName,
  Container,
  ImageWrap,
  OfferTag,
  ProductFooter,
} from "./styles";

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();

  const handleAddToCart = () => {
    putProductInCart(product);
    toast.success(`${product.name} adicionado ao carrinho.`);
  };

  return (
    <Container>
      <ImageWrap>
        {product.offer && <OfferTag>Oferta</OfferTag>}
        <CardImage src={product.url} alt={product.name} />
      </ImageWrap>

      <CardContent>
        <CategoryName>{product.category?.name || "Seven Bites"}</CategoryName>
        <h3>{product.name}</h3>
      </CardContent>

      <ProductFooter>
        <strong>{product.currencyValue}</strong>
        <AddButton
          type="button"
          aria-label={`Adicionar ${product.name} ao carrinho`}
          onClick={handleAddToCart}
        >
          <ShoppingCart size={18} weight="bold" />
          Adicionar
        </AddButton>
      </ProductFooter>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};

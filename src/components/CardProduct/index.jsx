import PropTypes from "prop-types";
import { toast } from "react-toastify";

import { useCart } from "../../hooks/CartContext";
import { CartButton } from "../CartButton";
import { CardImage, Container } from "./styles";

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();

  const handleAddToCart = () => {
    putProductInCart(product);
    toast.success(`${product.name} adicionado ao carrinho.`);
  };

  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
      </div>
      <CartButton
        aria-label={`Adicionar ${product.name} ao carrinho`}
        onClick={handleAddToCart}
      />
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};

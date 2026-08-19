import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import { useCart } from "../../hooks/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import {
  ButtonGroup,
  EmptyCart,
  ItemDetails,
  ItemHeader,
  ItemMeta,
  ItemRow,
  ItemsList,
  ProductImage,
  ProductInfo,
  ProductTotalPrice,
  QuantityValue,
  RemoveButton,
} from "./styles";

export function CartItems() {
  const { cartProducts, decreaseProduct, increaseProduct, deleteProduct } =
    useCart();

  return (
    <ItemsList aria-label="Itens do carrinho">
      {cartProducts?.length ? (
        cartProducts.map((product) => (
          <ItemRow key={product.id}>
            <ProductImage src={product.url} alt={product.name} />
            <ProductInfo>
              <ItemHeader>
                <div>
                  <ItemMeta>{product.category?.name || "Seven Bites"}</ItemMeta>
                  <h2>{product.name}</h2>
                </div>
                <RemoveButton
                  type="button"
                  aria-label={`Remover ${product.name} do carrinho`}
                  onClick={() => deleteProduct(product.id)}
                >
                  <Trash size={18} weight="bold" />
                </RemoveButton>
              </ItemHeader>

              <ItemDetails>
                <div>
                  <span>Preço unitário</span>
                  <strong>{product.currencyValue}</strong>
                </div>

                <ButtonGroup aria-label={`Quantidade de ${product.name}`}>
                  <button
                    type="button"
                    aria-label={`Reduzir quantidade de ${product.name}`}
                    onClick={() => decreaseProduct(product.id)}
                  >
                    <Minus size={16} weight="bold" />
                  </button>
                  <QuantityValue aria-live="polite">
                    {product.quantity}
                  </QuantityValue>
                  <button
                    type="button"
                    aria-label={`Aumentar quantidade de ${product.name}`}
                    onClick={() => increaseProduct(product.id)}
                  >
                    <Plus size={16} weight="bold" />
                  </button>
                </ButtonGroup>

                <div>
                  <span>Subtotal</span>
                  <ProductTotalPrice>
                    {formatPrice(product.quantity * product.price)}
                  </ProductTotalPrice>
                </div>
              </ItemDetails>
            </ProductInfo>
          </ItemRow>
        ))
      ) : (
        <EmptyCart>
          <span>Carrinho vazio</span>
          <h2>Seu pedido ainda não começou.</h2>
          <p>
            Escolha um item do cardápio e volte para revisar quantidades antes
            do pagamento.
          </p>
          <Link to="/cardapio">Ver cardápio</Link>
        </EmptyCart>
      )}
    </ItemsList>
  );
}

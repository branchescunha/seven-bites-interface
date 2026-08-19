import { Pencil, Plus } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  AdminPageHeader,
  AdminPanel,
  AdminStatusBadge,
  FeedbackState,
} from "../../../components";
import { api } from "../../../services/api";
import { formatPrice } from "../../../utils/formatPrice";
import {
  CardsGrid,
  Container,
  EditButton,
  MobileProductCard,
  ProductImage,
  Table,
  TableScroll,
} from "./styles";

export function Products() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await api.get("/products");

        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.publicMessage || "Não foi possível carregar os produtos.");
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  function editProduct(product) {
    navigate("/admin/editar-produto", { state: { product } });
  }

  return (
    <Container>
      <AdminPageHeader
        breadcrumb="Admin / Produtos"
        description="Gerencie itens do catálogo, preços, categorias e ofertas exibidas na loja."
        title="Produtos"
        action={
          <Link to="/admin/novo-produto">
            <Plus />
            Novo produto
          </Link>
        }
      />

      {isLoading && <FeedbackState message="Carregando produtos..." />}
      {!isLoading && error && (
        <FeedbackState message={error} title="Produtos indisponíveis" />
      )}
      {!isLoading && !error && products.length === 0 && (
        <FeedbackState message="Nenhum produto cadastrado." />
      )}

      {!isLoading && !error && products.length > 0 && (
        <>
          <AdminPanel>
            <TableScroll>
              <Table aria-label="Tabela de produtos cadastrados">
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Oferta</th>
                    <th aria-label="Ações">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <div>
                          <ProductImage src={product.url} alt={product.name} />
                          <strong>{product.name}</strong>
                        </div>
                      </td>
                      <td>{product.category?.name || "Sem categoria"}</td>
                      <td>{formatPrice(product.price)}</td>
                      <td>
                        {product.offer ? (
                          <AdminStatusBadge tone="green">
                            Em oferta
                          </AdminStatusBadge>
                        ) : (
                          <AdminStatusBadge>Regular</AdminStatusBadge>
                        )}
                      </td>
                      <td>
                        <EditButton
                          aria-label={`Editar produto ${product.name}`}
                          type="button"
                          onClick={() => editProduct(product)}
                        >
                          <Pencil />
                        </EditButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableScroll>
          </AdminPanel>

          <CardsGrid aria-label="Produtos cadastrados">
            {products.map((product) => (
              <MobileProductCard key={product.id}>
                <header>
                  <ProductImage src={product.url} alt={product.name} />
                  {product.offer ? (
                    <AdminStatusBadge tone="green">Em oferta</AdminStatusBadge>
                  ) : (
                    <AdminStatusBadge>Regular</AdminStatusBadge>
                  )}
                </header>
                <strong>{product.name}</strong>
                <span>{product.category?.name || "Sem categoria"}</span>
                <p>{formatPrice(product.price)}</p>
                <EditButton
                  aria-label={`Editar produto ${product.name}`}
                  type="button"
                  onClick={() => editProduct(product)}
                >
                  <Pencil />
                  Editar
                </EditButton>
              </MobileProductCard>
            ))}
          </CardsGrid>
        </>
      )}
    </Container>
  );
}

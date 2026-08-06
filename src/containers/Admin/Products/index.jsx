import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CheckCircle, Pencil, XCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FeedbackState } from "../../../components";
import { api } from "../../../services/api";
import { standardTheme } from "../../../styles/themes/standard";
import { formatPrice } from "../../../utils/formatPrice";
import { Container, EditButton, ProductImage } from "./styles";

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
        setError(err.publicMessage || "Nao foi possivel carregar os produtos.");
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  function isOffer(offer) {
    if (offer) {
      return <CheckCircle color={standardTheme.green} size="28" />;
    }

    return <XCircle color={standardTheme.red} size="28" />;
  }

  function editProduct(product) {
    navigate("/admin/editar-produto", { state: { product } });
  }

  return (
    <Container>
      {isLoading && <FeedbackState message="Carregando produtos..." />}
      {!isLoading && error && (
        <FeedbackState message={error} title="Produtos indisponiveis" />
      )}
      {!isLoading && !error && products.length === 0 && (
        <FeedbackState message="Nenhum produto cadastrado." />
      )}

      {!isLoading && !error && products.length > 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="center">Preço</TableCell>
                <TableCell align="center">Produto em Oferta</TableCell>
                <TableCell align="center">Imagem do Produto</TableCell>
                <TableCell align="center">Editar Produto</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="center">
                    {formatPrice(product.price)}
                  </TableCell>
                  <TableCell align="center">{isOffer(product.offer)}</TableCell>
                  <TableCell align="center">
                    <ProductImage src={product.url} alt={product.name} />
                  </TableCell>
                  <TableCell align="center">
                    <EditButton
                      type="button"
                      onClick={() => editProduct(product)}
                    >
                      <Pencil />
                    </EditButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}

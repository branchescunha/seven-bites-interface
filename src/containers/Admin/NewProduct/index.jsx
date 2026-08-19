import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { AdminPageHeader, FeedbackState } from "../../../components";
import { api } from "../../../services/api";
import { AdminProductForm } from "../AdminProductForm";
import { Container } from "./styles";

export function NewProduct() {
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
        setError(err.publicMessage || "Não foi possível carregar categorias.");
      } finally {
        setIsLoading(false);
      }
    }

    loadCategories();
  }, []);

  const onSubmit = async (data) => {
    const productFormData = new FormData();

    productFormData.append("name", data.name);
    productFormData.append("price", data.price * 100);
    productFormData.append("category_id", data.category.id);
    productFormData.append("file", data.file[0]);
    productFormData.append("offer", data.offer);

    await toast.promise(api.post("/products", productFormData), {
      pending: "Adicionando o produto...",
      success: "Produto criado com sucesso.",
      error: "Falha ao adicionar o produto. Tente novamente.",
    });

    setTimeout(() => {
      navigate("/admin/produtos");
    }, 1600);
  };

  return (
    <Container>
      <AdminPageHeader
        breadcrumb="Admin / Produtos / Novo"
        description="Cadastre um item do catálogo com imagem, categoria, preço e status de oferta."
        title="Novo produto"
      />

      {isLoading && <FeedbackState message="Carregando categorias..." />}
      {!isLoading && error && (
        <FeedbackState message={error} title="Categorias indisponíveis" />
      )}
      {!isLoading && !error && (
        <AdminProductForm
          categories={categories}
          mode="create"
          onSubmit={onSubmit}
          submitLabel="Adicionar produto"
        />
      )}
    </Container>
  );
}

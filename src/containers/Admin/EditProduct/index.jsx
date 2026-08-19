import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { AdminPageHeader, FeedbackState } from "../../../components";
import { api } from "../../../services/api";
import { AdminProductForm } from "../AdminProductForm";
import { Container } from "./styles";

export function EditProduct() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state?.product;

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

  if (!product) {
    return <Navigate to="/admin/produtos" replace />;
  }

  const onSubmit = async (data) => {
    const productFormData = new FormData();

    productFormData.append("name", data.name);
    productFormData.append("price", data.price * 100);
    productFormData.append("category_id", data.category.id);
    if (data.file?.[0]) {
      productFormData.append("file", data.file[0]);
    }
    productFormData.append("offer", data.offer);

    await toast.promise(api.put(`/products/${product.id}`, productFormData), {
      pending: "Editando o produto...",
      success: "Produto editado com sucesso.",
      error: "Falha ao editar o produto. Tente novamente.",
    });

    setTimeout(() => {
      navigate("/admin/produtos");
    }, 1600);
  };

  return (
    <Container>
      <AdminPageHeader
        breadcrumb="Admin / Produtos / Editar"
        description="Atualize os dados do item sem alterar o fluxo atual de catálogo."
        title={`Editar ${product.name}`}
      />

      {isLoading && <FeedbackState message="Carregando categorias..." />}
      {!isLoading && error && (
        <FeedbackState message={error} title="Categorias indisponíveis" />
      )}
      {!isLoading && !error && (
        <AdminProductForm
          categories={categories}
          mode="edit"
          onSubmit={onSubmit}
          product={product}
          submitLabel="Salvar alteracoes"
        />
      )}
    </Container>
  );
}

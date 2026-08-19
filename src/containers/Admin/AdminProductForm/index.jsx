import { yupResolver } from "@hookform/resolvers/yup";
import { Image } from "@phosphor-icons/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import {
  ContainerCheckbox,
  ErrorMessage,
  Fieldset,
  FileName,
  Form,
  FormGrid,
  Input,
  InputGroup,
  Label,
  LabelUpload,
  PreviewCard,
  PreviewImage,
  Select,
  SubmitButton,
} from "./styles";

const buildSchema = (isEditing) =>
  yup.object({
    name: yup.string().required("Digite o nome do produto."),
    price: yup
      .number()
      .positive("Digite um preço maior que zero.")
      .required("Digite o preço do produto.")
      .typeError("Digite o preço do produto."),
    category: yup.object().required("Escolha uma categoria."),
    offer: yup.bool(),
    file: isEditing
      ? yup
          .mixed()
          .test("fileSize", "Carregue arquivos de ate 5mb.", (value) => {
            return !value?.length || value[0].size <= 5 * 1024 * 1024;
          })
          .test("type", "Carregue apenas imagens PNG ou JPEG.", (value) => {
            return (
              !value?.length ||
              value[0].type === "image/png" ||
              value[0].type === "image/jpeg"
            );
          })
      : yup
          .mixed()
          .test("required", "Escolha um arquivo para continuar.", (value) => {
            return value && value.length > 0;
          })
          .test("fileSize", "Carregue arquivos de ate 5mb.", (value) => {
            return (
              value && value.length > 0 && value[0].size <= 5 * 1024 * 1024
            );
          })
          .test("type", "Carregue apenas imagens PNG ou JPEG.", (value) => {
            return (
              value &&
              value.length > 0 &&
              (value[0].type === "image/png" || value[0].type === "image/jpeg")
            );
          }),
  });

export function AdminProductForm({
  categories,
  mode,
  onSubmit,
  product,
  submitLabel,
}) {
  const isEditing = mode === "edit";
  const [filename, setFilename] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(product?.url || null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      category: product?.category,
      name: product?.name || "",
      offer: Boolean(product?.offer),
      price: product?.price ? product.price / 100 : "",
    },
    resolver: yupResolver(buildSchema(isEditing)),
  });

  const fileRegistration = register("file");

  function handleFileChange(event) {
    const file = event?.target?.files?.[0];

    setFilename(file?.name || null);
    setPreviewUrl(file ? URL.createObjectURL(file) : product?.url || null);
    fileRegistration.onChange(event);
  }

  return (
    <FormGrid>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        aria-label="Formulario de produto"
      >
        <Fieldset>
          <InputGroup>
            <Label htmlFor="name">Nome do produto</Label>
            <Input id="name" type="text" {...register("name")} />
            <ErrorMessage aria-live="polite">
              {errors?.name?.message}
            </ErrorMessage>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="price">Preço</Label>
            <Input
              id="price"
              min="0"
              step="0.01"
              type="number"
              {...register("price")}
            />
            <ErrorMessage aria-live="polite">
              {errors?.price?.message}
            </ErrorMessage>
          </InputGroup>
        </Fieldset>

        <InputGroup>
          <Label htmlFor="product-image">Imagem do produto</Label>
          <LabelUpload htmlFor="product-image">
            <Image aria-hidden="true" />
            <input
              id="product-image"
              type="file"
              {...fileRegistration}
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
            />
            <span>Selecionar imagem</span>
          </LabelUpload>
          <FileName>{filename || "PNG ou JPEG ate 5mb"}</FileName>
          <ErrorMessage aria-live="polite">
            {errors?.file?.message}
          </ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label id="category-label">Categoria</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                aria-labelledby="category-label"
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Selecione uma categoria"
                menuPortalTarget={document.body}
              />
            )}
          />
          <ErrorMessage aria-live="polite">
            {errors?.category?.message}
          </ErrorMessage>
        </InputGroup>

        <InputGroup>
          <ContainerCheckbox>
            <input id="offer" type="checkbox" {...register("offer")} />
            <Label htmlFor="offer">Marcar como oferta</Label>
          </ContainerCheckbox>
        </InputGroup>

        <SubmitButton disabled={isSubmitting} type="submit">
          {isSubmitting ? "Salvando..." : submitLabel}
        </SubmitButton>
      </Form>

      <PreviewCard>
        <span>Preview</span>
        {previewUrl ? (
          <PreviewImage src={previewUrl} alt="Preview do produto" />
        ) : (
          <div>
            <Image aria-hidden="true" />
            <p>Selecione uma imagem para visualizar o produto.</p>
          </div>
        )}
        <strong>{isEditing ? "Edicao de produto" : "Novo produto"}</strong>
        <p>
          O preço continua sendo enviado ao backend em centavos e a imagem em
          multipart/form-data.
        </p>
      </PreviewCard>
    </FormGrid>
  );
}

AdminProductForm.propTypes = {
  categories: PropTypes.array.isRequired,
  mode: PropTypes.oneOf(["create", "edit"]).isRequired,
  onSubmit: PropTypes.func.isRequired,
  product: PropTypes.shape({
    category: PropTypes.object,
    name: PropTypes.string,
    offer: PropTypes.bool,
    price: PropTypes.number,
    url: PropTypes.string,
  }),
  submitLabel: PropTypes.string.isRequired,
};

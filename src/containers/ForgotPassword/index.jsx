import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { api } from "../../services/api";
import {
  Container,
  Form,
  FormMessage,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
  TrustList,
} from "../Login/styles";

const SUCCESS_MESSAGE =
  "Se existir uma conta com este e-mail, enviaremos as instruções.";

export function ForgotPassword() {
  const [message, setMessage] = useState("");

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um e-mail válido.")
        .required("O e-mail é obrigatório."),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { data: responseData } = await api.post("/password/forgot", {
        email: data.email,
      });

      setMessage(responseData?.message || SUCCESS_MESSAGE);
      toast.success(SUCCESS_MESSAGE);
    } catch (error) {
      toast.error(
        error.publicMessage || "Não foi possível solicitar a redefinição.",
      );
    }
  };

  return (
    <Container>
      <LeftContainer>
        <span>Seven Bites</span>
        <h1>Recupere o acesso sem interromper seu pedido.</h1>
        <p>
          Enviaremos um link seguro para você criar uma nova senha e voltar para
          sua conta.
        </p>
        <TrustList aria-label="Segurança da recuperação de senha">
          <li>Link temporário</li>
          <li>Uso único</li>
          <li>Resposta segura</li>
        </TrustList>
      </LeftContainer>
      <RightContainer>
        <Title>
          Esqueceu sua senha? <span>Vamos resolver.</span>
        </Title>
        {message && <FormMessage role="status">{message}</FormMessage>}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="email">E-mail</label>
            <input
              autoComplete="email"
              id="email"
              inputMode="email"
              type="email"
              {...register("email")}
            />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Enviando..." : "Enviar instruções"}
          </Button>
        </Form>
        <p>
          Lembrou sua senha? <Link to="/login">Voltar para entrar</Link>
        </p>
      </RightContainer>
    </Container>
  );
}

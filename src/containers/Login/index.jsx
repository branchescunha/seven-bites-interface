import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { useUser } from "../../hooks/UserContext";
import { api } from "../../services/api";
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  PasswordField,
  RightContainer,
  Title,
  TrustList,
} from "./styles";

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um e-mail valido.")
        .required("O e-mail e obrigatorio."),
      password: yup
        .string()
        .min(6, "A senha deve ter no mínimo 6 caracteres.")
        .required("Digite sua senha."),
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
    const { data: userData } = await toast.promise(
      api.post("/sessions", {
        email: data.email,
        password: data.password,
      }),
      {
        pending: "Verificando suas credenciais...",
        success: {
          render() {
            setTimeout(() => {
              if (userData?.admin) {
                navigate("/admin/pedidos");
              } else {
                navigate("/");
              }
            }, 2000);
            return "Login realizado com sucesso!";
          },
        },
        error: "Ocorreu um erro ao fazer login. Verifique suas credenciais.",
      },
    );
    putUserData(userData);
  };

  return (
    <Container>
      <LeftContainer>
        <span>Seven Bites</span>
        <h1>Entre para continuar seu pedido.</h1>
        <p>
          Seu carrinho fica salvo enquanto você acessa a conta e finaliza o
          pedido.
        </p>
        <TrustList aria-label="Benefícios da conta Seven Bites">
          <li>Carrinho persistente</li>
          <li>Pedido revisado antes do pagamento</li>
          <li>Histórico de pedidos</li>
        </TrustList>
      </LeftContainer>
      <RightContainer>
        <Title>
          Acesse sua conta <span>Seven Bites</span>
        </Title>
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

          <InputContainer>
            <label htmlFor="password">Senha</label>
            <PasswordField>
              <input
                autoComplete="current-password"
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
              />
              <button
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                type="button"
                onClick={() => setShowPassword((current) => !current)}
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </PasswordField>
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Entrando..." : "Entrar"}
          </Button>
        </Form>
        <p>
          Ainda não possui conta? <Link to="/cadastro">Criar conta</Link>
        </p>
      </RightContainer>
    </Container>
  );
}

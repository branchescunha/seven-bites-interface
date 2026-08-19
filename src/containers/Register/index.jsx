import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

import { Button } from "../../components/Button";
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

export function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const schema = yup
    .object({
      name: yup.string().required("Informe seu nome."),
      email: yup
        .string()
        .email("Digite um e-mail valido.")
        .required("O e-mail e obrigatorio."),
      password: yup
        .string()
        .min(6, "A senha deve ter no mínimo 6 caracteres.")
        .required("Crie uma senha."),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas devem ser iguais.")
        .required("Confirme sua senha."),
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
      const { status } = await api.post(
        "/users",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        toast.success("Conta criada com sucesso!");
      } else if (status === 409) {
        toast.error("Email já cadastrado. Faça login para continuar.");
      } else {
        throw new Error();
      }
    } catch (_error) {
      toast.error("Falha no sistema. Tente novamente.");
    }
  };

  return (
    <Container>
      <LeftContainer>
        <span>Seven Bites</span>
        <h1>Crie sua conta para pedir com mais agilidade.</h1>
        <p>
          Salve seu carrinho, acompanhe o checkout e mantenha seus pedidos
          conectados ao seu perfil.
        </p>
        <TrustList aria-label="Benefícios do cadastro Seven Bites">
          <li>Cadastro rápido</li>
          <li>Conta comum por padrao</li>
          <li>Pagamento em modo teste</li>
        </TrustList>
      </LeftContainer>
      <RightContainer>
        <Title>
          Comece sua experiência <span>Seven Bites</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="name">Nome</label>
            <input
              autoComplete="name"
              id="name"
              type="text"
              {...register("name")}
            />
            <p>{errors?.name?.message}</p>
          </InputContainer>

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
                autoComplete="new-password"
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

          <InputContainer>
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <PasswordField>
              <input
                autoComplete="new-password"
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword")}
              />
              <button
                aria-label={
                  showConfirmPassword
                    ? "Ocultar confirmação"
                    : "Mostrar confirmação"
                }
                type="button"
                onClick={() => setShowConfirmPassword((current) => !current)}
              >
                {showConfirmPassword ? "Ocultar" : "Mostrar"}
              </button>
            </PasswordField>
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Criando conta..." : "Criar conta"}
          </Button>
        </Form>
        <p>
          Já possui conta? <Link to="/login">Entrar</Link>
        </p>
      </RightContainer>
    </Container>
  );
}

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import Logo1 from "../../assets/logo-1.svg";
import { Button } from "../../components/Button";
import { useUser } from "../../hooks/UserContext";
import { api } from "../../services/api";
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  Link,
  RightContainer,
  Title,
} from "./styles";

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um e-mail válido")
        .required("O e-mail é obrigatório"),
      password: yup
        .string()
        .min(6, "A senha deve ter no mínimo 6 caracteres")
        .required("Digite uma senha"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
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
        <img src={Logo1} alt="Logo Seven Bites" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Seven Bites!</span>
          <br />
          Acesse com seu
          <span> Login e Senha</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="email">Email</label>
            <input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label htmlFor="password">Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type="submit">Entrar</Button>
        </Form>
        <p>
          Não possui conta? <Link to="/cadastro">Clique aqui</Link>
        </p>
      </RightContainer>
    </Container>
  );
}

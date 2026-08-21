import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
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
  PasswordField,
  RightContainer,
  Title,
  TrustList,
} from "../Login/styles";

const INVALID_LINK_MESSAGE =
  "Este link não é mais válido. Solicite uma nova redefinição de senha.";

export function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") || "";
  const [message, setMessage] = useState(token ? "" : INVALID_LINK_MESSAGE);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const schema = yup
    .object({
      newPassword: yup
        .string()
        .min(6, "A senha deve ter no mínimo 6 caracteres.")
        .required("Crie uma nova senha."),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("newPassword")], "As senhas devem ser iguais.")
        .required("Confirme sua nova senha."),
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
    if (!token) {
      setMessage(INVALID_LINK_MESSAGE);
      return;
    }

    try {
      const { data: responseData } = await api.post("/password/reset", {
        newPassword: data.newPassword,
        token,
      });

      const successMessage =
        responseData?.message ||
        "Senha redefinida com sucesso. Entre com sua nova senha.";

      setMessage(successMessage);
      toast.success(successMessage);
      setTimeout(() => {
        navigate("/login");
      }, 1800);
    } catch (error) {
      const errorMessage = error.response?.data?.error || INVALID_LINK_MESSAGE;
      setMessage(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <Container>
      <LeftContainer>
        <span>Seven Bites</span>
        <h1>Crie uma nova senha para sua conta.</h1>
        <p>
          Use uma senha com no mínimo 6 caracteres. O link só pode ser usado uma
          vez.
        </p>
        <TrustList aria-label="Proteções da redefinição de senha">
          <li>Token protegido</li>
          <li>Expiração curta</li>
          <li>Senha criptografada</li>
        </TrustList>
      </LeftContainer>
      <RightContainer>
        <Title>
          Redefinir senha <span>Seven Bites</span>
        </Title>
        {message && <FormMessage role="status">{message}</FormMessage>}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="newPassword">Nova senha</label>
            <PasswordField>
              <input
                autoComplete="new-password"
                disabled={!token || isSubmitting}
                id="newPassword"
                type={showPassword ? "text" : "password"}
                {...register("newPassword")}
              />
              <button
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                disabled={!token || isSubmitting}
                type="button"
                onClick={() => setShowPassword((current) => !current)}
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </PasswordField>
            <p>{errors?.newPassword?.message}</p>
          </InputContainer>

          <InputContainer>
            <label htmlFor="confirmPassword">Confirmar nova senha</label>
            <PasswordField>
              <input
                autoComplete="new-password"
                disabled={!token || isSubmitting}
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
                disabled={!token || isSubmitting}
                type="button"
                onClick={() => setShowConfirmPassword((current) => !current)}
              >
                {showConfirmPassword ? "Ocultar" : "Mostrar"}
              </button>
            </PasswordField>
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button disabled={!token || isSubmitting} type="submit">
            {isSubmitting ? "Redefinindo..." : "Redefinir senha"}
          </Button>
        </Form>
        <p>
          Precisa de outro link?{" "}
          <Link to="/esqueci-senha">Solicitar novamente</Link>
        </p>
      </RightContainer>
    </Container>
  );
}

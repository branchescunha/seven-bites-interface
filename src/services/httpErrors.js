const statusMessages = {
  400: "Revise os dados enviados e tente novamente.",
  401: "Sua sessão expirou. Faça login novamente.",
  403: "Você não tem permissão para acessar este recurso.",
  404: "Recurso não encontrado.",
  409: "Não foi possível concluir por conflito nos dados.",
  422: "Revise os dados informados.",
  429: "Muitas tentativas. Aguarde um momento e tente novamente.",
  500: "Erro interno. Tente novamente em instantes.",
  503: "Serviço temporariamente indisponível.",
};

export function getHttpErrorMessage(error) {
  const status = error?.response?.status;

  return statusMessages[status] || "Não foi possível concluir a solicitação.";
}

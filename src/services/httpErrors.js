const statusMessages = {
  400: "Revise os dados enviados e tente novamente.",
  401: "Sua sessao expirou. Faca login novamente.",
  403: "Voce nao tem permissao para acessar este recurso.",
  404: "Recurso nao encontrado.",
  409: "Nao foi possivel concluir por conflito nos dados.",
  422: "Revise os dados informados.",
  429: "Muitas tentativas. Aguarde um momento e tente novamente.",
  500: "Erro interno. Tente novamente em instantes.",
  503: "Servico temporariamente indisponivel.",
};

export function getHttpErrorMessage(error) {
  const status = error?.response?.status;

  return statusMessages[status] || "Nao foi possivel concluir a solicitacao.";
}

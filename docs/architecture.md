# Arquitetura Frontend

O frontend e uma aplicacao React com Vite, React Router, Styled Components, integracao Stripe Elements e comunicacao HTTP centralizada via Axios.

A hospedagem prevista para producao e Vercel, consumindo a API hospedada separadamente no Render.

## Estrutura

- `src/routes`: definicao de rotas publicas, fluxo do cliente e area administrativa.
- `src/layouts`: estruturas compartilhadas de navegacao do cliente e do administrador.
- `src/components`: componentes reutilizaveis de UI, carrinho, checkout e estados de feedback.
- `src/containers`: telas e fluxos principais.
- `src/services`: clientes e utilitarios de integracao HTTP.
- `src/hooks`: provedores globais de autenticacao e carrinho.

## Decisoes de producao

- Rotas principais usam `React.lazy` e `Suspense` para reduzir o JavaScript inicial.
- `ErrorBoundary` global evita tela quebrada em falhas inesperadas de renderizacao.
- O interceptor HTTP normaliza mensagens seguras de erro e mantem o redirecionamento para login em respostas `401`.
- Listas criticas renderizam estados de carregamento, erro e vazio.
- Dados sensiveis de pagamento nao sao exibidos, logados ou persistidos pela interface.
- `vercel.json` garante fallback de SPA para refresh direto em rotas React.
- `VITE_API_URL` define a API por ambiente.
- `VITE_STRIPE_PUBLISHABLE_KEY` deve usar chave publicavel de teste enquanto a aplicacao estiver em modo demonstracao.

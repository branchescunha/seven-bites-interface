# Desenvolvimento Frontend

## Scripts

- `npm run dev`: inicia o Vite em modo desenvolvimento.
- `npm run build`: gera o build de producao.
- `npm run preview`: serve o build localmente.
- `npm run lint`: executa o Biome em modo somente leitura.
- `npm run format`: aplica formatacao com Biome.
- `npm run check`: executa a validacao estatica sem escrita.

## Regras operacionais

- Nao versionar `.env.local`.
- Nao expor `clientSecret`, tokens, cabecalhos `Authorization` ou dados completos de cartao.
- Alterar rotas de pagamento e autenticacao apenas com validacao local.
- Rodar `npm run lint` e `npm run build` antes de aprovar alteracoes relevantes.

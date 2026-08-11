# Changelog

## [1.0.0]

### Added

- Interface React/Vite para catalogo, carrinho, checkout e painel admin.
- Identidade visual Seven Bites e design system centralizado.
- Error Boundary, lazy loading de rotas e estados de feedback.
- Configuracao de ambiente para API e Stripe.
- Rewrite de SPA para Vercel.
- Workflow de CI.

### Changed

- Experiencia visual redesenhada com responsividade real.
- Telas publicas e administrativas passaram a usar componentes mais consistentes.
- Assets pesados deixaram de ser base visual das telas principais.

### Fixed

- Fluxos de login, cadastro, carrinho, checkout e admin estabilizados.
- Carrinho passou a atualizar quantidades de forma imutavel.
- Tela de admin sem sessao redireciona corretamente.
- Status de pagamento e pedidos foram normalizados.

### Security

- Chave publicavel Stripe saiu do codigo e passou para `VITE_STRIPE_PUBLISHABLE_KEY`.
- Interceptor HTTP remove sessao local em respostas `401`.
- Nenhum segredo de backend e usado no frontend.

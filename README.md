# Seven Bites

Seven Bites e uma plataforma web completa para a operacao digital de uma hamburgueria, reunindo vitrine comercial, cardapio, carrinho, autenticacao, recuperacao de senha, checkout, pagamento e painel administrativo em uma experiencia responsiva.

O projeto foi desenvolvido como produto de portfolio fullstack, simulando a entrega de uma solucao comercial real para restaurantes que precisam vender online e administrar catalogo e pedidos.

## Visao geral

A aplicacao publica apresenta a marca, organiza produtos por categorias, permite montar o pedido, manter o carrinho entre sessoes e finalizar a compra com pagamento integrado. A area administrativa permite gerenciar produtos e acompanhar pedidos com controle de acesso.

## Preview

<p align="center">
  <img src="docs/screenshots/01-home-desktop.png" alt="Home desktop do Seven Bites" width="780" />
</p>

<p align="center">
  <img src="docs/screenshots/02-home-mobile.png" alt="Home mobile do Seven Bites" width="240" />
  <img src="docs/screenshots/04-cardapio-mobile.jpg" alt="Cardapio mobile do Seven Bites" width="240" />
</p>

| Cardapio | Carrinho |
| --- | --- |
| <img src="docs/screenshots/03-cardapio-desktop.jpg" alt="Cardapio desktop do Seven Bites" /> | <img src="docs/screenshots/05-carrinho.png" alt="Carrinho do Seven Bites" /> |

| Autenticacao | Recuperacao de senha |
| --- | --- |
| <img src="docs/screenshots/06-login.png" alt="Tela de login do Seven Bites" /> | <img src="docs/screenshots/08-recuperar-senha.png" alt="Tela de recuperacao de senha do Seven Bites" /> |

| Pedido confirmado | Admin |
| --- | --- |
| <img src="docs/screenshots/09-pagamento-confirmado.png" alt="Tela de pedido confirmado" /> | <img src="docs/screenshots/10-admin-pedidos.png" alt="Painel administrativo de pedidos" /> |

## Funcionalidades

### Cliente

- Home comercial com identidade visual propria.
- Cardapio com categorias, filtros, ofertas e imagens finais.
- Carrinho persistente com ajuste de quantidade, remocao e totalizacao.
- Cadastro, login e sessao autenticada.
- Recuperacao de senha por e-mail com link temporario.
- Checkout com resumo do pedido, taxa de entrega e pagamento integrado.
- Confirmacao final do pedido.
- Layout responsivo para desktop, tablet e mobile.

### Administrativo

- Guarda de acesso para usuarios administradores.
- Listagem de pedidos.
- Filtros por status.
- Detalhes e atualizacao de status de pedidos.
- Listagem de produtos.
- Criacao e edicao de produtos.
- Upload de imagens de produtos e categorias.
- Logout e protecao de rotas administrativas.

## Tecnologias

### Frontend

- React
- Vite
- JavaScript
- styled-components
- React Router
- Context API
- Axios
- React Hook Form
- Yup
- Stripe React / Stripe JS
- Material UI
- Phosphor Icons
- Biome

### Backend e servicos

- Node.js
- Express
- Sequelize
- PostgreSQL / Neon
- MongoDB / Mongoose
- Stripe
- Cloudinary
- Resend
- JWT
- Bcrypt

### Infraestrutura

- Vercel
- Render
- Neon
- Cloudinary
- Resend
- Stripe

## Arquitetura

```mermaid
flowchart LR
  Browser[Navegador] --> Frontend[React + Vite]
  Frontend --> API[Seven Bites API]
  API --> Postgres[(PostgreSQL / Neon)]
  API --> Mongo[(MongoDB)]
  API --> Stripe[Stripe]
  API --> Cloudinary[Cloudinary]
  API --> Resend[Resend]
```

O frontend centraliza a experiencia do cliente e do administrador. A API valida regras sensiveis no servidor, persiste catalogo e usuarios no PostgreSQL, registra pedidos no MongoDB e integra servicos externos de pagamento, midia e e-mail.

## Seguranca

- Autenticacao com JWT.
- Rotas administrativas protegidas por autorizacao no backend.
- Precos, subtotal, taxa de entrega e total validados no servidor.
- Criacao de pedido protegida por idempotencia de pagamento.
- Recuperacao de senha com token opaco, hash, expiracao e uso unico.
- CORS configurado por ambiente.
- Rate limiting em rotas sensiveis.
- Segredos gerenciados por variaveis de ambiente.

## Estrutura do projeto

```txt
seven-bites-interface
|-- docs
|   `-- screenshots
|-- public
|-- src
|   |-- components
|   |-- config
|   |-- containers
|   |-- hooks
|   |-- layouts
|   |-- routes
|   |-- services
|   |-- styles
|   `-- utils
|-- package.json
|-- vercel.json
`-- vite.config.js
```

## Ambiente de demonstracao

Seven Bites e um projeto de demonstracao e portfolio. A integracao de pagamento esta preparada para Stripe Test Mode, sem chaves reais expostas no repositorio. Para uma implantacao comercial, e necessario configurar chaves Live, revisar o fluxo operacional de pagamentos e usar dominio proprio verificado para e-mails transacionais.

O envio de e-mails transacionais esta integrado ao Resend. Em uma operacao real, o dominio de envio deve ser verificado antes do uso em producao comercial.

## Aplicacao

https://sevenbites.vercel.app

## Autor

Andre Vinicius Branches Cunha

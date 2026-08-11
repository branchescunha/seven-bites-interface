# Seven Bites

Interface web do Seven Bites, uma aplicação fullstack para catálogo, carrinho, checkout com Stripe e painel administrativo de uma hamburgueria.

O frontend foi redesenhado com identidade visual própria, design system centralizado, responsividade real e preservação dos fluxos principais de autenticação, carrinho, pedidos, pagamento e administração.

## Demonstracao

Screenshots finais preparados em:

```txt
../prints/release
```

Principais telas:

- Home
- Cardapio
- Carrinho
- Login
- Cadastro
- Checkout
- Admin produtos
- Admin pedidos

## Funcionalidades

- Cadastro e login de usuarios.
- Controle de sessao com redirecionamento seguro em `401`.
- Catalogo de produtos e categorias.
- Filtros por categoria.
- Carrosseis de categorias e ofertas.
- Carrinho persistido localmente.
- Ajuste de quantidade e resumo do pedido.
- Checkout com Stripe Elements.
- Tela de retorno de pagamento.
- Painel administrativo.
- Listagem e edicao de produtos.
- Listagem, filtro e atualizacao de pedidos.
- Estados de carregamento, erro e vazio.
- Error Boundary global.
- Build otimizado por lazy loading de rotas.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- Styled Components
- React Router DOM
- Context API
- Axios
- Stripe React / Stripe JS
- React Hook Form
- Yup
- Material UI
- Phosphor Icons
- Biome

## Design e experiencia

- Identidade Seven Bites com paleta bordeaux, graphite, cream, amber e green.
- Tema global centralizado em `src/styles/themes/standard.js`.
- Componentes responsivos e com dimensoes estaveis.
- Foco visivel e melhor contraste em controles principais.
- Layout mobile-first nas telas publicas.
- Tabelas administrativas com rolagem horizontal controlada em telas menores.
- Menor dependencia dos SVGs legados pesados como fundos principais.

## Estrutura do projeto

```txt
seven-bites-interface
|-- .github
|   |-- dependabot.yml
|   `-- workflows
|       `-- ci.yml
|-- docs
|   |-- architecture.md
|   `-- development.md
|-- public
|-- src
|   |-- assets
|   |-- components
|   |-- config
|   |-- containers
|   |-- hooks
|   |-- layouts
|   |-- routes
|   |-- services
|   |-- styles
|   `-- utils
|-- .env.example
|-- index.html
|-- package-lock.json
|-- package.json
|-- vercel.json
|-- vite.config.js
`-- README.md
```

## Autor

André Vinícius Branches Cunha

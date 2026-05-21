# Seven Bites Interface

Interface web desenvolvida para o Seven Bites, uma aplicação fullstack para gerenciamento de hamburgueria, com catálogo de produtos, carrinho de compras, checkout com Stripe e painel administrativo.

O projeto foi construído com React e Vite, utilizando Styled Components, Context API, React Router DOM e integração completa com a API do Seven Bites.

## Funcionalidades

- Login de usuários
- Controle de acesso entre usuário e administrador
- Catálogo de produtos
- Filtro de produtos por categoria
- Carrossel de categorias
- Carrossel de ofertas
- Carrinho de compras
- Controle de quantidade de produtos no carrinho
- Cálculo de subtotal e total
- Checkout com Stripe
- Tela de confirmação de pagamento
- Painel administrativo
- Listagem de produtos
- Cadastro de produtos
- Edição de produtos
- Listagem de pedidos
- Atualização de status dos pedidos
- Upload de imagens
- Feedback visual com Toasts
- Padronização visual com tema global

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- Styled Components
- React Router DOM
- Context API
- Axios
- Stripe
- React Toastify
- React Multi Carousel
- Material UI
- Phosphor Icons
- Biome

## Estrutura do projeto

```txt
seven-bites-interface
├── public
├── src
│   ├── assets
│   ├── components
│   │   ├── Button
│   │   ├── CardProduct
│   │   ├── CartButton
│   │   ├── CartItems
│   │   ├── CartResume
│   │   ├── CategoriesCarousel
│   │   ├── Footer
│   │   ├── Header
│   │   ├── OffersCarousel
│   │   ├── SideNavAdmin
│   │   ├── Stripe
│   │   └── Table
│   ├── config
│   ├── containers
│   │   ├── Admin
│   │   │   ├── EditProduct
│   │   │   ├── NewProduct
│   │   │   ├── Orders
│   │   │   └── Products
│   │   ├── Cart
│   │   ├── Checkout
│   │   ├── CompletePayment
│   │   ├── Home
│   │   ├── Login
│   │   ├── Menu
│   │   └── Register
│   ├── hooks
│   ├── layouts
│   │   ├── AdminLayout
│   │   └── UserLayout
│   ├── routes
│   ├── services
│   ├── styles
│   ├── utils
│   └── main.jsx
├── .gitignore
├── biome.json
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Módulos principais

### Autenticação

Responsável pelo login, cadastro, persistência do usuário autenticado e controle de acesso entre usuário comum e administrador.

### Catálogo

Responsável pela exibição dos produtos, categorias, ofertas e filtros do cardápio.

### Carrinho

Responsável por adicionar produtos, remover itens, alterar quantidades e calcular os valores do pedido.

### Checkout

Responsável pela integração com Stripe, finalização da compra e confirmação do pagamento.

### Painel administrativo

Responsável pelo gerenciamento de produtos, cadastro de novos itens, edição de produtos e acompanhamento dos pedidos.

### Pedidos

Responsável pela listagem dos pedidos realizados e atualização do status de cada pedido dentro do painel administrativo.

## Padrões do projeto

O projeto segue uma estrutura organizada por responsabilidades, separando:

- Components
- Containers
- Hooks
- Layouts
- Routes
- Services
- Styles
- Utils

A interface utiliza tema global com Styled Components, centralizando cores, fontes e estilos reutilizáveis para manter consistência visual em toda a aplicação.

## Design

A aplicação utiliza uma identidade visual moderna, com:

- Tema escuro nas telas de autenticação
- Paleta roxa personalizada
- Layout administrativo com sidebar
- Cards de produtos
- Carrosséis visuais
- Feedbacks com Toasts
- Componentização reutilizável
- Padronização de cores via Theme Provider

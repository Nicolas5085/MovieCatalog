# MovieCatalog — Catálogo Interativo de Filmes/Séries 🎬

## Descrição  
MovieCatalog é uma aplicação web feita com React + TypeScript. O projeto permite apresentar um catálogo de filmes/séries, mostrar pôsteres, favoritar filmes e navegar entre páginas como Home, Dashboard (favoritos), Login, Sobre e Contato. O estilo visual é inspirado em catálogos de streaming (como Netflix), com layout responsivo e moderno.

## Tecnologias utilizadas  
- React.js  
- TypeScript  
- React Router DOM (roteamento entre páginas)  
- Context API (para armazenar favoritos)  
- Hooks React: useState, useEffect, useContext, useRef, useMemo  
- CSS customizado — responsivo e estilizado  

## Funcionalidades  
- Exibir uma grade de filmes/séries com pôster e título  
- Favoritar filmes — adicionar e remover favoritos (salvos em contexto React)  
- Página de favoritos (Dashboard)  
- Páginas estáticas: Login, Sobre, Contato  
- Layout responsivo para diferentes tamanhos de tela  
- Busca e filtragem (se implementada)  
- Possibilidade de usar filmes fictícios ou reais com imagens locais ou API externa  

## Estrutura de Pastas  
public/
index.html
(assets estáticos, se houver imagens públicas)

src/
api/ # fetch para API externa (opcional)
tmdb.ts # exemplo de integração
assets/ # imagens locais (pôsteres, logos etc.)
images/
logo.png
...
components/ # componentes reutilizáveis
Header.tsx
Footer.tsx
MovieCard.tsx
MovieList.tsx
SearchBar.tsx (opcional)
context/ # contexto global (favoritos)
FavoritesContext.tsx
data/ # dados estáticos (filmes fictícios, JSON, etc.)
movies.ts (opcional)
pages/ # páginas da aplicação
Home.tsx
Dashboard.tsx
Login.tsx
Sobre.tsx
Contato.tsx
types.ts # tipos TypeScript usados no projeto
App.tsx # componente raiz com roteamento
index.tsx # entry point React
index.css # estilos globais

## Instalação e execução local  

1. Clone o repositório  
```bash
git clone <link-do-repo>

## Entre na pasta do projeto

cd mymoviecatalog

## Instale as depedencias

npm install

## Inicie o servidor de desenvolvimento

npm start

## Abre o navegador em 

http://localhost:3000

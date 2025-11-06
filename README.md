# 🎬 Catálogo de Filmes

Aplicação **CRUD completa** desenvolvida com **Next.js 16**, **React 18** e **Bootstrap 5**, utilizando o **MockAPI.io** para simular o backend.

O projeto permite **criar, listar, editar e deletar filmes** em uma base de dados remota, demonstrando o funcionamento completo de uma API REST integrada a uma aplicação moderna em Next.js (usando o App Router).

---

## 🚀 Tecnologias Utilizadas

- **Next.js 16 (App Router)**
- **React 18**
- **Bootstrap 5**
- **Axios**
- **MockAPI.io** (backend simulado)
- **JavaScript (ES2023)**

---

## 📂 Estrutura do Projeto

```
catalogo-filmes/
├── app/
│   ├── api/
│   │   └── filmes/
│   │       ├── route.js           # Proxy para MockAPI (GET/POST)
│   │       └── [id]/route.js      # Proxy para MockAPI (GET/PUT/DELETE)
│   ├── filmes/
│   │   ├── criar/page.js          # Página para criar filme
│   │   ├── listar/page.js         # Página para listar filmes
│   │   ├── editar/[id]/page.js    # Página para editar filme
│   │   └── deletar/[id]/page.js   # Página para deletar filme
│   ├── layout.js                  # Layout global (Navbar e estilos)
│   └── page.js                    # Página inicial
├── components/
│   └── Navbar.js                  # Barra de navegação
├── styles/
│   └── globals.css                # Estilos globais
├── .env.local                     # Variáveis de ambiente (MockAPI)
├── package.json
└── README.md
```

---

## ⚙️ Configuração e Execução

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seuusuario/catalogo-filmes.git
cd catalogo-filmes
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Criar o arquivo `.env.local`

Crie um arquivo chamado `.env.local` na raiz do projeto com o seguinte conteúdo:

```env
MOCKAPI_BASE=https://690bda266ad3beba00f65a06.mockapi.io/api/v1
```

> 🔹 Substitua o link acima pelo **seu endpoint real** do MockAPI caso crie um novo projeto.

### 4️⃣ Rodar o servidor de desenvolvimento

```bash
npm run dev
```

Acesse em:  
👉 **http://localhost:3000**

---

## 🧠 Funcionalidades

| Página | Caminho | Descrição |
|---------|----------|-----------|
| 🏠 **Início** | `/` | Página principal com atalhos para CRUD |
| 📋 **Listar Filmes** | `/filmes/listar` | Mostra todos os filmes cadastrados |
| ➕ **Criar Filme** | `/filmes/criar` | Adiciona um novo filme à base |
| ✏️ **Editar Filme** | `/filmes/editar/[id]` | Atualiza informações de um filme existente |
| 🗑️ **Deletar Filme** | `/filmes/deletar/[id]` | Remove um filme definitivamente |

---

## 🌐 Backend — MockAPI.io

O projeto consome a API gerada automaticamente pelo **MockAPI**, com o seguinte endpoint base:

```
https://690bda266ad3beba00f65a06.mockapi.io/api/v1/filmes
```

Cada filme contém os seguintes campos:

| Campo | Tipo | Descrição |
|--------|------|-----------|
| `id` | string | Gerado automaticamente |
| `nome` | string | Nome do filme |
| `genero` | string | Gênero cinematográfico |
| `ano` | string | Ano de lançamento |

---

## 🧩 API Interna (Next.js)

A aplicação possui rotas **internas de API** (`/api/filmes`) que funcionam como um **proxy seguro** para o MockAPI, evitando problemas de CORS e mantendo a arquitetura limpa.

### Endpoints internos

| Método | Caminho | Descrição |
|--------|----------|-----------|
| `GET` | `/api/filmes` | Retorna todos os filmes |
| `POST` | `/api/filmes` | Cria um novo filme |
| `GET` | `/api/filmes/:id` | Retorna um filme específico |
| `PUT` | `/api/filmes/:id` | Atualiza um filme existente |
| `DELETE` | `/api/filmes/:id` | Exclui um filme |

---

## 🎨 Layout

O layout foi desenvolvido com **Bootstrap 5** e **CSS personalizado**, garantindo um visual moderno, responsivo e leve — sem dependência de TailwindCSS.

---

## 🧑‍💻 Autores

**João Marcelo Simão de Castro**  
**Yasmim Sayuri Anami de Assis**

---

## 📝 Licença

Este projeto é de uso educacional e pode ser livremente adaptado e distribuído.

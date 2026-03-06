# 📚 StudyManager API

Uma API RESTful desenvolvida para o gerenciamento de alunos, cursos e matrículas, construída com foco em boas práticas, **Clean Code** e **Arquitetura Limpa (Clean Architecture)**.

## 🚀 Tecnologias Utilizadas

* **Node.js** com **Express** (Framework Web)
* **Prisma ORM** (Modelagem e manipulação do banco de dados)
* **PostgreSQL** (Banco de dados relacional)
* **JavaScript**

## 🏗️ Organização e Arquitetura do Projeto (Justificativa)

A estrutura do projeto foi baseada nos princípios da Arquitetura Limpa (Clean Architecture) e do Clean Code para garantir alta coesão e baixo acoplamento. A camada de `routes` e `controllers` é responsável apenas por receber e responder as requisições HTTP (entrada e saída). A lógica e as regras de negócio centrais estão isoladas nos `usecases`, que por sua vez se comunicam com o banco de dados exclusivamente através da camada de `repositories`. Essa separação de responsabilidades permite que o código seja facilmente testável, manutenível e que o banco de dados (Prisma/PostgreSQL) seja apenas um detalhe de infraestrutura, sem vazar para os controladores.

## ⚙️ Como rodar o projeto localmente

### Pré-requisitos
* Node.js instalado (v18+)
* Banco de dados PostgreSQL rodando localmente

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/study-manager-api.git](https://github.com/SEU_USUARIO/study-manager-api.git)
   cd study-manager-api

2. Instale as dependências: `npm install`
3. Crie um arquivo .env na raiz do projeto e adicione a URL de conexão do seu banco de dados PostgreSQL:
   Ex: DATABASE_URL="postgresql://usuario:senha@localhost:5432/study-manager-api?schema=public"
4.Rode as migrations do prisma
5. Inicie o servidor de desenvolvimento: `nom run dev`
   API estára rodando em 

Usuários (Users)
POST /users - Cria um novo usuário
GET /users - Lista todos os usuários
GET /users/:id - Busca um usuário específico
PUT /users/:id - Atualiza dados do usuário
DELETE /users/:id - Remove um usuário
GET /users/:id/courses - (Consulta Relacional) Retorna o usuário e a lista de cursos matriculados

Cursos (Courses)
POST /courses - Cria um novo curso
GET /courses - Lista todos os cursos
GET /courses/:id - Busca um curso específico
PUT /courses/:id - Atualiza um curso
DELETE /courses/:id - Remove um curso

Matrículas (Enrollments)
POST /enrollments - Matricula um usuário em um curso (Valida existência e duplicidade)

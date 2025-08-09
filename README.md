# API de Transferências

Esta API permite registro, login, consulta de usuários e transferências de valores entre usuários. O banco de dados é em memória, ideal para aprendizado de testes e automação de APIs.

## Instalação

1. Clone o repositório.
2. Instale as dependências:
   ```bash
   npm install express swagger-ui-express
   ```

## Execução

- Para iniciar o servidor:
  ```bash
  node server.js
  ```
- Para importar o app em testes:
  ```js
  const app = require('./app');
  ```

## Endpoints

- `POST /register`: Registra novo usuário. Campos obrigatórios: `username`, `password`. Opcional: `favorecidos` (array de usernames).
- `POST /login`: Realiza login. Campos obrigatórios: `username`, `password`.
- `GET /users`: Lista todos os usuários.
- `POST /transfer`: Realiza transferência. Campos: `from`, `to`, `value`.
- `GET /transfers`: Lista todas as transferências.
- `GET /api-docs`: Documentação Swagger.

## Regras de Negócio

- Não é permitido registrar usuários duplicados.
- Login exige usuário e senha válidos.
- Transferências acima de R$ 5.000,00 só podem ser feitas para favorecidos.
- Saldo inicial de cada usuário: R$ 10.000,00.

## Testes

A API foi estruturada para facilitar testes automatizados com Supertest, importando o `app.js` sem iniciar o servidor.

## Documentação

Acesse `/api-docs` para visualizar e testar os endpoints via Swagger.

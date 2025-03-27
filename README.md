# API de Anotações Pessoais

Este projeto é uma API para gerenciar anotações pessoais. Ele foi desenvolvido utilizando Node.js, Express e Prisma ORM, com um banco de dados SQLite. A API permite criar, listar, atualizar e deletar anotações.

---
## Comandos Utilizados
npm install
npx prisma migrate dev
npm run dev

## Endpoints da API

### 1. **Listar Anotações**
- **Método**: `GET`
- **Rota**: `/anotacoes`
- **Descrição**: Retorna todas as anotações cadastradas.
- **Parâmetros**: Nenhum.
- **Corpo da Requisição**: Não aplicável.
- **Respostas**:
  - **200 OK**: Retorna uma lista de anotações.
    ```json
    [
      {
        "id": 1,
        "titulo": "Minha primeira anotação",
        "conteudo": "Conteúdo da anotação",
        "favorita": false,
        "cor": null,
        "criadaEm": "2025-03-27T12:00:00.000Z",
        "atualizadaEm": "2025-03-27T12:00:00.000Z"
      }
    ]
    ```

---

### 2. **Criar Anotação**
- **Método**: `POST`
- **Rota**: `/anotacoes`
- **Descrição**: Cria uma nova anotação.
- **Parâmetros**: Nenhum.
- **Corpo da Requisição**:
  ```json
  {
    "titulo": "string",
    "conteudo": "string"
  }
```
Respostas:
201 Created: Retorna a anotação criada.
{
  "id": 2,
  "titulo": "Nova anotação",
  "conteudo": "Conteúdo da nova anotação",
  "favorita": false,
  "cor": null,
  "criadaEm": "2025-03-27T12:30:00.000Z",
  "atualizadaEm": "2025-03-27T12:30:00.000Z"
}
  
400 Bad Request: Caso algum campo obrigatório esteja ausente.
  {
  "erro": "O campo 'titulo' é obrigatório."
}

3. Atualizar Anotação
Método: PUT
Rota: /anotacoes/:id
Descrição: Atualiza uma anotação existente.
Parâmetros:
id (obrigatório): ID da anotação a ser atualizada.
{
  "titulo": "string",
  "conteudo": "string",
  "favorita": "boolean",
  "cor": "string"
}

Respostas:
200 OK: Retorna a anotação atualizada.
{
  "id": 2,
  "titulo": "Anotação atualizada",
  "conteudo": "Conteúdo atualizado",
  "favorita": true,
  "cor": "azul",
  "criadaEm": "2025-03-27T12:30:00.000Z",
  "atualizadaEm": "2025-03-27T13:00:00.000Z"
}

404 Not Found: Caso o ID da anotação não seja encontrado.
{
  "erro": "Anotação não encontrada."
}

4. Deletar Anotação
Método: DELETE
Rota: /anotacoes/:id
Descrição: Remove uma anotação pelo ID.
Parâmetros:
id (obrigatório): ID da anotação a ser deletada.
Corpo da Requisição: Não aplicável.
Respostas:

200 OK: Retorna uma mensagem de sucesso.
{
  "mensagem": "Anotação deletada com sucesso."
}

404 Not Found: Caso o ID da anotação não seja encontrado.
{
  "erro": "Anotação não encontrada."
}
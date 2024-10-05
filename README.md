# clean-arch-hezagonal

## Descrição
Este projeto foi desenvolvido para exercitar meus conhecimentos em Clean Architecture, aplicando boas práticas de design de software. A aplicação utiliza uma API RESTful com autenticação JWT e está integrada com um banco de dados PostgreSQL.

## Tecnologias Utilizadas
- **TypeScript**
- **Node.js**
- **Express**
- **JWT (JSON Web Token) para autenticação**
- **PostgreSQL**
- **bcrypt** para hashing de senhas
- **dotenv** para gerenciar variáveis de ambiente
- **uuid** para geração de identificadores únicos

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/clean-arch-hezagonal.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd clean-arch-hezagonal
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```
API_PORT=porta_da_API
JWT_SECRET=seu_segredo_JWT
DB_HOST=host_do_banco_de_dados
DB_PORTA=porta_do_banco_de_dados
DB_DATABASE=nome_do_banco_de_dados
DB_USER=usuario_do_banco_de_dados
DB_PASSWORD=senha_do_banco_de_dados
```

## Construção e Execução

Para construir o projeto, utilize o comando:

```bash
npm run build
```

Para executar o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

## Como usar

### Endpoints

- **Registrar Usuário**  
  `POST /api/usuarios/registrar`  
  Este endpoint é utilizado para registrar um novo usuário. Envie um JSON com as informações de registro, como nome, email e senha.
  Recebe o seguinte objeto como body da requisição:
  ```json
  {
    "nome": "Nome",
    "email": "email@email.com",
    "senha": "senha"
  }
  ```

- **Login de Usuário**  
  `POST /api/usuarios/login`  
  Realiza o login do usuário, retornando um token JWT caso as credenciais estejam corretas.
  Recebe o seguinte objeto como body da requisição:
  ```json
  {
    "email": "email@email.com",
    "senha": "senha"
  }
  ```

- **Obter Produto por ID**  
  `POST /api/produtos/:id`  
  Retorna as informações de um produto específico baseado no seu ID.
  Recebe o seguinte objeto como body da requisição:
  ```json
  {
    "nome": "Nome",
    "preco": 25.00
  }
  ```

## Como Contribuir

Se você deseja contribuir com este projeto, sinta-se à vontade para enviar um Pull Request. Por favor, certifique-se de seguir as melhores práticas de código limpo e boas práticas de commit.
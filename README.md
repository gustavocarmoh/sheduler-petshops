
<!--
<img alt="Banner" src="" />
-->
<h3 align="center">
  PetShop Schedule Service
</h3>

<blockquote align="center">“Para quem fica melhor a cada dia, ficar pronto é utopia”!</blockquote>

<p align="center">
  <a href="#sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rotas-da-aplicação">Rotas da aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## Sobre o projeto

Esse repositorio utiliza Node.js junto ao TypeScript, utilizando o conceito de models, repositories e services!

Essa API tem como intuito prover ao cliente as ferramentas necessárias para marcação de prestação de serviços, como por exemplo: banho, tosa, etc.

### Rotas da aplicação
Obs.: Estámos em processo de construção.

#### Rota de Sessions:
- **`POST /sessions`**: A rota deve receber `email` e `password` dentro do corpo da requisição, como resposta você recebera:

```json
{
  "user": {
    "id": "3060c3a5-f5b1-4e45-91b0-0f6a4c4a99cd",
    "name": "Prestador de Serviço",
    "email": "prestador@prestador.com",
    "avatar": null,
    "created_at": "2020-09-16T17:09:33.253Z",
    "updated_at": "2020-09-16T17:09:33.253Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDAyNjUzODIsImV4cCI6MTYwMDM1MTc4Miwic3ViIjoiMzA2MGMzYTUtZjViMS00ZTQ1LTkxYjAtMGY2YTRjNGE5OWNkIn0.o6G7tuYzs3E3FA7WkrtiwiErNkFoDTj_uMsb3ltCilY"
}
```

#### Rota de Users:
- **`POST /users`**: A rota deve receber `name`, `email` e `password` e você ira receber como resposta em caso de sucesso:

```json
{
  "name": "Prestador de Serviço",
  "email": "prestador@prestador.com",
  "id": "3060c3a5-f5b1-4e45-91b0-0f6a4c4a99cd"
}
```
- **`POST /users/avatar`**: Está rota é responsavel pela inserção/update do avatar do usuario, deve receber um `avatar`.


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

kadsf

Arquivo Editado.

hsjaahdka
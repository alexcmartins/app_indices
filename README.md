# App para consulta de índices financeiros, câmbios e criptomoedas

## Objetivo do App

Esse app esta sendo desenvolvida com o intuito de praticar os meus estudos, minha lógica e assim assimilar como é o desenvolvimento de uma API que consome API externas, guarda os dados e fornece dados.

## O que foi feito até aqui?

Uma Api em JavaScript utilizando o NodeJs, Express, Cors, Axios, Nodemon, Sequelize e Mysql.

Essa APi realiza requisições externas temporizadas para obter cotações de moedas e criptomoedas, recebe esses resultados e salva no banco de dados.

Foram criados duas rotas para consumos dos dados salvos no banco de dados.

Nesse momento os índices financeiros ainda não estão disponíveis, somente as moedas e criptomoedas.

O Front End está em outro projeto e o framework é Vue.JS.

**Versão 1.0** desenvolvida em **22/01/2021**

- Desenvolvimento da Api, rota das moedas e html para receber os dados

**Versão 1.1** desenvolvida em **24/01/2021**

- Criação do modulo api_front e ajuste no html front-end

**Versão 1.2** desenvolvida em **08/02/2021**

- Inclusão de criptomoedas, requisição feita com chave no headers e passagem de parametros.

**Versão 1.3** desenvolvida em **09/02/2021**

- Instalação do Sequelize.

**Versão 1.4** desenvolvida em **15/02/2021**

- Configuração da conexão com o Banco de dados.
- Criação do modulo api_cripto com evento de disparo para consumo de api externa.
- Criação do modulo api_exchange com evento de disparo para consumo de api externa.
- Criação da tabela no banco.

**Versão 1.5** desenvolvida em **19/02/2021**

- Tratativas nas respostas das requisições e salvando os dados na tabela.

**Versão 1.6** desenvolvida em **20/02/2021**

- Alteração na estrutura do projeto.

**Versão 1.7** desenvolvida em **27/02/2021**

- Criação de 2 rotas para consumo da API.
- Consulta no banco mysql com Sequelize utilizando where, order e limit.

**Versão 1.8** desenvolvida em **28/02/2021**

- Atualização da documentação de ajuda para consumo da API.

## Aprendizado

- Desenvolvimento do servidor para api, assimilando toda a lógica e funcionamento.
- Habilitação da porta (8080), criação da rota dinâmica para solicitação de moedas.
- Liberação de acesso externos com o CORS.
- Utilização do axios e fetch para as requisições e respostas, axios no Back End e Fetch no Front End.
- Utilização do Async/await e tratativas de erros com o Try e Catch.
- Manipulação de DOM, ler e escrever em elementos HTML5 atraves do JavaScript.
- Mapear a resposta da requisição e utilizar campos específicos.
- Consumo de Api externa com configurações de chave e parametros.
- Criação do banco de dados.
- Configuração da conexão com o banco de dados.
- Criação da tabela via Sequelize.
- Salvar dados na tabela (Sequelize - ORM).
- Realizar consultas na tabela (Sequelize - ORM).
- Criação de rotas para consumo externo da API.

## Créditos

Agradeço a minha esposa pelo incentivo e à ajuda de dois amigos meus desenvolvedores o Lucas e o Francisco.

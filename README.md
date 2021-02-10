# App para consulta de índices financeiros, câmbios e criptomoedas

## Objetivo do App

Esse app esta sendo desenvolvida com o intuito de praticar os meus estudos e a minha lógica, assim assimilando como é o desenvolvimento de uma aplicação completa.

## O que foi feito até aqui?

Uma Api em JavaScript utilizando o NodeJs, express, cors e nodemon.

Essa api realiza requisições de moedas em <https://economia.awesomeapi.com.br/json/USD-BRL>, recebe os resultados e faz as devidas trativas para injetar no HTML5. O final do link "USD-BRL" corresponde a cada moeda a ser consultada e para qual valor será convertido, elas são escolhidas no Front End em datalist.

Nesse momento os índices financeiros ainda não estão disponíveis, somente as moedas e criptomoedas. Os dados ainda não estão sendo armazenadas em banco de dados.

O Front End está somente em HTML5 e CSS3.

**Versão 1.0** desenvolvida em **22/01/2021**

- Desenvolvimento da Api, rota das moedas e html para receber os dados

**Versão 1.1** desenvolvida em **24/01/2021**

- Criação do modulo api_front e ajuste no html front-end

**Versão 1.2** desenvolvida em **08/02/2021**

- Inclusão da rota criptomoedas, requisição feita com chave no headers

**Versão 1.3** desenvolvida em **09/02/2021**

- instalação do Sequelize.

**OBS:** App em constante desenvolvimento.

## **Notas:** Aprendizado

- Desenvolvimento da api do zero, assimilando toda a lógica e funcionamento.
- Habilitação da porta (3030), criação da rota para solicitação de cada moeda com a nova alteração a rota passou a ser dinâmica.
- Liberação de acesso externos com o CORS.
- Utilização do axios e fetch para as requisições e respostas, axios no Back End e Fetch no Front End.
- Utilização do Async/await, tratativas de erros com o Try e Catch.
- Manipulação de DOM, ler e escrever em elementos HTML5 atraves do JavaScript.
- Mapear a resposta da requisição e utilizar campos específicos.
- Consumir dados de Api que necessita de chave para autorização com configuraçãoes na requisição.
- Criação do banco de dados.

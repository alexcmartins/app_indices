# App para consulta de índices financeiros e moedas

## Objetivo do App

Esse app foi desenvolvido com o intuito de colocar em prática os meus estudos e desonvolver
cada vez mais a minha lógica.

## O que foi feito até aqui?

Nessa primeira etapa desenvolvi uma Api em JavaScript utilizando o NodeJs, express, cors e o
nodemon.

Essa api realiza requisições em <https://economia.awesomeapi.com.br/json/USD-BRL>, recebe os
resultados e trata para injetar no HTML5. O final do link "USD-BRL" corresponde a cada moeda
a ser consultada, elas são escolhidas no Front End em datalist.

Nesse momento os índices financeiros ainda não estão disponíveis, somente as moedas. Os dados
ainda não estão sendo armazenadas em banco de dados.

O Front End está somente em HTML5 e CSS3.

**Versão 1.0** disponibilizada em **22/01/2021**
**Versão 1.1** disponibilizada em **24/01/2021**

**OBS:** App em constante desenvolvimento.

## **Notas:** Aprendizado

- Com essa pequena app criei uma api do zero, assimilando toda a lógica de funcionamento
- Habilitação da porta (3030), criação de rotas para solicitação de cada moeda com a nova alteração as rotas
passaram ser dinâmicas.
- Liberação de acesso externos com o CORS
- Utilização do axios e fetch para as requisições, axios no Back End e Fetch no Front End
- Utilização do Async/await, tratando os erros e respostas com o Try e Catch
- Ler e escrever em atributos HTML5 atraves do JavaScript
- Mapear a resposta da requisição e utilizar campos específicos
- Criação de um div com os campos selecionados que foram mapeados após a requisição

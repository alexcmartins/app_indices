const cors = require('cors'); 
const express = require('express');
const app = express();
const port = 8080;
const { cripto } = require('./src/Modules/api_cripto');
const { exchange } = require('./src/Modules/api_exchange');
const router = require('./src/Routes/router');

app.use(cors());

/*Rota dinâmica*/
app.use('/', router)

/*Chama a função getCripto e atribui na variável coinCripto, usando intervalo de 5 minutos.*/
const coinCripto = setInterval(cripto, 300000);
//console.log(coinCripto)

/*Chama a função getCripto e atribui na variável coinExchange, usando intervalo de 2 minutos.*/
const coinExchange = setInterval(exchange, 120000);
//console.log(coinExchange)

app.listen(port);
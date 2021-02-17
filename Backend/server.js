const cors = require('cors'); 
const axios = require('axios'); 
const express = require('express');
const app = express();
const port = 8080;
const Sequelize = require('sequelize');
const { cripto } = require('../modules/api_cripto');
const { exchange } = require('../modules/api_exchange');
const Coin = require('../database/Coin');
const { connection } = require('../database/database');

app.use(cors());

/*(async () => {
    
 
    try {
        const resultado = await Coin.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();*/

/*Acesso ao banco de dados*/
/*connection.authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso!!');
    Coin.sync({force: false}).then(() => {
        console.log('Tabela Criada!')
    });
      
  })
  .catch ((error) => {
  console.error('Não foi possível conectar ao banco:', error);
});*/

console.log(connection);

/*Chama a função getCripto e atribui na variável coinCripto, usando intervalo de 5 minutos.*/
/*const coinCripto = setInterval(cripto, 300000);
console.log(coinCripto)/*

/*Chama a função getCripto e atribui na variável coinExchange, usando intervalo de 2 minutos.*/
/*const coinExchange = setInterval(exchange, 120000);
console.log(coinExchange)*/

/*Rota dinâmica*/
app.get('/currency', async(req, res) => {
    try {
        //var currency = req.params.currency
        const { data } = await axios(
        'https://economia.awesomeapi.com.br/json/all/USD-BRL,USDT-BRL,EUR-BRL,CAD-BRL,GBP-BRL,ARS-BRL,JPY-BRL,CHF-BRL,CNY-BRL')
        console.log(data)
        return res.send(data)
    } catch (error) {
        console.error(error)
    }
    
});

app.listen(port);


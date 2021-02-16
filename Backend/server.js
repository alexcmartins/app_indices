const cors = require('cors'); 
const axios = require('axios'); 
const express = require('express');
const app = express();
const port = 8080;
const Sequelize = require('sequelize');
const { cripto } = require('../modules/api_cripto');
const { exchange } = require('../modules/api_exchange');

app.use(cors());

/*Chama a função getCripto e atribui na variável coinCripto, usando intervalo de 2 minutos.*/
/*const coinCripto = setInterval(cripto, 300000);
console.log(coinCripto)/*

/*Chama a função getCripto e atribui na variável coinCripto, usando intervalo de 2 minutos.*/
const coinExchange = setInterval(exchange, 180000);
console.log(coinExchange)

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


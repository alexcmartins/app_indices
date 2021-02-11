const cors = require('cors'); 
const axios = require('axios'); 
const express = require('express');
const app = express()
const port = 3030
const key = require('../modules/key');
const connection = require('../database/database');

connection.authenticate()
    .then(() => {
        console.log('Conexão estabelecida com sucesso!!');
    })
    .catch ((error) => {
    console.error('Não foi possível conectar ao banco:', error);
  });

  console.log(conect)

app.use(cors())

const requestOptions = {
    method: 'GET',
    url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      'start': '1',
      'limit': '5000',
      'convert': 'USD'
    },
    headers: {
      'X-CMC_PRO_API_KEY': `${key}`
    },
    json: true,
    gzip: true
  };

app.get('/cripto', async(req, res) => {
    try {
        const { data } = await axios(requestOptions)
        return res.json(data)
    } catch (error) {
        console.error(error)
    };
    
});

/*Rota dinâmica*/
app.get('/:currency', async(req, res) => {

    try {
        var currency = req.params.currency
        const { data } = await axios(`https://economia.awesomeapi.com.br/json/${currency}`)
        //(`https://economia.awesomeapi.com.br/json/${choose}`)
        //('https://economia.awesomeapi.com.br/json/')

        return res.json(data)
    } catch (error) {
        console.error(error)
    }
    
});

app.listen(port);

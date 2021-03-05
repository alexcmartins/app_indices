//const Sequelize = require('../Backend/node_modules/sequelize');
const axios = require('axios');
//const { connection } = require('../database/database.js');
const Coin = require('../Models/Coin');

/*Função que faz uma requisição e recebe as moedas selecionadas abaixo em Real BRL*/
const exchange = async function() { 
    try {
        const { data } = await axios(
            'https://economia.awesomeapi.com.br/json/all/USD-BRL,USDT-BRL,EUR-BRL,CAD-BRL,GBP-BRL,ARS-BRL,JPY-BRL,CHF-BRL,CNY-BRL')
            for (const key of Object.keys(data)) {
                Coin.create({
                key: 'Exchange',
                name: data[key].name,
                symbol: data[key].code,
                conversion_currency: 'BRL',
                price_buy: data[key].bid,
                price_sale: data[key].ask,
                last_updated_price: data[key].create_date
            })
        }
            console.log(data)
            return (data)
        } catch (error) {
            console.error(error)
        }
};

/*Acesso ao banco de dados*/
/*connection.authenticate()
  .then(() => {
      console.log('Conexão estabelecida com sucesso!!');
  })
  .catch ((error) => {
  console.error('Não foi possível conectar ao banco:', error);
});

console.log(connection)*/

module.exports = { exchange };
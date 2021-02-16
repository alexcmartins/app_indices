const Sequelize = require('../Backend/node_modules/sequelize')
const axios = require('../Backend/node_modules/axios')
const { connection } = require('../database/database.js');

/*Função que faz uma requisição e recebe as moedas selecionadas abaixo em Real BRL*/
const exchange = async function() { 
    try {
        const { data } = await axios(
            'https://economia.awesomeapi.com.br/json/all/USD-BRL,USDT-BRL,EUR-BRL,CAD-BRL,GBP-BRL,ARS-BRL,JPY-BRL,CHF-BRL,CNY-BRL')
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
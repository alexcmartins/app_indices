const Sequelize = require('../Backend/node_modules/sequelize')
const axios = require('../Backend/node_modules/axios')
const { connection } = require('../database/database.js');
const { key } = require('../modules/key');

/*Função que faz uma requisição e recebe as moedas selecionadas abaixo em dolar*/
const cripto = async function() { 
    try {
      const { data } = await axios.get('https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest', {
        params: {
            id: '1,1027,825,6636,52,512,2011,1839,7083,2010,3077,1975,328,74',
            convert: 'USD'
          },
        headers: {
            'X-CMC_PRO_API_KEY': `${key}`
          },
        json: true,
        gzip: true
        })

      console.log(data);
      return (data)
    } catch (error) {
      console.error(error);
    }
  }

/*Acesso ao banco de dados*/
/*connection.authenticate()
  .then(() => {
      console.log('Conexão estabelecida com sucesso!!');
  })
  .catch ((error) => {
  console.error('Não foi possível conectar ao banco:', error);
});

console.log(connection)*/

module.exports = { cripto };


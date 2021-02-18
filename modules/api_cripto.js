//const Sequelize = require('../Backend/node_modules/sequelize')
const axios = require('../Backend/node_modules/axios')
//const { connection } = require('../database/database.js');
const { key } = require('../modules/key');
const Coin = require('../database/Coin');

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

        for (const key of Object.keys(data.data)) {
          //console.log(data.data[key].name)
          Coin.create({
          key: 'Cripto',
          name: data.data[key].name,
          symbol: data.data[key].symbol,
          num_market_pairs: data.data[key].num_market_pairs,
          max_supply: data.data[key].max_supply,
          circulating_supply: data.data[key].circulating_supply,
          total_supply: data.data[key].total_supply,
          conversion_currency: 'USD',
          price_sale: data.data[key].quote.USD.price,
          last_updated_price: data.data[key].quote.USD.last_updated,
          volume_24h: data.data[key].quote.USD.volume_24h,
          market_cap: data.data[key].quote.USD.market_cap
          });
      }

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


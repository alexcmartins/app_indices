const db = require('../Config/database')

const Coin = db.connection.define("coin", {
    key:{
        allowNull: false,
        type: db.Sequelize.STRING
    },
    name:{
        allowNull: false,
        type: db.Sequelize.STRING
    },
    symbol:{
        allowNull: false,
        type: db.Sequelize.STRING
    },
    num_market_pairs:{
        type: db.Sequelize.INTEGER
    },
    tags:{
        type: db.Sequelize.STRING
    },
    max_supply:{
        type: db.Sequelize.BIGINT
    },
    circulating_supply:{
        type: db.Sequelize.BIGINT
    },
    total_supply:{
        type: db.Sequelize.BIGINT
    },
    conversion_currency:{
        allowNull: false,
        type: db.Sequelize.STRING
    },
    price_buy:{
        type: db.Sequelize.FLOAT
    },
    price_sale:{
        allowNull: false,
        type: db.Sequelize.FLOAT
    },
    price_high:{
        type: db.Sequelize.FLOAT
    },
    price_low:{
        type: db.Sequelize.FLOAT
    },
    last_updated_price:{
        allowNull: false,
        type: db.Sequelize.DATE
    },
    price_buy_opening:{
        type: db.Sequelize.FLOAT
    },
    price_buy_close:{
        type: db.Sequelize.FLOAT
    },
    price_sale_opening:{
        type: db.Sequelize.FLOAT
    },
    price_sale_close:{
        type: db.Sequelize.FLOAT
    },
    volume_24h:{
        type: db.Sequelize.FLOAT
    },
    market_cap:{
        type: db.Sequelize.FLOAT
    },
    variance_price_buy_1h:{
        type: db.Sequelize.FLOAT
    },
    variance_price_buy_1h_percent:{
        type: db.Sequelize.FLOAT
    },
    variance_price_sale_1h:{
        type: db.Sequelize.FLOAT
    },
    variance_price_sale_1h_percent:{
        type: db.Sequelize.FLOAT
    },
    variance_price_buy_24h:{
        type: db.Sequelize.FLOAT
    },
    variance_price_buy_24h_percent:{
        type: db.Sequelize.FLOAT
    },
    variance_price_sale_24h:{
        type: db.Sequelize.FLOAT
    },
    variance_price_sale_24h_percent:{
        type: db.Sequelize.FLOAT
    },
    variance_price_buy_7d:{
        type: db.Sequelize.FLOAT
    },
    variance_price_buy_7d_percent:{
        type: db.Sequelize.FLOAT
    },
    variance_price_sale_7d:{
        type: db.Sequelize.FLOAT
    },
    variance_price_sale_7d_percent:{
        type: db.Sequelize.FLOAT
    },
    variance_price_buy_30d:{
        type: db.Sequelize.FLOAT
    },
    variance_price_buy_30d_percent:{
        type: db.Sequelize.FLOAT
    },
    variance_price_sale_30d:{
        type: db.Sequelize.FLOAT
    },
    variance_price_sale_30d_percent:{
        type: db.Sequelize.FLOAT
    },
    variance_price_buy_60d:{
        type: db.Sequelize.FLOAT
    },
    variance_price_buy_60d_percent:{
        type: db.Sequelize.FLOAT
    },
    variance_price_sale_60d:{
        type: db.Sequelize.FLOAT
    },
    variance_price_sale_60d_percent:{
        type: db.Sequelize.FLOAT
    },
});

Coin.sync({force: false}).then(() =>{
    console.log('Tabela Criada com Sucesso!')
});

module.exports = Coin;
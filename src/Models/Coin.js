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
        type: db.Sequelize.DECIMAL
    },
    circulating_supply:{
        type: db.Sequelize.DECIMAL
    },
    total_supply:{
        type: db.Sequelize.DECIMAL
    },
    conversion_currency:{
        allowNull: false,
        type: db.Sequelize.STRING
    },
    price_buy:{
        type: db.Sequelize.DECIMAL
    },
    price_sale:{
        allowNull: false,
        type: db.Sequelize.DECIMAL
    },
    price_high:{
        type: db.Sequelize.DECIMAL
    },
    price_low:{
        type: db.Sequelize.DECIMAL
    },
    last_updated_price:{
        allowNull: false,
        type: db.Sequelize.DATE
    },
    price_buy_opening:{
        type: db.Sequelize.DECIMAL
    },
    price_buy_close:{
        type: db.Sequelize.DECIMAL
    },
    price_sale_opening:{
        type: db.Sequelize.DECIMAL
    },
    price_sale_close:{
        type: db.Sequelize.DECIMAL
    },
    volume_24h:{
        type: db.Sequelize.DECIMAL
    },
    market_cap:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_buy_1h:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_buy_1h_percent:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_sale_1h:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_sale_1h_percent:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_buy_24h:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_buy_24h_percent:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_sale_24h:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_sale_24h_percent:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_buy_7d:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_buy_7d_percent:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_sale_7d:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_sale_7d_percent:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_buy_30d:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_buy_30d_percent:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_sale_30d:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_sale_30d_percent:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_buy_60d:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_buy_60d_percent:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_sale_60d:{
        type: db.Sequelize.DECIMAL
    },
    variance_price_sale_60d_percent:{
        type: db.Sequelize.DECIMAL
    },
});

Coin.sync({force: false}).then(() =>{
    console.log('Tabela Criada com Sucesso!')
});

module.exports = Coin;
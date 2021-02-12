const { Sequelize } = require('/home/cantareiramartins/Área de Trabalho/new_app/Backend/node_modules/sequelize/lib/sequelize');
const { userName, password } = require('../modules/key');

const connection = new Sequelize('appfinance', `${userName}` , `${password}`, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
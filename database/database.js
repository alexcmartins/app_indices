const { Sequelize } = require('../Backend/node_modules/sequelize/index');
const { userName, password } = require('../modules/key');

/*Configuração da conexão com o banco de dados*/
const connection = new Sequelize('appfinance', `${userName}` , `${password}`, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = { connection };
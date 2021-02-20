const { Sequelize } = require('../Backend/node_modules/sequelize/index');
const { nameBD, userName, password } = require('../Modules/key');

/*Configuração da conexão com o banco de dados*/
const connection = new Sequelize(`${nameBD}`, `${userName}` , `${password}`, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = { connection, Sequelize };
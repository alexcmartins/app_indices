const { Sequelize } = require('sequelize');
const { nameBD, userName, password } = require('../Config/key');

/*Configuração da conexão com o banco de dados*/
const connection = new Sequelize(`${nameBD}`, `${userName}` , `${password}`, {
    //host: '192.168.1.108',
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = { connection, Sequelize };
const Sequelize = require('sequelize');
//const { username, password } = require('../modules/key');

const connection = new Sequelize('appfinance', 'root' , 'Al253900', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection ;
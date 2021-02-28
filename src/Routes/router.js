const express = require('express');
const Sequelize = require('sequelize')
const Coin = require('../Models/Coin');
const router = express.Router();

router.get('/', async(req, res) => {
    try {
        //var currency = req.params.currency
        res.status(200).send('Seja bem vindo!!')
    } catch (error) {
        console.error(error)
    }
    
});

router.get('/v1/api/exchange', async(req, res) => {
    try {
        //var currency = req.params.currency
        const data = await Coin.findAll({
            where: {
                key: 'Exchange'
            },
            order: [['createdAT', 'DESC']],
            limit: 9
        });
        res.status(200).json(data)
    } catch (error) {
        console.error(error)
    }
    
});

router.get('/v1/api/cripto', async(req, res) => {
    try {
        //var currency = req.params.currency
        const data = await Coin.findAll({
            where: {
                key: 'Cripto'
            },
            order: [
                ['id', 'DESC']
            ],
            limit: 14
        });
        res.status(200).json(data)
    } catch (error) {
        console.error(error)
    }
    
});

module.exports = router;
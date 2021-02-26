const express = require('express');
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

router.get('/v1/api', async(req, res) => {
    try {
        //var currency = req.params.currency
        const data = await Coin.findAll({
            attributes: ['Cripto']
        });
        res.status(200).send(data)
    } catch (error) {
        console.error(error)
    }
    
});

module.exports = router;
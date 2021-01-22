const cors = require('cors')
const axios = require('axios') 
const express = require('express')
const app = express()
const port = 3030

app.use(cors())

app.get('/usd', async(req, res) => {

    try {
        const { data } = await axios('https://economia.awesomeapi.com.br/json/USD-BRL')
        //(`https://economia.awesomeapi.com.br/json/${choose}`)
        //('https://economia.awesomeapi.com.br/json/')

        return res.json(data)
    } catch (error) {
        console.error(error)
    }
    
});

app.get('/eur', async(req, res) => {

    try {
        const { data } = await axios('https://economia.awesomeapi.com.br/json/EUR-BRL')
        //(`https://economia.awesomeapi.com.br/json/${choose}`)
        //('https://economia.awesomeapi.com.br/json/')

        return res.json(data)
    } catch (error) {
        console.error(error)
    }

});

app.get('/gbp', async(req, res) => {

    try {
        const { data } = await axios('https://economia.awesomeapi.com.br/json/GBP-BRL')
        //(`https://economia.awesomeapi.com.br/json/${choose}`)
        //('https://economia.awesomeapi.com.br/json/')

        return res.json(data)
    } catch (error) {
        console.error(error)
    }
    
});

app.get('/btc', async(req, res) => {

    try {
        const { data } = await axios('https://economia.awesomeapi.com.br/json/BTC-BRL')
        //(`https://economia.awesomeapi.com.br/json/${choose}`)
        //('https://economia.awesomeapi.com.br/json/')

        return res.json(data)
    } catch (error) {
        console.error(error)
    }
    
});

app.get('/eth', async(req, res) => {

    try {
        const { data } = await axios('https://economia.awesomeapi.com.br/json/ETH-BRL')
        //(`https://economia.awesomeapi.com.br/json/${choose}`)
        //('https://economia.awesomeapi.com.br/json/')

        return res.json(data)
    } catch (error) {
        console.error(error)
    }
    
});

app.listen(port);

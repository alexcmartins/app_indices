const cors = require('cors')
const axios = require('axios') 
const express = require('express')
const app = express()
const port = 3030

app.use(cors())

/*Rota dinâmica*/
app.get('/:currency', async(req, res) => {

    try {
        var currency = req.params.currency
        const { data } = await axios(`https://economia.awesomeapi.com.br/json/${currency}`)
        //(`https://economia.awesomeapi.com.br/json/${choose}`)
        //('https://economia.awesomeapi.com.br/json/')

        return res.json(data)
    } catch (error) {
        console.error(error)
    }
    
});

app.listen(port);

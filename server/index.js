//bringing in express dependency (backend API)
const express = require('express');
const axios = require('axios');

const app = express();


//create get route
app.get('/api', (req,res) => {
    axios('https://free.currencyconverterapi.com/api/v6/currencies')
    .then((response) => {
        res.send(response.data.results)
	})
	.catch((error) => {
	   res.send(error);;
	});
})

//default 2020 or heroku will choose
const port = process.env.PORT || '2020';
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
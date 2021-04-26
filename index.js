const express = require('express')
const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) => res.send('Yes it is running!'))
  .get('/taro', (req, res) => res.send([
    {"id" : 1,
    "name" : "Paul",
    "info" : "Favourite cheese: roquefort"},
    {"id" : 2,
    "name" : "Helen",
    "info" : "Favourite cheese: mozzarella"}
		]))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

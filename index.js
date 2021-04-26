const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/taro', (req, res) => res.send([
    {"id" : 1,
    "name" : "Paul",
    "info" : "Favourite cheese: roquefort"},
    {"id" : 2,
    "name" : "Helen",
    "info" : "Favourite cheese: mozzarella"}
		]))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

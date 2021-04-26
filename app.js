const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Yes it is running')
})

app.get('/taro', (req, res) => {
  res.send([
    {"id" : 1,
    "name" : "Paul",
    "info" : "Favourite cheese: roquefort"},
    {"id" : 2,
    "name" : "Helen",
    "info" : "Favourite cheese: mozzarella"},
  ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

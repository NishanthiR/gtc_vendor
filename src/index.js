const express = require('express')
const app = express()

app.get('/product', function (req, res) {
  res.send('productPage');
})

app.get('/', function (req, res) {
  res.send('homePage');
})

app.listen(7000, function() {
    console.log("This port is up on 7000");
})
const express = require("express");
const path = require("path");
const app = express();

const hbs = require("hbs");

const request = require('request');
const bodyParser = require("body-parser");

const routes = require("./routes");

const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.use(express.static(publicDirPath));
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/product/:id', function (req, res) {
  request(`http://localhost:4000/api/product/${req.params.id}`, function (error, response, body) {
    if (error) {
      console.error('error:', error);
      res.status(500).send('Unable to render page');
      return;
    }
    console.log('body:', body);
    res.render('productPage', {
      product: JSON.parse(body)
    });
  });
})

app.get('/login', function (req, res) {
  res.render('login');
})

app.get('/addAddress', function (req, res) {
  res.render('addAddress');
})

app.get('/reg', function (req, res) {
  res.render('reg');
})

app.get('/vendor', function (req, res) {
  request('http://localhost:4000/api/category', function (error, response, body) {
    if (error) {
      console.error('error:', error);
      res.status(500).send('Unable to render page');
      return;
    }
    console.log('body:', body);
    res.render('vendor', {
      categories: JSON.parse(body)
    })
  });
})


app.get('/cart', function (req, res) {
  res.render('cart');
})

app.listen(7000, function () {
  console.log("This port is up on 7000");

})
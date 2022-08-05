const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
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

app.get('/product/4321', function (req, res) {
  res.render('productPage');
})

app.get('/login', function (req, res) {
  res.render('login');
})

app.get('/reg', function (req, res) {
  res.render('reg');
})

app.get('/vendor', function (req, res) {
  res.render('vendor');
})

app.listen(7000, function() {
    console.log("This port is up on 7000");
})
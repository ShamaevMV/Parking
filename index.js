const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const db = require("./config/database");
const products = require("./models/products");
const requestHelper = require("./helpers/requestHelper")

const uri = "mongodb+srv://admin:admin@cluster0-hfnzd.mongodb.net/test?retryWrites=true&w=majority";

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs.engine());
app.use(express.static('public'));

//
// const user = {
//   name: 'ololosh'
// }

// products.findOneAndReplace({name: 'Cappucino'}, replace1, { "returnNewDocument": false});
// app.get('/', async (req, res) => {
//     let prod;
//     try {
//       await products.findOneAndReplace({name: 'Cappucino'}, replace1, { "returnNewDocument": true });
//     }
//     catch (e) {
//         console.log(e)
//     }
//   res.render('index', {
//     title: prod
//   })
// })
//
//
// xhttp.open("GET", "views/index.handlebars", true);
// xhttp.send();

app.get('/', async (req, res) => {
  let productsArray = [];
  let prod;

  try {
    await products.find({}, (err, res_prod) => {productsArray = requestHelper.beautify(res_prod)}).clone().lean(); //стрелочная функция тут поудобнее, имхо. Clone убирает ругань от повторящихся элемнетов
    if (prod !== undefined) console.log(prod); //не стал удалять, просто скрыл
  }
  catch (e) {
    console.log(e)
  }
  console.log(productsArray);
  res.render('index', {
    // user: user
    products: productsArray
  })
});


app.get('/products', async (req, res) => {
  console.log(req.query.id)
  res.json ({a2:1})
});


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
});

const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(uri, {
    useNewUrlParser: true
});
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

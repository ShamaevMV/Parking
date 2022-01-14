// console.log('Добавь запрос к отдельному эндпоинту(который надо заранее создать), который будет возвращать весь объект(по которому ты кликнул, по изображению или тексту - неважно) и вывести его в консоль на фронте в браузере');

// var xhr = new XMLHttpRequest(); xhr.open("POST", '/server', true);
// //Send the proper header information along with the request xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// xhr.onreadystatechange = function() { // Call a function when the state changes.
// if (this.readyState === XMLHttpRequest.DONE && this.status === 200) { // Request finished. Do processing here.  } } xhr.send();

// var xhr = new XMLHttpRequest(); xhr.open("POST", '/server', true); //Send the proper header information along with the request xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); xhr.onreadystatechange = function() { // Call a function when the state changes. if (this.readyState === XMLHttpRequest.DONE && this.status === 200) { // Request finished. Do processing here. } } xhr.send();


//id из терминала, получаемый по клику, отправлять в db запросом  и отправить в консоль описание товара

const app = express();
const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:admin@cluster0-hfnzd.mongodb.net/test?retryWrites=true&w=majority";

function sendreq () {
  let id = this.id
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.response)
      }
  };

function console_log_by_name(req) {
  app.get('/', async (req, res) => {
    try {
        await products.findOne({name:req}).clone().lean(); //стрелочная функция тут поудобнее, имхо. Clone убирает ругань от повторящихся элемнетов
    }
    catch (e) {
      console.log(e)
    }
    console.log(res);
});


  xhttp.open("GET", "http://localhost:3000/products?id=" +id, true);
  xhttp.send();
}

var elements = document.getElementsByClassName("product");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', sendreq, false);
}

//library framework express
//variable with return (function)
let express = require('express');
let app = express();
let msg = require('./mod_teste')();
//views egine ejs
console.log("##Iniciando aplicacao##");

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("home/index");
});

app.get('/admin', function(req, res){
    res.render("admin/form_add_noticia");
});

app.get('/noticias', function(req, res){
    res.render("noticias/noticias");
});

app.listen(3000, function(){
    console.log(msg);
});
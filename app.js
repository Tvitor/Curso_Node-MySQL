//library framework express
//variable with return (function)
let express = require('express');
let app = express();
//views egine ejs

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
    console.log('servidor rodando com express');
});
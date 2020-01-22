//library framework express
//variable with return (function)
let express = require('express');
let app = express();
//views egine ejs

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("secao/home");
});

app.listen(3000, function(){
    console.log('servidor rodando com express');
});
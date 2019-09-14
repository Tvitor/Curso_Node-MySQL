//library framework express
//variable with return ()
let express = require('express')();

//views egine ejs

express.set('view engine', 'ejs');

express.get('/',function(req,res){
    res.render("secao/home");
});

express.listen(3000, function(){
    console.log('servidor rodando com express');
});
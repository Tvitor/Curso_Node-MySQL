//library framework express
//variable with return ()
let express = require('express')();

express.get('/',function(req,res){
    res.send("<html><body>Portal de noticias</body></html>");
})

express.listen(3000, function(){
    console.log('servidor rodando com express');
});
//import library http for client's requests 
let  http = require('http');
let htmlTemplate = "<html><body><p>Portal de Noticias</p></body></html>"

//create a server
//argument function(req, res)
let server = http.createServer(function(req, res){
    res.end(htmlTemplate);
});

server.listen(3000);

//import library http for client's requests 
let  http = require('http');

//create a server
//argument function(req, res)
let server = http.createServer(function(req, res){

    let htmlTemplate = req.url;

    switch (htmlTemplate) {
        case '/tecnologia':
            res.end("<html<body><p>Tecnologia</body></html>");
        break;
        case '/politica':
            res.end("<html<body><p>Politica</body></html>");
        break;
        default:
            res.end("<html<body><p>Portal de Noticias</body></html>");
        break;
    }

});

server.listen(3000);

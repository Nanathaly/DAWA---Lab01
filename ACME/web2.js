var http = require('http'),
fs = require('fs');

http.createServer(function(solicitud,respuesta){
    fs.readFile('./contacto.html',function(error,html){
        respuesta.write(html);
        respuesta.end();
    });

}).listen(8081);
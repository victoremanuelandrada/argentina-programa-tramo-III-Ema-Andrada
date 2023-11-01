//servidor echo http alojado en el puerto 3000
//Clase 2 /8/10
const http = require('node:http');
const PORT = 3000;
const servidor = http.createServer();

servidor.listen(PORT, function(){
  console.log(`Servidor corriendo en el puerto ${PORT}`);
})
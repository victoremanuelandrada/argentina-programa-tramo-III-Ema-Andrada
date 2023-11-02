//servidor echo con express
const express = require('express');
/* constante*/
const server = express();
const PORT = 3000;


/* Funciones */
function validarUsuario(req, res, next) {
  const usuarioValido = true;// cambiar este valor para ver
  if (usuarioValido) {
    next()
  } else {
    res.status(401).send('El usuario no es valido');
  }
}

/* Middlewores*/
//server.use(validarUsuario) aFecta todas las rutas
server.use(express.static('public'));// asigno rutas para archivos estaticos

/* Rutas */
server.get('/', (req, res)=> {
  
  res.send('Hola Mundo');
})
server.post('/formulario', (req, res)=> {
  
  res.send('se envio el formulario');
})
server.get('/panel',[validarUsuario], (req, res)=> {
  try {
    res.send('Bienvenid@ al panel!');
  } catch (error) {
    res.status(500).send('ocurrio un error en el panel')
  }
 
})

//clse 26/10 codigos de respuestas
server.get('/buscarUsuario', (req, res)=> {
  const encontrado  = false;
  if (encontrado) {
    res.status(200).send('Status 200: El Usuario Fue encontrado');
    //res.json({mensaje: 'ok'})
  } else {
    res.status(401).send('Status 401: No se encontro el usario');
    //res.json({mensaje: 'error'})
  }
})
server.get('/200', (req, res)=> {
  
  res.status(200).send('Status 200: Ok');
 
})

server.get('/300', (req, res)=> {
  
  res.status(301).send('Status 301: la pagina se traslado a otrolugar');
})

server.get('/400', (req, res)=> {
  
  res.status(400).send('Status 400: Bad Resques. Ocurio un error');
})

server.get('/500', (req, res)=> {
  
  res.status(503).send('Status 503: el Servido no esta listo para manejar la peticion');
})
server.listen(PORT, ()=>{
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

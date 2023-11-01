//servidor echo con express
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res)=> {
  
  res.send('Hola Mundo');
})

app.listen(PORT, ()=>{
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

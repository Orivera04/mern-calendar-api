const express = require('express');
require('dotenv').config();

// Crear el servidor de express
const app = express();

// Directorio Público
app.use( express.static('public'));


// Rutas
// TODO: auth // crear, login, renew


app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});
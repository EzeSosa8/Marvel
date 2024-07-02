/**
 * Punto principal de acceso al servidor
 */

//IMPORTACION E INSTANCIADO DE EXPRESS
const express = require('express');
const app = express();

//IMPORTACION DEL MODULO contactoRoutes
const contactoRoutes = require('../routes/contactoRoutes');

//PUERTO
const PORT = 3000; 

//MIDDLEWARE JSON
app.use(express.json());

//PREFIJO DE LAS RUTAS
app.use('/marvel', contactoRoutes);

//INICIACION DEL SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});

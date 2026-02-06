const express = require('express');

const app = express();

const{infoCursos} = require('./cursos.js');

//routing
app.get('/', (req, res) => {
    res.send('servidor cursos idiomas')

});

app.get('/api/cursos', (req, res) => {
    res.send(infoCursos);
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`)
});
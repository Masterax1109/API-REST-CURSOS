const express = require('express');

const app = express();

const{infoCursos} = require('./datos/cursos.js');

//Router

const routerIdiomas = require('./routers/idiomas.js');

const routerProgramacion = require('./routers/programacion.js');

app.use('/api/cursos/programacion', routerProgramacion);

app.use('/api/cursos/idiomas', routerIdiomas);





//routing
app.get('/', (req, res) => {
    res.send('servidor cursos idiomas')

});

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});


const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`)
});
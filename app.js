const express = require('express');

const app = express();

const{infoCursos} = require('./cursos.js');

//routing
app.get('/', (req, res) => {
    res.send('servidor cursos idiomas')

});

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

app.get('/api/cursos/idiomas', (req, res) => {
    res.send(JSON.stringify(infoCursos.Idiomas));
} );

app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.Programacion));
} );

app.get('/api/cursos/idiomas/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.Idiomas.filter(curso => curso.titulo === lenguaje);

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos con el título: ${lenguaje}`);
    }

    

    res.send(JSON.stringify(resultados));
});

app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.Programacion.filter(curso => curso.titulo === lenguaje);

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos con el título: ${lenguaje}`);
    }

    

    res.send(JSON.stringify(resultados));
});


const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`)
});
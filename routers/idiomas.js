const express = require('express');

const routerIdiomas = express.Router();

const {Idiomas} = require ('../datos/cursos.js').infoCursos;

//idiomas
routerIdiomas.get('/', (req, res) => {
    res.send(JSON.stringify(Idiomas));
} );

routerIdiomas.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = Idiomas.filter(curso => curso.titulo === lenguaje);

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos con el título: ${lenguaje}`);
    }

    

    res.send(JSON.stringify(resultados));
});


routerIdiomas.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = Idiomas.filter(curso => curso.titulo === lenguaje && curso.nivel === nivel)

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos con el título ${lenguaje} de nivel ${nivel}`);
    }

    res.send(JSON.stringify(resultados));
});

module.exports = routerIdiomas;
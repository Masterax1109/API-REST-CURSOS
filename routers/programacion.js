const express = require('express');

const routerProgramacion = express.Router();

const {Programacion} = require ('../datos/cursos.js').infoCursos;

//Programacion
routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(Programacion));
} );

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = Programacion.filter(curso => curso.titulo === lenguaje);

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos con el título: ${lenguaje}`);
    }


    res.send(JSON.stringify(resultados));
});

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = Programacion.filter(curso => curso.titulo === lenguaje && curso.nivel === nivel)

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos con el título ${lenguaje} de nivel ${nivel}`);
    }

    res.send(JSON.stringify(resultados));
});

module.exports = routerProgramacion;
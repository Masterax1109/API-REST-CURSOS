const express = require('express');

const routerIdiomas = express.Router();

const {Idiomas} = require ('../datos/cursos.js').infoCursos;

//middleware
routerIdiomas.use(express.json())

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

routerIdiomas.post('/', (req,res) => {
    let cursoNuevo = req.body;
    Idiomas.push(cursoNuevo);

    res.send(JSON.stringify(Idiomas)); 
});

routerIdiomas.put('/:id', (req,res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = Idiomas.findIndex(curso => curso.id == id);

    if (indice >=0){
        Idiomas[indice] = cursoActualizado;
    }

    res.send(JSON.stringify(Idiomas));
});

routerIdiomas.patch('/:id', (req,res)=> {
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = Idiomas.findIndex(curso => curso.id == id);

    if (indice >=0){
        const cursoAModificar = Idiomas[indice];
        Object.assign(cursoAModificar, infoActualizada)
    }

    res.send(JSON.stringify(Idiomas));

})

routerIdiomas.delete('/:id', (req,res) => {

    const id = req.params.id;
    const indice = Idiomas.findIndex(curso => curso.id == id);

    if (indice >=0){
        Idiomas.splice(indice, 1);
    }

    res.send(JSON.stringify(Idiomas));
});

module.exports = routerIdiomas;
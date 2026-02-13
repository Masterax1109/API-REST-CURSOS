const express = require('express');

const routerProgramacion = express.Router();

const {Programacion} = require ('../datos/cursos.js').infoCursos;

//middleware
routerProgramacion.use(express.json())

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

routerProgramacion.post('/', (req,res) => {
    let cursoNuevo = req.body;
    Programacion.push(cursoNuevo);

    res.send(JSON.stringify(Programacion)); 
});

routerProgramacion.put('/:id', (req,res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = Programacion.findIndex(curso => curso.id == id);

    if (indice >=0){
        Programacion[indice] = cursoActualizado;
    }

    res.send(JSON.stringify(Programacion));
});

routerProgramacion.patch('/:id', (req,res)=> {
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = Programacion.findIndex(curso => curso.id == id);

    if (indice >=0){
        const cursoAModificar = Programacion[indice];
        Object.assign(cursoAModificar, infoActualizada)
    }

    res.send(JSON.stringify(Programacion));

})

routerProgramacion.delete('/:id', (req,res) => {

    const id = req.params.id;
    const indice = Programacion.findIndex(curso => curso.id == id);

    if (indice >=0){
        Programacion.splice(indice, 1);
    }

    res.send(JSON.stringify(Programacion));
});

module.exports = routerProgramacion;
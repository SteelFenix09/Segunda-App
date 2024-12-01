const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const multer = require ('multer')

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const buildPath = path.join(__dirname, '..', 'app', 'build');
app.use(express.static(buildPath));

const nombres = [];

app.use(express.json())

app.get("/proyectos", (req, res) => {
    res.json(nombres)
})

app.post('/proyectos', (req, res) => {
    const nuevoNombre = req.body;
    nombres.push(nuevoNombre);
    console.log('Proyecto agregado:', nuevoNombre);
    console.log('proyecto:', nombres);
    res.status(201).send({ message: 'Nombre agregado correctamente' });
});

app.put("/proyectos/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const actualizacion = req.body
    const prode = nombres.findIndex(pro => pro.id === id)
    if(prode === -1){
        return res.status(404).send('Producto no encontrado')
    }
    nombres[prode] = {...nombres[prode], ...actualizacion}
    console.log('Dice que se actualizo ', nombres[prode]);
    
    res.send({message: 'proyecto actualizaso bien'})
})  

app.get("/proyecto/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const prode = nombres.find(pro => pro.id === id)
    if (prode) {
        res.json(prode)
    } else {
        res.status(404).send('Producto no encontrado')
    }
})

const storage = multer.diskStorage({
    destination: function(req, res, cb){
        cb(null,'imagenes/' )
    },
    filename: function(req, file, cb){
        const uniqueSuffix = Date.now()+ '-' + Math.round(Math.random()* 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

const uplood = multer({storage: storage})

app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'))
})

app.listen(port, () => {
    console.log('Servidor en ejecución en el puerto', port);
});
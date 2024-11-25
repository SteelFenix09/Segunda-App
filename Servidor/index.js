const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const path = require('path')
const app = express()
const port = 3001


app.use(bodyparser.json())

const buildPath = path.join(__dirname, '..', 'app', 'build')

const productos = [
    {
        id: 1, nombre: "", imagen: "",im: "", direccion: "/sabrita", infoTabla: "", recomendacion: {
            info1: "",
            info2: "",
            info3: ""
        }
    },
    {
        id: 2, nombre: "", imagen: "",im: "", direccion: "/sabrita", infoTabla: "", recomendacion: {
            info1: "",
            info2: "",
            info3: ""
        }
    },
    {
        id: 3, nombre: "", imagen: "",im: "", direccion: "/sabrita", infoTabla: "", recomendacion: {
            info1: "",
            info2: "",
            info3: ""
        }
    },
    {
        id: 4, nombre: "", imagen: "",im: "", direccion: "/bebidas", infoTabla: "", recomendacion: {
            info1: "",
            info2: "",
            info3: ""
        }
    },
    {
        id: 5, nombre: "", imagen: "",im: "", direccion: "/bebidas", infoTabla: "", recomendacion: {
            info1: "",
            info2: "",
            info3: ""
        }
    },
    {
        id: 6, nombre: "", imagen: "",im: "", direccion: "/bebidas", infoTabla: "", recomendacion: {
            info1: "",
            info2: "",
            info3: ""
        }
    },
    {
        id: 7, nombre: "", imagen: "",im: "", direccion: "/galleta", infoTabla: "", recomendacion: {
            info1: "",
            info2: "",
            info3: ""
        }
    },
    {
        id: 8, nombre: "", imagen: "",im: "", direccion: "/galleta", infoTabla: "", recomendacion: {
            info1: "",
            info2: "",
            info3: ""
        }
    },
    {
        id: 9, nombre: "", imagen: "",im: "", direccion: "/galleta", infoTabla: "", recomendacion: {
            info1: "",
            info2: "",
            info3: ""
        }
    }
]

app.use(express.static(buildPath))

app.use("/img", express.static(path.join(buildPath, 'img')))

app.use("/mens", (req, res) => {
    res.send("Servidor en funcionamiento")
})

app.get("/proyectos", (req, res) => {
    const nuevo = req.body;
    nuevo.id = productos.length > 0 ? Math.max(...productos.map(p => p.id)) +1 : 1;
    productos.push(nuevo)
    res.status(201).json(nuevo)
})

app.get("/proyectos/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const prode = productos.find(pro => pro.id === id)
    if (prode === -1) {
        return res.status(404).send('Estas bien wey')
    } 
    productos.splice(prode, 1);
    res.status(204).send()
})

app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'))
})

app.listen(port, () => {
    console.log("Servidor en ejucicon en", port);

})
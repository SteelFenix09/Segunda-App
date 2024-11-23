const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const path = require('path')
const app = express()
const port = 3001


const buildPath = path.join(__dirname, '..', 'app', 'build')

const productos = [
    { id: 1, nombre: "Doritos", imagen: "/img/Sabritas/Pizee.png" },
    { id: 2, nombre: "Rufles", imagen: "/img/Sabritas/Rufles.png" },
    { id: 3, nombre: "Chetos", imagen: "/img/Sabritas/torci.png" }
]

app.use(express.static(buildPath))

app.use("/img", express.static(path.join(buildPath, 'img')))

app.use("/mens", (req, res) => {
    res.send("Servidor en funcionamiento")
})

app.get("/proyectos", (req, res) => {
    res.json(productos)
})

app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'))
})

app.listen(port, () => {
    console.log("Servidor en ejucicon en", port);

})
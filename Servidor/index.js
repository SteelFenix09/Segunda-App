const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const path = require('path')
const app = express()
const port = 3001



const buildPath = path.join(__dirname, '..', 'app', 'build')

const productos = [
    { id: 1, nombre: "Doritos", imagen: "/img/Sabritas/Pizee.png",direccion:"/direccion", infoTabla:"hola", recomendacion: {
        info1: "Es fácil dejarse llevar por el sabor, pero intenta controlar las porciones para evitar un consumo excesivo de grasas y sodio.",
        info2: "Inclúyelas en una dieta variada y equilibrada, combinándolas con frutas, verduras y proteínas.",
        info3: "Antes de consumirlas, revisa la información nutricional para conocer el contenido de calorías, grasas, sodio y otros nutrientes."
    } },
    { id: 2, nombre: "Rufles", imagen: "/img/Sabritas/Rufles.png",direccion: "/direccion", infoTabla:"hola", recomendacion: {
        info1: "..",
        info2: "..",
        info3: ".."} },
    { id: 3, nombre: "Chetos", imagen: "/img/Sabritas/torci.png", direccion: "/direccion",infoTabla:"hola",  recomendacion: {
        info1: "..",
        info2: ".",
        info3: ""} }
]

app.use(express.static(buildPath))

app.use("/img", express.static(path.join(buildPath, 'img')))

app.use("/mens", (req, res) => {
    res.send("Servidor en funcionamiento")
})

app.get("/proyectos", (req, res) => {
    res.json(productos)
})

app.get("/proyectos/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const prode = productos.find(pro => pro.id === id)
    if (prode) {
        res.json(prode)
    } else {
        res.status(404).send('Producto no encontrado')
    }
})

app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'))
})

app.listen(port, () => {
    console.log("Servidor en ejucicon en", port);

})
const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const path = require('path')
const app = express()
const port = 3001



const buildPath = path.join(__dirname, '..', 'app', 'build')

const productos = [
    {
        id: 1, nombre: "Doritos", imagen: "/img/Sabritas/Pizee.png",im: "/img/Sabritas/Pizee.png", direccion: "/sabrita", infoTabla: "/img/Sabritas/Tabla1.jpg", recomendacion: {
            info1: "Es fácil dejarse llevar por el sabor, pero intenta controlar las porciones para evitar un consumo excesivo de grasas y sodio.",
            info2: "Inclúyelas en una dieta variada y equilibrada, combinándolas con frutas, verduras y proteínas.",
            info3: "Antes de consumirlas, revisa la información nutricional para conocer el contenido de calorías, grasas, sodio y otros nutrientes."
        }
    },
    {
        id: 2, nombre: "Rufles", imagen: "/img/Sabritas/Rufles.png",im: "/img/Sabritas/Rufles.png", direccion: "/sabrita", infoTabla: "/img/Sabritas/Tabla2.jpg", recomendacion: {
            info1: "..",
            info2: "..",
            info3: ".."
        }
    },
    {
        id: 3, nombre: "Chetos", imagen: "/img/Sabritas/torci.png",im: "/img/Sabritas/torci.png", direccion: "/sabrita", infoTabla: "/img/Sabritas/Tabla3.jpg", recomendacion: {
            info1: "Hola1",
            info2: "Hola3",
            info3: "Hola2"
        }
    },
    {
        id: 4, nombre: "Pepesi", imagen: "/img/Refrescos/Nutri8.png",im: "/img/Refrescos/Nutri2.png", direccion: "/bebidas", infoTabla: "/img/Refrescos/Tabla4.jpg", recomendacion: {
            info1: "Hola1",
            info2: "Hola3",
            info3: "Hola2"
        }
    },
    {
        id: 5, nombre: "Sprite", imagen: "/img/Refrescos/Nutri7.png",im: "/img/Refrescos/sponch.jpg", direccion: "/bebidas", infoTabla: "/img/Refrescos/Tabla5.jpg", recomendacion: {
            info1: "Hola1",
            info2: "Hola3",
            info3: "Hola2"
        }
    },
    {
        id: 6, nombre: "Jumex", imagen: "/img/Refrescos/Nutri10.png",im: "/img/Refrescos/sponch.jpg", direccion: "/bebidas", infoTabla: "/img/Refrescos/Tabla6.jpg", recomendacion: {
            info1: "Hola1",
            info2: "Hola3",
            info3: "Hola2"
        }
    },
    {
        id: 7, nombre: "Sponch", imagen: "/img/imgalleta/sponch.jpg",im: "/img/imgalleta/galletadesponch.png", direccion: "/galleta", infoTabla: "/img/imgalleta/sponchtabla.jpg", recomendacion: {
            info1: "1. Consúmelas con moderación: Como contienen azúcar y carbohidratos simples, es mejor disfrutarlas ocasionalmente, no como un snack diario.",
            info2: "2. Acompáñalas con algo más nutritivo: Puedes combinarlas con una fuente de proteínas o fibra, como un puñado de frutos secos o un poco de yogur, para balancear la merienda.",
            info3: "3. Alternativas más saludables: Si buscas una opción más nutritiva, opta por galletas integrales o de avena, que tienen más fibra y menos azúcar."
        }
    },
    {
        id: 8, nombre: "Chokis", imagen: "/img/imgalleta/chokis.jpg",im: "/img/imgalleta/galletadechokis.png", direccion: "/galleta", infoTabla: "/img/imgalleta/tablachokis.png", recomendacion: {
            info1: "1. Consúmelas con moderación: Debido a su contenido de azúcar y grasas, es mejor disfrutarlas ocasionalmente, no como un snack diario.",
            info2: "2. Acompáñalas con algo más nutritivo: Combínalas con alimentos ricos en fibra o proteínas, como fruta fresca o un puñado de frutos secos, para hacer tu merienda más equilibrada.",
            info3: "3. Alternativas más saludables: Si buscas algo similar pero más nutritivo, prueba hacer tus propias galletas con avena y chocolate oscuro."
        }
    },
    {
        id: 9, nombre: "Emperador", imagen: "/img/imgalleta/empe.png",im: "/img/imgalleta/galletadeempe.png", direccion: "/galleta", infoTabla: "/img/imgalleta/emperadortabla.png", recomendacion: {
            info1: "1. Consúmelas con moderación: Estas galletas son altas en azúcar y grasas, por lo que es mejor disfrutarlas ocasionalmente en lugar de convertirlas en un hábito diario.",
            info2: "2. Acompáñalas con algo más nutritivo: Puedes combinarlas con una porción de frutas frescas, como manzanas o fresas, para añadir fibra y vitaminas a tu merienda.",
            info3: "3. Alternativas más saludables: Si buscas algo más nutritivo, considera galletas hechas con harina integral, menor cantidad de azúcar o chocolate oscuro, que aporta antioxidantes."
        }
    }
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
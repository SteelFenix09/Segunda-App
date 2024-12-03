const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const path = require('path')
const app = express()
const port = 3001



const buildPath = path.join(__dirname, '..', 'app', 'build')

const productos = [
    {
        id: 1, nombre: " Doritos: Forma triangular y su variedad de sabores intensos", imagen: "/img/Sabritas/Pizee.png",im: "/img/Sabritas/Piz1.png", direccion: "/sabrita", infoTabla: "/img/Sabritas/Tabla1.png", recomendacion: {
            info1: "1. Es fácil dejarse llevar por el sabor, pero intenta controlar las porciones para evitar un consumo excesivo de grasas y sodio.",
            info2: "2. Inclúyelas en una dieta variada y equilibrada, combinándolas con frutas, verduras y proteínas.",
            info3: "3. Antes de consumirlas, revisa la información nutricional para conocer el contenido de calorías, grasas, sodio y otros nutrientes."
        }
    },
    {
        id: 2, nombre: " Rufles: Textura crujiente y forma de ondas", imagen: "/img/Sabritas/Rufles.png",im: "/img/Sabritas/Rufl1.png", direccion: "/sabrita", infoTabla: "/img/Sabritas/Tabla2.jpg", recomendacion: {
            info1: "1. Consume con moderación: Los Rufles son altos en calorías y grasas saturadas, así que limita su consumo.",
            info2: "2. Acompáñalos con algo saludable: Combina Rufles con opciones nutritivas como frutas o vegetales.",
            info3: "3. Toma agua: Evita refrescos azucarados y opta por agua para mantenerte hidratado."
        }
    },
    {
        id: 3, nombre: "Cheto: Forma retorcida y su sabor distintivo a queso", imagen: "/img/Sabritas/torci.png",im: "/img/Sabritas/torci1.png", direccion: "/sabrita", infoTabla: "/img/Sabritas/Tabla3.jpg", recomendacion: {
            info1: "1. Controla las porciones: Evita comer en exceso, ya que son altos en calorías y grasas.",
            info2: "2. Combina con alimentos saludables: Acompáñalos con opciones más nutritivas, como frutas o vegetales.",
            info3: "3. Consume con moderación: Disfruta como un snack ocasional, no diario."
        }
    },
    {
        id: 4, nombre: "Pepsi: Mezcla de agua carbonatada, azúcar, cafeína, colorante caramelo, ácido fosfórico, y aromas naturales.", imagen: "/img/Refrescos/Nutri10.png",im: "/img/Refrescos/Nutri2.png", direccion: "/bebidas", infoTabla: "/img/Refrescos/Tabla4.jpg", recomendacion: {
            info1: "1. Controla las porciones: Pepsi es alta en azúcar y calorías, así que limita su consumo.",
            info2: "2. Opta por versiones sin azúcar: Considera Pepsi Zero o **Pepsi Light** para reducir calorías.",
            info3: "3. Bebe agua: Asegúrate de hidratarte principalmente con agua, no con refrescos."
        }
    },
    {
        id: 5, nombre: "Sprite: Gaseosa sin cafeína, con sabor a limón y lima", imagen: "/img/Refrescos/Nutri7.png",im: "/img/Refrescos/Nutri7.png", direccion: "/bebidas", infoTabla: "/img/Refrescos/Tabla5.jpg", recomendacion: {
            info1: "1. Controla la cantidad: Limita su consumo para evitar exceso de azúcar y calorías.",
            info2: "2. Elige opciones sin azúcar: Prueba Sprite Zero para reducir calorías.",
            info3: "3. Bebe agua: Prioriza el agua para mantenerte bien hidratado."
        }
    },
    {
        id: 6, nombre: "Jumex: Néctares, bebidas sin gas, y opciones bajas en azúcar o enriquecidas con vitaminas.", imagen: "/img/Refrescos/Nutri8.png",im: "/img/Refrescos/Nutri8.png", direccion: "/bebidas", infoTabla: "/img/Refrescos/Tabla6.jpg", recomendacion: {
            info1: "1. Sin azúcar añadido: Opta por jugos sin azúcar para evitar calorías extra.",
            info2: "2. 100% naturales: Prefiere las opciones sin aditivos ni conservantes.",
            info3: "3. Bajo en calorías: Elige las versiones con menos calorías para controlar tu ingesta."
        }
    },
    {
        id: 7, nombre: "Sponch: Galletas esponjosas con crema y chocolate, una opción ligera y sabrosa para disfrutar en cualquier momento.", imagen: "/img/imgalleta/sponch.jpg",im: "/img/imgalleta/galletadesponch.png", direccion: "/galleta", infoTabla: "/img/imgalleta/sponchtabla.jpg", recomendacion: {
            info1: "1. Consúmelas con moderación: Como contienen azúcar y carbohidratos simples, es mejor disfrutarlas ocasionalmente, no como un snack diario.",
            info2: "2. Acompáñalas con algo más nutritivo: Puedes combinarlas con una fuente de proteínas o fibra, como un puñado de frutos secos o un poco de yogur, para balancear la merienda.",
            info3: "3. Alternativas más saludables: Si buscas una opción más nutritiva, opta por galletas integrales o de avena, que tienen más fibra y menos azúcar."
        }
    },
    {
        id: 8, nombre: "Chokis: Galletas crujientes con un delicioso sabor a chocolate, ideales para un snack rápido.  ", imagen: "/img/imgalleta/chokis.jpg",im: "/img/imgalleta/galletadechokis.png", direccion: "/galleta", infoTabla: "/img/imgalleta/tablachokis.png", recomendacion: {
            info1: "1. Consúmelas con moderación: Debido a su contenido de azúcar y grasas, es mejor disfrutarlas ocasionalmente, no como un snack diario.",
            info2: "2. Acompáñalas con algo más nutritivo: Combínalas con alimentos ricos en fibra o proteínas, como fruta fresca o un puñado de frutos secos, para hacer tu merienda más equilibrada.",
            info3: "3. Alternativas más saludables: Si buscas algo similar pero más nutritivo, prueba hacer tus propias galletas con avena y chocolate oscuro."
        }
    },
    {
        id: 9, nombre: "Emperador Chocolate: Galletas rellenas de chocolate cremoso entre dos capas de galleta suave, perfectas para los amantes del dulce.", imagen: "/img/imgalleta/empe.png",im: "/img/imgalleta/galletadeempe.png", direccion: "/galleta", infoTabla: "/img/imgalleta/emperadortabla.png", recomendacion: {
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
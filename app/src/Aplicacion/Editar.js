import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function Editar() {

    const { id } = useParams()
    const [nombre, setNombre] = useState('')
    const [imagen, setImagen] = useState('')

    useEffect(() => {
        const obtener = async () => {
            try {
                const response = await axios.get(`/proyectos/${id}`)
                const produc = response.data
                setNombre(produc.nombre)
                setImagen(produc.imagen)
            } catch (error) {
                console.error('Estas ey wey', error);

            }
        }
        if (id) {
            obtener()
        }
    }, [id])

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const nuevoProducto = {
                nombre: nombre,
                imagen: imagen
            }
            await axios.post('/proyectos', nuevoProducto)
        } catch (error) {
            console.error('Estas bien wey bro', error);
        }
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="imagen">Imagen:</label>
                    <input
                        type="text"
                        id="imagen"
                        value={imagen}
                        onChange={(e) => setImagen(e.target.value)}
                    />
                </div>
                {/* ... otros campos del formulario */}
                <button type="submit">Agregar Producto</button>
            </form>
        </div>
    )
}

export default Editar
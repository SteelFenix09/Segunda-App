import React, { useState } from 'react'
import axios from 'axios'


function Editar() {
    const [nombre, setNombre] = useState('')
    const [imagen, setImagen] = useState('')

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

    return (
        <div>Editar</div>
    )
}

export default Editar
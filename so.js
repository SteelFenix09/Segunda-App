import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Editar() {
    const [id, setID] = useState('')
    const [nombre, setNombre] = useState('')
    const [imagen, setImagen] = useState('')
    const [im, setIm] = useState('')
    const [direccion, setDireccion] = useState('')
    const [infoTabla, setInfotabla] = useState('')
    const [recomendacion, setRecomendacion] = useState({
        info1: '',
        info2: '',
        info3: ''
    })

    const [editando, setEditando] = useState(false)
    const [proEditar, setProeditar] = useState(null)
    const [proyectos, setProyectos] = useState([])

    const agrega = async () => {
        try {
            const respuesta = await axios.post('/proyectos', {
                id: parseInt(id, 10),
                nombre,
                imagen,
                im,
                direccion,
                infoTabla,
                recomendacion
            })

            console.log('Se agrego bien', respuesta.data);
            setID('');
            setNombre('');
            setImagen('');
            setIm('');
            setDireccion('');
            setInfotabla('');
            setRecomendacion({ info1: '', info2: '', info3: '' })
        } catch (error) {
            console.error('Ya wey pi pi pi', error);

        }
    }

    const obtener = async () => {
        try {
            const respuesta = await axios.get('/proyectos')
            setProyectos(respuesta.data)
        } catch (error) {
            console.error('No se puede y ya no quiero', error);
        }
    }

    const editar = async (proye) => {
        setEditando(true)
        setProeditar(proye)
    }

    const guardarCambio = async () => {
        try {
            await axios.put(`/proyectos/${proEditar.id}`, {
                id: proEditar.id,
                nombre: proEditar.nombre,
                imagen: proEditar.imagen,
                im: proEditar.im,
                direccion: proEditar.direccion,
                infoTabla: proEditar.infoTabla,
                recomendacion: proEditar.recomendacion
            })
            console.log('Se actualizo ', proEditar);
            setEditando(false)
            setProeditar(null)
            obtener()
        } catch (error) {
            console.error('No se que hacer ', error);

        }
    }

    const cancelaEditar = () => {
        setEditando(false)
        setProeditar(null)
    }

    useEffect(() => {
        obtener()
    }, [])

    return (
        <div>
            <h1>Agregar Proyecto</h1>
            <form onSubmit={(e) => { e.preventDefault(); agrega(); }}> {/* Prevenir el envío por defecto del formulario */}
                <div>
                    <label htmlFor="id">ID:</label>
                    <input
                        type="text"
                        id="id"
                        value={id}
                        onChange={(e) => setID(e.target.value)}
                    />
                </div>
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

                <div>
                    <label htmlFor="im">Diseño de la tabla:</label>
                    <input
                        type="text"
                        id="im"
                        value={im}
                        onChange={(e) => setIm(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="infoTabla">Info Tabla:</label>
                    <input
                        type="text"
                        id="infoTabla"
                        value={infoTabla}
                        onChange={(e) => setIm(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="info1">Recomendación 1:</label>
                    <input
                        type="text"
                        id="info1"
                        value={recomendacion.info1}
                        onChange={(e) =>
                            setRecomendacion({ ...recomendacion, info1: e.target.value })
                        }
                    />
                </div>

                <div>
                    <label htmlFor="info2">Recomendación 2:</label>
                    <input
                        type="text"
                        id="info2"
                        value={recomendacion.info2}
                        onChange={(e) =>
                            setRecomendacion({ ...recomendacion, info2: e.target.value })
                        }
                    />
                </div>

                <div>
                    <label htmlFor="info3">Recomendación 3:</label>
                    <input
                        type="text"
                        id="info3"
                        value={recomendacion.info3}
                        onChange={(e) =>
                            setRecomendacion({ ...recomendacion, info3: e.target.value })
                        }
                    />
                </div>

                <button type="submit">Agregar Proyecto</button>
            </form>

            <h2>Proyectos:</h2>
            <ul>
                {proyectos.map((proyecto) => (
                    <li key={proyecto.id}>
                        <h3>{proyecto.nombre}</h3>
                        <button onClick={() => editar(proyecto)} > Editar</button>
                        {/* ... mostrar otros datos del proyecto ... */}
                    </li>
                ))}
            </ul>
            {editando && proEditar && ( // Mostrar formulario de edición
                <form onSubmit={(e) => { e.preventDefault(); guardarCambio(); }}>
                    <div>
                        <label htmlFor="id">ID:</label>
                        <input type="text" id="id" value={proEditar.id} onChange={(e) => setProeditar({ ...proEditar, id: e.target.value })} />
                    </div>

                    <div>
                        <label htmlFor="nombre">Nombre: </label>
                        <input type='text' id="nombre" value={proEditar.nombre} onChange={(e) => setProeditar({ ...proEditar, nombre: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="nombre">Nombre: </label>
                        <input type='text' id="nombre" value={proEditar.nombre} onChange={(e) => setProeditar({ ...proEditar, nombre: e.target.value })} />
                    </div>

                    <button type="submit">Guardar Cambios</button>
                    <button type="button" onClick={cancelaEditar}>Cancelar</button>
                </form>)}
        </div>
    )
}

export default Editar
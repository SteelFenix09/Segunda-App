import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../Galletas/Productos.css'

function Refrescos() {

    const [sobres, setSobres] = useState([])

    useEffect(() => {
        const obtenerRefresco = async () => {
            try {
                const responde = await axios.get('/proyectos');
                setSobres(responde.data)
            } catch (error) {
                console.error('Error al obtener datos', error);

            }
        }
        obtenerRefresco()
    }, [])

    const refresco = sobres.filter(pro => pro.id >= 4 && pro.id <= 6)

    return (
        <div className='Products1'>
            <table>
                <tbody>
                    <tr >
                        {refresco.map((pro, index) => (
                            <td key={pro.id} > <img src={pro.imagen} alt={pro.nombre} ></img> </td>
                        ))}
                    </tr>
                    <tr>
                        {refresco.map((pro, index) => (
                            <td key={pro.id}> {pro.nombre} </td>
                        ))}
                    </tr>
                    <tr>
                        {refresco.map((pro, index) => (
                            <td key={pro.id}  > <Link to={`/producto/${pro.id}`} >¡Mas...!</Link> </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Refrescos
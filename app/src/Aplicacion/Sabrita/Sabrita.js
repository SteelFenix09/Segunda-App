import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../Galletas/Productos.css'

function Sabrita() {

    const [cacha, setProyectos] = useState([])

    useEffect(() => {
        const obtenerSabrita = async () => {
            try {
                const responde = await axios.get('/proyectos');
                setProyectos(responde.data);
            } catch (error) {
                console.error('Error al obtener datos', error);

            } 
        }
        obtenerSabrita();
    }, [])

    const proyectos = cacha.filter(pro => pro.id <= 3)


    return (
        <div className='Products2'>
            <table>
                <tbody>
                    <tr>
                        {proyectos.map((pro, index)=>(
                            <td key={pro.id}> <img src={pro.imagen} alt={pro.nombre} ></img> </td>
                        ))}
                    </tr>
                    <tr> {/* Nombre */}
                        {proyectos.map((pro, index)=>(
                            <td key={pro.id}> {pro.nombre} </td>
                        ))}
                    </tr>
                    <tr > 
                        {proyectos.map((pro, index)=>(
                            <td key={pro.id}  > < Link to={`/producto/${pro.id}`} className='Products3'>¡Mas...!</Link> </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Sabrita
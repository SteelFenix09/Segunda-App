import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Sabrita() {

    const [proyectos, setProyectos] = useState([])

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

    return (
        <div>
            <table>

                <tbody>

                    <tr>
                        {proyectos.map((pro, index)=>(
                            <td key={pro.id}> <img src={pro.imagen} alt={pro.nombre} ></img> </td>
                        ))}
                    </tr>
                    <tr>
                        {proyectos.map((pro, index)=>(
                            <td key={pro.id}> {pro.nombre} </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Sabrita
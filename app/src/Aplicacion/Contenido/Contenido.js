import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Contenido() {
    const { id } = useParams();

    const [proyectos, setProyectos] = useState({}); // Inicializa como objeto vacío

    useEffect(() => {
        const obtenerSabrita = async () => {
            try {
                const responde = await axios.get(`/proyectos/${id}`);
                setProyectos(responde.data);
            } catch (error) {
                console.error('Error al obtener datos', error);
            }
        }
        obtenerSabrita();
    }, [id]);

    return (
        <div>
            <table>
                <tr>Tabla y recomendaciones</tr>
                <tbody>
                    <tr>
                        <td rowSpan={22}>
                            <img src={proyectos.imagen} alt={proyectos.nombre} /> {/* Accede a la propiedad imagen */}
                        </td>
                        <td colSpan={3}>informacion Nutricional</td>
                        <td colSpan={7}> <Link to="/sabrita">Regresar</Link> </td>
                    </tr>
                    <tr>
                        <td>{proyectos.infoTabla}</td> 
                    </tr>
                    
                    <tr>
                        <td>Recomendaciones</td>
                    </tr>
                    
                    {proyectos && proyectos.recomendacion && (
                        <>
                            <tr>
                                <td>{proyectos.recomendacion.info1}</td>
                            </tr>
                            <tr>
                                <td>{proyectos.recomendacion.info2}</td>
                            </tr>
                            <tr>
                                <td>{proyectos.recomendacion.info3}</td>
                            </tr>
                        </>
                    )}
                    <tr>
                        <td> {proyectos.nombre} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Contenido;
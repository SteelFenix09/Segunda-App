import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import './contenido.css'

function Contenido() {
    const { id } = useParams();

    const [proyectos, setProyectos] = useState({}); // Inicializa como objeto vacío

    useEffect(() => {
        const obtenerSabrita = async () => {
            try {
                const responde = await axios.get(`/proyecto/${id}`);
                setProyectos(responde.data);
            } catch (error) {
                console.error('Error al obtener datos', error);
            }
        }
        obtenerSabrita();
    }, [id]);

    return (
        <div className='Tabla1'>
            <table>
                <tr className='Tabla'><strong>Tabla y recomendaciones</strong> </tr>
                <tbody>
                    <tr className='ConTabla'>
                        <td></td>
                        <td><h3><strong>Tabla Nutricional</strong></h3></td>
                    </tr>
                    <tr className='img'>
                        <td rowSpan={4}> <img src={proyectos.im} alt={proyectos.nombre} ></img> </td>
                        <td rowSpan={4}> <img src={proyectos.infoTabla} id='cosas' ></img> </td>
                        <td><h3><strong> Recomendaciones: </strong></h3></td>
                    </tr>
                    <tr>
                        {proyectos && proyectos.recomendacion && (
                            <td> {proyectos.recomendacion.info1} </td>
                        )}
                    </tr>
                    <tr>
                        {proyectos && proyectos.recomendacion && (
                            <td> {proyectos.recomendacion.info2} </td>
                        )}
                    </tr>
                    <tr> 
                        {proyectos && proyectos.recomendacion && (
                        <td> {proyectos.recomendacion.info3} </td>
                    )} </tr>
                    <tr> {proyectos.nombre} </tr>
                    <tr>
                    <td> <Link to={proyectos.direccion} > Regresar </Link> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Contenido;
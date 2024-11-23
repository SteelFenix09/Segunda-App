import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Contenido() {

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
                <tr>Tabla y recomendaciones</tr>
                <tbody>
                    <tr>
                        {proyectos.map((pro, index) => (
                            <td key={pro.id} rowSpan={22} > <img src={pro.imagen} alt={pro.nombre} ></img> </td>
                        ))}
                        <td colSpan={3}>informacion Nutricional</td>
                        <td colSpan={7}> <Link to="/sabrita">Segresar</Link> </td>
                    </tr>
                    <tr>
                        <td colSpan={3}>Tamaño de la porcion</td>
                    </tr>
                    <tr>
                        <td colSpan={3}>Porcion por paquete</td>
                    </tr>
                    <tr>
                        <td>Grasa total</td>
                        <td>0% </td>
                    </tr>
                    <tr>
                        <td>Grasa trans</td>
                        <td>0% </td>
                    </tr>
                    <tr>
                        <td>Grasa saturadas</td>
                        <td>0% </td>
                        <td>Recomendaciones</td>
                    </tr>
                    <tr></tr>
                    <tr>
                        <td>Carboidratos</td>
                        <td>0% </td>
                        <td id='rocem'>Es fácil dejarse llevar por el sabor, pero intenta controlar las porciones para evitar
                            un consumo excesivo de grasas y sodio.</td>
                    </tr>
                    <tr>
                        <td>Fibra Diatetica</td>
                        <td>0% </td>
                    </tr>
                    <tr>
                        <td>Azucares</td>
                        <td>0% </td>
                        <td id='rocem'>Inclúyelas en una dieta variada y equilibrada, combinándolas con frutas, verduras y proteínas.</td>
                    </tr>
                    <tr></tr>
                    <tr>
                        <td>Sodio</td>
                        <td>0% </td>
                    </tr>
                    <tr></tr>
                    <tr>
                        <td>Sodio</td>
                        <td>0% </td>
                        <td id='rocem'>Antes de consumirlas, revisa la información nutricional para conocer el contenido de calorías,
                            grasas, sodio y otros nutrientes.</td>
                    </tr>
                    <tr></tr>
                    <tr>
                        <td>Potacio</td>
                        <td>0% </td>
                    </tr>
                    <tr>
                        <td>Calcio</td>
                        <td>0% </td>
                    </tr>
                    <tr></tr>
                    <tr>
                        <td>Hierro</td>
                        <td>0% </td>
                    </tr>
                    <tr></tr>
                    <tr>
                        <td>Proteinas</td>
                        <td>0% </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Contenido
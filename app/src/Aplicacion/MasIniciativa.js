import React from 'react'
import { Link } from 'react-router-dom'
import'./Iniciativa.css'

function MasIniciativa() {
    return (
        <div>
            <h1 className='tit-inici'>¡Objetivos y Indicaciones! </h1>
            <table className='text1'>
                <thead>
                    <tr>
                        <th><h3>Objetivos</h3><hr></hr></th>
                        <th id="espacio"></th>
                        <th><h3>Indicaciones</h3><hr></hr></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>- Facilitar el acceso a información nutricional</td>
                        <th id="espacio"></th>
                        <td>- Límite de consumo de azúcar</td>
                    </tr>

                    <tr>
                        <td>- Personalización según necesidades de salud</td>
                        <th id="espacio"></th>
                        <td>- Alertas sobre grasas saturadas y trans</td>
                    </tr>
                    <tr>
                        <td>- Promover hábitos de alimentación saludable</td>
                        <th id="espacio"></th>
                        <td>- Guía de consumo de sodio</td>
                    </tr>
                    <tr>
                        <td>- Comparación de productos</td>
                        <th id="espacio"></th>
                        <td>- Promoción de alimentos ricos en fibra</td>
                    </tr>
                    <tr>
                        <td>- Informar sobre alérgenos e ingredientes críticos</td>
                        <th id="espacio"></th>
                        <td>- Alerta de calorías vacías</td>
                    </tr>
                    <tr>
                        <td>- Apoyo para objetivos de dieta específicos</td>
                        <th id="espacio"></th>
                        <td>- Alternativas saludables</td>
                    </tr>

                </tbody>
            </table>
            <td colSpan={6}>
                <li >
                    <Link to="/iniciativa">Regresar</Link>
                </li>
                    </td>
        </div>
    )
}

export default MasIniciativa
import React from 'react'
import './../img/Sabritas/Sabrita.css'
import Piz from './../img/Sabritas/Pizee.png'
import { Link } from 'react-router-dom'

function Pizz() {
    return (
        <div>
            <table >
                <tr>Tabla y Recomendaciones</tr>
                <tr>
                    <td rowSpan={22} ><img src={Piz} id='img-piza' ></img></td>
                    <td colSpan={3}>Informacion Nutricional</td>
                    <td colSpan={7}>
                        <li class="buton">
                            <Link class="buton" to="/sabrita">Regresar</Link>
                        </li>
                    </td>
                </tr>
                <tr>
                    <td colSpan={3}>Tamaño de la porcion</td>
                </tr>
                <tr>
                    <td colSpan={3}>Porcion por paquete</td>
                </tr>
                <tr>
                    <td>Calorias</td>
                    <td id='porcion'></td>
                    <td>Calorias de grasa</td>
                </tr>
                <tr>
                    <td>Grasa total</td>
                    <td id='porcion'></td>
                    <td>0% </td>
                </tr>
                <tr>
                    <td>Grasa trans</td>
                    <td id='porcion'></td>
                    <td>0% </td>
                </tr>,
                <tr>
                    <td>Grasa saturadas</td>
                    <td id='porcion'></td>
                    <td>0% </td>
                    <td>Recomendaciones</td>
                </tr>
                <tr></tr>
                <tr>
                    <td>Carboidratos</td>
                    <td id='porcion'></td>
                    <td>0% </td>
                    <td id='rocem'>Es fácil dejarse llevar por el sabor, pero intenta controlar las porciones para evitar
                        un consumo excesivo de grasas y sodio.</td>
                </tr>
                <tr>
                    <td>Fibra Diatetica</td>
                    <td id='porcion'></td>
                    <td>0% </td>
                </tr>
                <tr>
                    <td>Azucares</td>
                    <td id='porcion'></td>
                    <td>0% </td>
                    <td id='rocem'>Inclúyelas en una dieta variada y equilibrada, combinándolas con frutas, verduras y proteínas.</td>
                </tr>
                <tr></tr>
                <tr>
                    <td>Sodio</td>
                    <td id='porcion'></td>
                    <td>0% </td>
                </tr>
                <tr></tr>
                <tr>
                    <td>Sodio</td>
                    <td id='porcion'></td>
                    <td>0% </td>
                    <td id='rocem'>Antes de consumirlas, revisa la información nutricional para conocer el contenido de calorías,
                        grasas, sodio y otros nutrientes.</td>
                </tr>
                <tr></tr>
                <tr>
                    <td>Potacio</td>
                    <td id='porcion'></td>
                    <td>0% </td>
                </tr>
                <tr>
                    <td>Calcio</td>
                    <td id='porcion'></td>
                    <td>0% </td>
                </tr>
                <tr></tr>
                <tr>
                    <td>Hierro</td>
                    <td id='porcion'></td>
                    <td>0% </td>
                </tr>
                <tr></tr>
                <tr>
                    <td>Proteinas</td>
                    <td id='porcion'></td>
                    <td>0% </td>
                </tr>
            </table>
        </div>

    )
}

export default Pizz
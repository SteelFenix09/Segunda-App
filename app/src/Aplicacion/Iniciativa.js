import React from 'react'
import { Link } from 'react-router-dom'
import './Iniciativa.css'
import cos from './Img/Nutri10.png'


function Iniciativa() {
    return (
        <div>
            <table >
                <tr>
                    <td rowSpan={3}><img src={cos} className='manipulacio'></img></td>
                    <td ></td>
                    <td><h3 className='encabezado'> ¡Nuestra iniciativa!</h3></td>
                </tr>
                <td ></td>
                <p className='text-nutri'>Nuestra iniciativa es hacer a la población Mexicana
                    consciente de la importancia de una nutrición adecuada para nuestras salud y bienestar.
                    Por ello, NUTRIONFACTS muestra la cantidad de calorías, grasas, azucares, etc.
                    Que contienen los alimentos empaquetados y así promover hábitos alimenticios saludables y
                    equilibrados en nuestra dieta diaria.</p>
                <tr>
                    <td></td>

                    <li class="buton">
                        <Link  to="/mas">¡Leer mas...!</Link>
                    </li>
                </tr>
                <tr>
          </tr>
            </table>
        </div>
    )
}

export default Iniciativa
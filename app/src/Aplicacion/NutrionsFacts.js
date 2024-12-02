import React, { useState } from 'react'
import './Iniciativa.css'
import coa from './Img/Nutri13.jpg'
import nutrion1 from './Img/Refrescos.png'
import nutrion3 from './Img/Sabrita.png'
import nutrion2 from './Img/galletas.png'

function NutrionsFacts() {
    return (
        <div className='textNut'>
            <table className="table-striped" >
            <tr>
                    <td className='Tit'> ¿ Que somos ? </td>
            </tr>
            
            <p id='pez-gordo' className='TextNutrion'>
                Nutrionfact es tu asistente personal para la nutrición. Consulta rápidamente tablas nutricionales de alimentos y productos, compara opciones y toma decisiones saludables. La aplicación te permite:

                Escanear códigos de barras para obtener información nutricional detallada.
                Buscar alimentos por nombre o categoría.
                Personalizar preferencias para destacar alérgenos, macronutrientes o calorías.
                Guardar tus alimentos favoritos y crear listas de compras saludables.
                Visualizar gráficos de consumo según tus objetivos nutricionales.
            </p >
        </table>
        <table className="table-striped" >
        <td rowSpan={22} className='Nutrion'><img src={nutrion1} id='img-Nution' ></img></td>
        <td rowSpan={22} className='Nutrion'><img src={nutrion3} id='img-Nutrion' ></img></td>
        <td rowSpan={20} className='Nutrion'><img src={nutrion2} id='img-Nutrion' ></img></td>
        <td></td>
        </table>
        </div >
    )
}

export default NutrionsFacts
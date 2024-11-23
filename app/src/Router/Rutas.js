import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sabrita from '../Aplicacion/Sabrita/Sabrita'
import Menu from '../Aplicacion/Menu'
import Lista from '../Aplicacion/Lista'
import Contenido from '../Aplicacion/Contenido/Contenido'

function Rutas() {
    return (
        <div>
            <Menu/>
            <Routes>
                <Route path='/sabrita' element={< Sabrita/>} />
                <Route path='/lista' element={<Lista/>}/>
                <Route path='/direccion' element={<Contenido/>}/>
            </Routes>
        </div>
    )
}

export default Rutas
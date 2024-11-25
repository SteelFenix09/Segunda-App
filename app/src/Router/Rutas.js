import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sabrita from '../Aplicacion/Sabrita/Sabrita'
import Menu from '../Aplicacion/Menu'
import Lista from '../Aplicacion/Lista'
import Contenido from '../Aplicacion/Contenido/Contenido'
import Refrescos from '../Aplicacion/Refrescos/Refrescos'
import Galletas from '../Aplicacion/Galletas/Galletas'
import Editar from '../Aplicacion/Editar'

function Rutas() {
    return (
        <div>
            <Menu/>
            <Routes>
                <Route path='/sabrita' element={< Sabrita/>} />
                <Route path='/lista' element={<Lista/>}/>
                <Route path='/producto/:id' element={<Contenido/>}/>
                <Route path='/bebidas' element={<Refrescos/>}/>
                <Route path='/galleta' element={<Galletas/>}/>
                <Route path='/editar' element={<Editar/>}/>
            </Routes>
        </div>
    )
}

export default Rutas
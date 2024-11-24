import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Lista() {
    const [productos, setProyectos] = useState([])
    const [searchPar] = useSearchParams()
    const searchText = searchPar.get('search') || ''

    useEffect(() => {
        const obtener = async () => {
            try {
                const respone = await axios.get('/proyectos');
                setProyectos(respone.data)
            } catch (error) {
                console.error('Error no se endone', error);

            }
        };
        obtener()
    }, [])

    const elFiltro = searchText ? productos.filter(pro => pro.nombre.toLowerCase().includes(searchText.toLowerCase())) : productos

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        {elFiltro.map((pro) => (
                            <td key={pro.id}> <img src={pro.imagen}></img> </td>
                        ))}
                    </tr>
                    <tr>
                        {elFiltro.map((pro) => (
                            <td key={pro.id}> {pro.nombre} </td>
                        ))}
                    </tr>
                    <tr>
                        {elFiltro.map((pro, index)=>(
                            <td key={pro.id}  > <Link to={`/producto/${pro.id}`} > Mas informacion </Link> </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Lista
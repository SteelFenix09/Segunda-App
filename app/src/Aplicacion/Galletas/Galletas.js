import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Galletas() {

  const [delicioso, setDelicioso] = useState([])

  useEffect(() => {
    const obtenerGalleta = async () => {
      try {
        const responde = await axios.get('/proyectos');
        setDelicioso(responde.data)
      } catch (error) {
        console.error('Estas bien wey', error);

      }
    }
    obtenerGalleta()
  }, [])

  const galleta = delicioso.filter(pro => pro.id >= 7)

  return (
    <div>
      <table>
        <tbody>
          <tr>
            {galleta.map((pro, index) => (
              <td key={pro.id}> <img src={pro.imagen} alt={pro.nombre} ></img> </td>
            ))}
          </tr>
          <tr>
            {galleta.map((pro, index) => (
              <td key={pro.id}> {pro.nombre} </td>
            ))}
          </tr>
          <tr>
            {galleta.map((pro, index) => (
              <td key={pro.id}  > <Link to={`/producto/${pro.id}`} > Mas informacion </Link> </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Galletas
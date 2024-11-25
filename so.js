<tr>Tabla y recomendaciones</tr>
                <tbody>
                    <tr>
                        <td></td>
                        <td >informacion Nutricional</td>
                        <td > <Link to="/sabrita">Regresar</Link> </td>
                    </tr>
                    <tr>
                        <td >
                            <img src={proyectos.imagen} alt={proyectos.nombre} /> {/* Accede a la propiedad imagen */}
                        </td>
                        <td> <img src={proyectos.infoTabla}></img> </td>
                        <td>Recomendaciones</td>
                        <td>Hola</td>
                    </tr>

                    <tr>
                        <td colSpan={2}> Que onda bro </td>
                        <td> {proyectos.info1} </td>
                    </tr>
                    <tr>
                        <td> {proyectos.nombre} </td>
                    </tr>
                </tbody>
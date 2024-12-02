import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div>{/* Pie de página */}
    { <footer className='Footer'>
        <div className="container">
            <p className="mb-0">© 2024 NutritionFacts. Todos los derechos reservados.</p>
            <p className="mb-0">
                <Link className="text-decoration-none" to="/privacy">Política de Privacidad</Link> | 
                <Link className="text-decoration-none" to="/terms">Términos y Condiciones</Link>
            </p>
        </div>
    </footer>}
    </div>
  )
}

export default Footer
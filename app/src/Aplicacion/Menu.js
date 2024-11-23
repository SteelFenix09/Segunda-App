import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Menu() {

    const [searchText, setSearchText] = useState('')
    const navigate = useNavigate()

    const Buscar = (e) => {
        e.preventDefault();
        navigate(`/lista?search=${searchText}`)
    }

    return (
        <div >
            {/* Menú de navegación */}
            <nav className='navbar'>
                <div className="container-fluid">
                    <a className="navbar-brand menu" href=""></a>
                    <Link className='navbar-brand' to="/Nosotros"><h1><strong>NUTRIONFACT </strong></h1></Link>
                    <form class="d-flex ms-auto" role="search" onSubmit={Buscar} >
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                        <button class="btn btn-outline-success" type="submit"    >Search</button>
                    </form>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='navbar-collapse' id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" to="/iniciativa"><h5>Iniciativa</h5></Link>
                            </li>
                            <li className="nav-item_dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <h5>Snacks</h5>
                                </a>
                                <ul className="dropdown-menu">
                                    <ul className="dropdown-menu d-flex flex-row">
                                        <li>
                                            <Link className="dropdown-item text-center" to="/opciones-saludables">
                                                <strong>Opciones Saludables</strong>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item text-center" to="/sabrita">
                                                <strong>Sabritas</strong>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item text-center" to="/bebidas">
                                                <strong>Bebidas</strong>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item text-center" to="/galleta">
                                                <strong>Galletas</strong>
                                            </Link>
                                        </li>
                                    </ul>

                                </ul>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu
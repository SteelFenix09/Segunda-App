import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Menu() {

    const[searchText, setSearchText] = useState('')
    const navigate = useNavigate()

    const Buscar = (e) =>{
        e.preventDefault();
        navigate(`/lista?search=${searchText}`)
    } 

    return (
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href=""></a>
                <Link class="navbar-brand" to="/achas"><strong>NUTRIONFACTS</strong></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" to="/iniciativa">Iniciativa</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/spcinessaludables">Opcines Saludables</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Snacks
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to="/sabrita">Sabritas</Link></li>
                                <li><Link class="dropdown-item" to="/bebidas">Bebidas</Link></li>
                                <li><Link class="dropdown-item" to="/galleta">Galletas</Link></li>
                            </ul>
                        </li>

                    </ul>
                    <form class="d-flex" role="search" onSubmit={Buscar} >
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                        <button class="btn btn-outline-success" type="submit"  >Search</button>
                    </form>
                </div>
            </div>
        </nav>x
    </div>
    )
}

export default Menu
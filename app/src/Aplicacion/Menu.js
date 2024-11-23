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
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/sabrita">Sabritas</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/calificaciones">Calificaciones</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search"  onSubmit={Buscar} >
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value={searchText} onChange={(e)=>setSearchText(e.target.value)}  />
                            <button class="btn btn-outline-success" type="submit"    >Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu
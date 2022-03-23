import React from "react"
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="nav-item" to="/">Home</Link>

                    <button className="navbar-toggler"
                        type="button" data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Alterna navegação">
                        <div className="menuToggler">
                            <div className="um"></div>
                            <div className="dois"></div>
                            <div className="tres"></div>
                        </div>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/TransCadastro" className="nav-link">TransCadastro</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/EmpresaCadastro" className="nav-link">Empresas Transfriendly</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/CursoCadastro" className="nav-link">Cursos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/EmpregoCadastro" className="nav-link">Vagas</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CursoService from '../../services/CursoService'

export default function Index() {

    const [cursos, setCursos] = useState([]);

    const getAllCursos = () => {
        CursoService.getAllCursos().then((response) => {
            setCursos(response.data);
        })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getAllCursos();
    }, []);

    const deleteCurso = (id) => {
        CursoService.deleteCurso(id).then((response) => {
            getAllCursos();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <header className="header">
                <h1 className="container py-4 text-center">Cadastro de cursos</h1>
            </header>
            <div className="container py-3">
                <Link
                    to="/Curso-Create"
                    className="btn btn-primary mb-4">
                    Cadastrar Curso
                </Link>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Site</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cursos.map((curso) => (
                                <tr key={curso.id}>
                                    <td>{curso.id}</td>
                                    <td>{curso.nome}</td>
                                    <td>{curso.descricao}</td>
                                    <td>{curso.link}</td>
                                    <td className="d-flex">
                                        <Link to={`/Curso-Update/${curso.id}`}
                                            className="btn btn-info"
                                        >
                                            Editar</Link>
                                        <button className="btn btn-danger"
                                            onClick={() => deleteCurso(curso.id)}
                                            style={{ marginLeft: "10px" }}
                                        >
                                            Deletar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import EmpregoService from '../../services/EmpregoService'

export default function Index() {
    const [empregos, setEmpregos] = useState([]);

    const getAllEmpregos = () => {
        EmpregoService.getAllEmpregos().then((response) => {
            setEmpregos(response.data);
        })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getAllEmpregos();
    }, []);
    console.log(empregos)

    const deleteEmprego = (id) => {
        EmpregoService.deleteEmprego(id).then((response) => {
            getAllEmpregos();
        })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <header className="header">
                <h1 className="container py-4 text-center">Cadastro de vagas</h1>
            </header>
            <div className="container py-3">
                <Link to="/Emprego-Create" className="btn btn-primary mb-4"
                >
                    Cadastrar vaga
                </Link>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Cargo</th>
                            <th>Site</th>
                            <th>Empresa</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empregos.map((emprego) => (
                            <tr key={emprego.id}>
                                <td>{emprego.id}</td>
                                <td>{emprego.cargo}</td>
                                <td>{emprego.link}</td>
                                <td>{emprego.empresa.nome}</td>
                                <td className="d-flex">
                                    <Link to={`/Emprego-Update/${emprego.id}`}
                                        className="btn btn-info"
                                    >
                                        Editar
                                    </Link>
                                    <button className="btn btn-danger"
                                        onClick={() => deleteEmprego(emprego.id)}
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
        </>
    )
}
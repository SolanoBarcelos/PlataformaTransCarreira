import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TransService from '../../services/TransService'

export default function Index() {
    const [trans, setTrans] = useState([]);

    const getAllTrans = () => {
        TransService.getAllTrans().then((response) => {
            setTrans(response.data)
        })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getAllTrans();
    }, []);

    const deleteTrans = (id) => {
        TransService.deleteTrans(id).then((response) => {
            getAllTrans();
        })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <header className="header">
                <h1 className="container py-4 text-center">Cadastro de pessoas</h1>
            </header>
            <div className="container py-3">
                <Link to="/Trans-Create" className="btn btn-primary mb-4">
                    Cadastrar pessoas
                </Link>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Curso</th>
                                <th>Vagas</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trans.map((trans) => (
                                <tr key={trans.id}>
                                    <td>{trans.id}</td>
                                    <td>{trans.nome}</td>
                                    <td>{trans.email}</td>
                                    <td>{trans.telefone}</td>
                                    <td>{trans.curso.nome}</td>
                                    <td>{trans.emprego.cargo}</td>
                                    <td className="d-flex">
                                        <Link
                                            to={`/Trans-Update/${trans.id}`}
                                            className="btn btn-info"
                                        >
                                            Editar
                                        </Link>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteTrans(trans.id)}
                                            style={{ marginLeft: "10px" }}
                                        >
                                            Deletar</button>
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
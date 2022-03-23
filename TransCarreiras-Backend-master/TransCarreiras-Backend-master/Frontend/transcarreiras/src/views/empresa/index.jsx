import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import EmpresaService from '../../services/EmpresaService'


export default function Index() {
    const [empresa, setEmpresa] = useState([]);

    const getAllEmpresas = () => {
        EmpresaService.getAllEmpresas().then((response) => {
            setEmpresa(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }


useEffect(() => {
  getAllEmpresas();

}, []);

const deleteEmpresa = (empresaId) => {
    EmpresaService.deleteEmpresa(empresaId)
    .then((response) => {
        getAllEmpresas();
    })
    .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
            alert("Erro na API");
        }
    })
}

return ( 
    <>
        <header className="header">
            <h1 className="container py-4 text-center">Cadastro de empresas transfriendly</h1>
        </header>
        <div className="container py-3">
            <Link to="/Empresa-Create" className="btn btn-primary mb-4">Cadastrar empresa</Link>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Descrição</th>
                            <th>Site</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                            {empresa.map((empresa) => (
                        <tr key={empresa.id}>
                            <td>{empresa.id}</td>
                            <td>{empresa.nome}</td>
                            <td>{empresa.endereco}</td>
                            <td>{empresa.descricao}</td>
                            <td>{empresa.link}</td>
                            <td>
                                <Link 
                                to={`/Empresa-Update/${empresa.id}`}
                                className="btn btn-info"
                                >Editar</Link>
                            <button
                            className="btn btn-danger"
                            onClick={() => deleteEmpresa(empresa.id)}
                            style={{ marginLeft: "10px" }}
                            >Deletar</button>
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



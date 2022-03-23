import React, { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from 'react-router-dom'
import EmpresaService from "../../services/EmpresaService"


export default function Create() {

    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [descricao, setDescricao] = useState("");
    const [link, setLink] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const criarOuEditarEmpresa = (e) => {
        e.preventDefault();

        const empresa = {nome, endereco, descricao, link};
        
        if (id) {
            EmpresaService.updateEmpresa(id, empresa)
            .then((response) => {
                navigate("/EmpresaCadastro");
            })
        } else {
            EmpresaService.createEmpresa(empresa)
            .then((response) => {
                navigate("/EmpresaCadastro")
            })
        }
    }

    useEffect(() => {
        function getEmpresaById() {
            if(id) {
                EmpresaService.getEmpresaById(id)
                .then((response) => {
                    setNome(response.data.nome);
                    setEndereco(response.data.endereco);
                    setDescricao(response.data.descricao);
                    setLink(response.data.link);
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        }
        getEmpresaById()
    }, [id]);

    return (

        <div className="container py-3">
            <form>
                <fieldset>
                    <legend>
                        <h2 className="text-center">{id ? "Editar Empresa" : "Cadastrar Empresa"}</h2>
                    </legend>
                    <div className="mb-3">
                        <label htmlFor="Nome" className="form-label">Nome</label>
                        <input type="text"
                        id="Nome"
                        className="form-control"
                        placeholder="Nome da empresa"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Endereco" className="form-label">Endereço</label>
                        <input type="text" 
                        id="Endereco"
                        className="form-control"
                        placeholder="Endereço"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Descricao" className="form-label">Descrição</label>
                        <input type="text"
                        id="Descricao"
                        className="form-control"
                        placeholder="Descrição da empresa"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Link" className="form-label">Site</label>
                        <input type="text"
                        id="Link"
                        className="form-control"
                        placeholder="Site da empresa"
                        value={link}
                        onChange={(e) => setLink(e.target.value)} />
                    </div>
                    <button type="submit"
                    className="btn btn-primary"
                    onClick={(e) => criarOuEditarEmpresa(e)}
                    >Enviar</button>                   
                    <Link to="/EmpresaCadastro"
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                    >Cancelar</Link>
                </fieldset>
            </form>

        </div>
    )
}
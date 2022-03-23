import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CursoService from '../../services/CursoService'

export default function Create() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [link, setLink] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const criarOuEditarCurso = (e) => {
        e.preventDefault();

        const curso = { nome, descricao, link };

        if (id) {
            CursoService.updateCurso(id, curso).then((response) => {
                navigate("/CursoCadastro");
            })
        } else {
            CursoService.createCurso(curso).then((response) => {
                navigate("/CursoCadastro");
            })
        }
    }

    useEffect(() => {
        function getCursoById() {
            if (id) {
                CursoService.getCursoById(id).then((response) => {
                    setNome(response.data.nome);
                    setDescricao(response.data.descricao);
                    setLink(response.data.link);
                })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }
        getCursoById()
    }, [id]);

    return (
        <div className="container py-3">
            <form>
                <fieldset>
                    <legend>
                        <h2 className="text-center">{id ? "Editar curso" : "Cadastrar curso"}</h2>
                    </legend>
                    <div className="mb-3">
                        <label htmlFor="Nome" className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Nome"
                            placeholder="Nome do curso"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Descricao" className="form-label">Descrição</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Descricao"
                            placeholder="Descrição do curso"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="link" className="form-label">Site</label>
                        <input
                            type="text"
                            className="form-control"
                            id="link"
                            placeholder="Site do curso"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => criarOuEditarCurso(e)}
                    >
                        Enviar
                    </button>
                    <Link
                        to="/CursoCadastro"
                        className="btn btn-danger"
                        style={{ marginLeft: "10px" }}
                    >
                        Cancelar
                    </Link>
                </fieldset>
            </form>
        </div>
    )
}
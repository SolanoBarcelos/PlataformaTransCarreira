import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import TransService from '../../services/TransService'
import CursoService from '../../services/CursoService'
import EmpregoService from '../../services/EmpregoService'

export default function Create() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [curso, setCurso] = useState({ id: "", nome: "" });
    const [emprego, setEmprego] = useState({ id: "", cargo: "" });
    const [cursos, setCursos] = useState([]);
    const [empregos, setEmpregos] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

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

    const criarOuEditarTrans = (e) => {
        e.preventDefault();

        const trans = { nome, email, telefone, curso, emprego };
        console.log(trans);

        if (id) {
            TransService.updateTrans(id, trans).then((response) => {
                navigate("/TransCadastro");
            });
        } else {
            TransService.createTrans(trans).then((response) => {
                navigate("/TransCadastro");
            });
        }
    }

    useEffect(() => {
        function getTransById() {
            if (id) {
                TransService.getTransById(id).then((response) => {
                    setNome(response.data.nome);
                    setEmail(response.data.email);
                    setTelefone(response.data.telefone);
                    setCurso({
                        id: response.data.curso.id,
                        nome: response.data.curso.nome,
                    });
                    setEmprego({
                        id: response.data.emprego.id,
                        cargo: response.data.emprego.cargo,
                    });
                })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
        getTransById();
    }, [id]);

    return (
        <div className="container py-3">
            <form>
                <fieldset>
                    <legend>
                        <h2 className="text-center">
                            {id ? "Editar pessoas" : "Cadastrar pessoas"}
                        </h2>
                    </legend>
                    <div className="form-group mb-3">
                        <label htmlFor="Nome" className="form-label">Nome completo</label>
                        <input
                            type="text"
                            id="Nome"
                            className="form-control"
                            placeholder="Digite seu nome completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="Email"
                            className="form-control"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="Telefone" className="form-label">Telefone</label>
                        <input
                            type="tel"
                            id="Telefone"
                            maxLength="14px"
                            className="form-control"
                            placeholder="Digite seu telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="Curso" className="form-label">Curso</label>
                        <select
                            name="Curso"
                            id="Curso"
                            className="form-select"
                            onChange={(e) =>
                                setCurso({ id: Number.parseInt(e.target.value) })
                            }
                        >
                            <option value="DEFAULT">{id ? "curso.nome" : "Escolha um curso"}</option>
                            {cursos.map((curso) => (
                                <option key={curso.id} value={curso.id}>
                                    {curso.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="Emprego" className="form-label">
                            Vagas
                        </label>
                        <select
                            name="Emprego"
                            id="Emprego"
                            className="form-select "
                            onChange={(e) =>
                                setEmprego({ id: Number.parseInt(e.target.value) })
                            }
                        >
                            <option value="DEFAULT">{id ? emprego.cargo : "Escolha uma vaga"}</option>
                            {empregos.map((emprego) => (
                                <option key={emprego.id} value={emprego.id}>
                                    {emprego.cargo}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => criarOuEditarTrans(e)}
                    >
                        Enviar
                    </button>
                    <Link
                        to="/TransCadastro"
                        className="btn btn-danger"
                        style={{ marginLeft: "10px" }}
                    >
                        Cancelar
                    </Link>
                </fieldset>
            </form>
        </div>
    );
}
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import EmpregoService from '../../services/EmpregoService'
import EmpresaService from '../../services/EmpresaService'

export default function Create() {
    const [cargo, setCargo] = useState("");
    const [link, setLink] = useState("");
    const [empresa, setEmpresa] = useState({ id: "", nome: "" });
    const [empresas, setEmpresas] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const getAllEmpresas = () => {
        EmpresaService.getAllEmpresas().then((response) => {
            setEmpresas(response.data);
        })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getAllEmpresas();
    }, []);

    const criarOuEditarEmprego = (e) => {
        e.preventDefault();

        const emprego = { cargo, link, empresa };
        console.log(emprego);

        if (id) {
            EmpregoService.updateEmprego(id, emprego).then((response) => {
                navigate("/EmpregoCadastro");
            });
        } else {
            EmpregoService.createEmprego(emprego).then((response) => {
                navigate("/EmpregoCadastro");
            });
        }
    };

    useEffect(() => {
        function getEmpregoById() {
            if (id) {
                EmpregoService.getEmpregoById(id).then((response) => {
                    setCargo(response.data.cargo);
                    setLink(response.data.link);
                    setEmpresa({
                        id: response.data.empresa.id,
                        nome: response.data.empresa.nome,
                    });
                })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
        getEmpregoById();
    }, [id]);

    return (
        <div className="container py-3">
            <form>
                <fieldset>
                    <legend>
                        <h2 className="text-center">{id ? "Editar vaga" : "Cadastrar vaga"}</h2>
                    </legend>
                    <div className="form-group mb-3">
                        <label htmlFor="Cargo" className="form-label">Cargo</label>
                        <input
                            type="text"
                            id="Cargo"
                            className="form-control"
                            placeholder="cargo da vaga"
                            value={cargo}
                            onChange={(e) => setCargo(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="Link" className="form-label">Link da vaga</label>
                        <input
                            type="text"
                            id="Link"
                            className="form-control"
                            placeholder="Link da vaga"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="Idempresa_empresa" className="form-label">Empresa</label>
                        <select
                            id="Idempresa_empresa"
                            name="Idempresa_empresa"
                            className="form-select"
                            onChange={(e) => setEmpresa({ id: Number.parseInt(e.target.value) })}
                        >
                            <option value="DEFAULT">{id ? empresa.nome : 'Escolha uma empresa'}</option>
                            {empresas.map((empresa) => (
                                <option key={empresa.id} value={empresa.id}>
                                    {empresa.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => criarOuEditarEmprego(e)}
                    >
                        Enviar
                    </button>
                    <Link to="/EmpregoCadastro"
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
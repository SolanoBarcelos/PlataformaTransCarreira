import axios from "axios"

const Empresa_API_URL = 'http://localhost:8080/api/v1/empresas'

class EmpresaService {
    
    getAllEmpresas() {
        return axios.get(Empresa_API_URL);
    }

    createEmpresa(empresa) {
        return axios.post(Empresa_API_URL, empresa);
    }

    getEmpresaById(id) {
        return axios.get(Empresa_API_URL + '/' + id);
    }

    updateEmpresa(id, empresa) {
        return axios.put(Empresa_API_URL + '/' + id, empresa);
    }

    deleteEmpresa(id) {
        return axios.delete(Empresa_API_URL + '/' + id);
    }
}

export default new EmpresaService();
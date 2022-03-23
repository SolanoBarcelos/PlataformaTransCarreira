import axios from 'axios'

const EMPREGO_API_URL = "http://localhost:8080/api/v1/vagas"

class EmpregoService {

    getAllEmpregos() {
        return axios.get(EMPREGO_API_URL);
    }

    createEmprego(emprego) {
        return axios.post(EMPREGO_API_URL, emprego);
    }

    getEmpregoById(id) {
        return axios.get(EMPREGO_API_URL + "/" + id);
    }

    updateEmprego(id, emprego) {
        return axios.put(EMPREGO_API_URL + "/" + id, emprego);
    }

    deleteEmprego(id) {
        return axios.delete(EMPREGO_API_URL + "/" + id);
    }
}

export default new EmpregoService();
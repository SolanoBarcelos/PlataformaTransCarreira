import axios from 'axios'

const CURSO_API_URL = 'http://localhost:8080/api/v1/cursos'

class CursoService {
    getAllCursos() {
        return axios.get(CURSO_API_URL);
    }

    createCurso(curso) {
        return axios.post(CURSO_API_URL, curso);
    }

    getCursoById(id) {
        return axios.get(CURSO_API_URL + "/" + id);
    }

    updateCurso(id, curso) {
        return axios.put(CURSO_API_URL + "/" + id, curso);
    }

    deleteCurso(id) {
        return axios.delete(CURSO_API_URL + "/" + id);
    }
}

export default new CursoService();
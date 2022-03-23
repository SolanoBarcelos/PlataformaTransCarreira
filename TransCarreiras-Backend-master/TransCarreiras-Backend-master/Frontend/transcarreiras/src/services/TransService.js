import axios from "axios"

const TRANS_API_URL = 'http://localhost:8080/api/v1/trans'

class TransService {
    
    getAllTrans() {
        return axios.get(TRANS_API_URL);
    }

    createTrans(trans) {
        return axios.post(TRANS_API_URL, trans);
    }

    getTransById(id) {
        return axios.get(TRANS_API_URL + '/' + id);
    }

    updateTrans(id, trans) {
        return axios.put(TRANS_API_URL + '/' + id, trans);
    }

    deleteTrans(id) {
        return axios.delete(TRANS_API_URL + '/' + id);
    }
}

export default new TransService();
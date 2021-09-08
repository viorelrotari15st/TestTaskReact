import axios from "axios";

export default class UnicornService {
    URL = 'https://crudcrud.com/api/';
    APYKEY = '667a59e21109467eabf0b4082e4c96ca';



    getAll = async () => {
        const response = await axios.get(`${this.URL}${this.APYKEY}/unicorns/`)
        return response.data;
    }
    newPost = async (dataForPost) => {
        const resp = await axios.post(`${this.URL}${this.APYKEY}/unicorns/`, dataForPost)
        return resp.data;
    }
    deletaPost = async (id) => {
        const resp = await axios.delete(`${this.URL}${this.APYKEY}/unicorns/${id}`)
        return (resp.data)
    }
    updatePost = async (id, dataForUpdate) => {
        const resp = await axios.put(`${this.URL}${this.APYKEY}/unicorns/${id}`, dataForUpdate);
        return resp.data
    }
}
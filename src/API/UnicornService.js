import axios from "axios";

export class UnicornService {
    URL = 'https://crudcrud.com/api/';
    APYKEY = '8d55341502104f16915ea4a9e77d0b1c';
    constructor() {
        this.http = axios.create();
    }


    getAll = async () => {
        const response = await this.http.get(`${this.URL}${this.APYKEY}/unicorns/`)
        return response.data;
    }
    newPost = async (dataForPost) => {
        const resp = await this.http.post(`${this.URL}${this.APYKEY}/unicorns/`, dataForPost)
        return resp.data;
    }
    deletePost = async (id) => {
        const resp = await this.http.delete(`${this.URL}${this.APYKEY}/unicorns/${id}`)
        return (resp.data)
    }
    updatePost = async (id, dataForUpdate) => {
        const resp = await this.http.put(`${this.URL}${this.APYKEY}/unicorns/${id}`, dataForUpdate);
        return resp.data
    }
}

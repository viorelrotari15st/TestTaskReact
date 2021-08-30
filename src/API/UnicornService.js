import axios from "axios";

export default class UnicornService {
    URL = 'https://jsonplaceholder.typicode.com/posts'

    static async getAll() {
        try {
            const response = await axios.get('https://crudcrud.com/api/38d30994f6574251a20d6968bbc97771/unicorns')
            return response.data;

        } catch (e) {
            console.log(e);

        }

    }
    static async newPost(dataForPost) {
        try {
            const resp = await axios.post('https://crudcrud.com/api/38d30994f6574251a20d6968bbc97771/unicorns/', dataForPost)
            return resp.data;
        } catch (error) {
            console.log(error)

        }
    }
    static async deletaPost(id) {
        try {
            const resp = await axios.delete(`https://crudcrud.com/api/38d30994f6574251a20d6968bbc97771/unicorns/${id}`)
            return (resp.data)
        } catch (error) {
            console.log(error)
        }
    }
    static async updatePost(id, dataForUpdate) {
        try {
            const resp = await axios.put(`https://crudcrud.com/api/38d30994f6574251a20d6968bbc97771/unicorns/${id}`, dataForUpdate);
            return resp.data
        } catch (error) {
            console.error(error)
        }
    }
}
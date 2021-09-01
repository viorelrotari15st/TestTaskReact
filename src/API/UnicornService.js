import axios from "axios";

export default class UnicornService {
    URL = 'https://jsonplaceholder.typicode.com/posts'

    static async getAll() {
        try {
            const response = await axios.get('https://crudcrud.com/api/1fb76ca0a53b402998900e4539b53c3b/unicorns')
            return response.data;

        } catch (e) {
            console.log(e);

        }

    }
    static async newPost(dataForPost) {
        try {
            const resp = await axios.post('https://crudcrud.com/api/1fb76ca0a53b402998900e4539b53c3b/unicorns/', dataForPost)
            return resp.data;
        } catch (error) {
            console.log(error)

        }
    }
    static async deletaPost(id) {
        try {
            const resp = await axios.delete(`https://crudcrud.com/api/1fb76ca0a53b402998900e4539b53c3b/unicorns/${id}`)
            return (resp.data)
        } catch (error) {
            console.log(error)
        }
    }
    static async updatePost(id, dataForUpdate) {
        try {
            const resp = await axios.put('https://crudcrud.com/api/1fb76ca0a53b402998900e4539b53c3b/unicorns/' + id, dataForUpdate);
            return resp.data
        } catch (error) {
            console.error(error)
        }
    }
}
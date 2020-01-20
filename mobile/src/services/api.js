import axios from 'axios';

const api = axios.create({
    baseURL: 'https://shielded-earth-40981.herokuapp.com/'
})

export default api;
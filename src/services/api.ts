import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.1.1:3333'
});

export default api;
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lista-de-compras-api.onrender.com/',
});

export default api;
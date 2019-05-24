import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ajudarse.com.br/api',
});

export default api;

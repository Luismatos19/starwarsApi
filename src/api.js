import axios from 'axios';

const api = axios.create({
  baseUrl: 'https://swapi.dev/',
});

export default api;

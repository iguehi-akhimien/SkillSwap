import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000/api/auth' });

export const register = (formData) => API.post('/register', formData);
export const login = (formData) => API.post('/login', formData);

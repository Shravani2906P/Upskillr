import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const createUser = (data) => API.post('/users', data);
export const getUsers = () => API.get('/users');

export const sendSwap = (data) => API.post('/swaps', data);
export const getSwaps = () => API.get('/swaps');
export const updateSwap = (id, data) => API.patch(`/swaps/${id}`, data);

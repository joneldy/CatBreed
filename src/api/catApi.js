import axios from '../axiosApi';

export const fetchCatApi = ({ id }) => axios.get(`/images/${id}`);

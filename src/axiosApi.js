import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.common['x-api-key'] = 'DEMO-API-KEY';
    return config;
  },
  (error) => {
    console.log('token expired');
    return Promise.reject(error);
  }
);
export default axiosInstance;

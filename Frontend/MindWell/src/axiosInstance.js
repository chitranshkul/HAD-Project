import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8082/api/v1', // Replace '/api' with the base URL of your proxy server
});

export default axiosInstance;

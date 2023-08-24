import axios from 'axios';
import store from '../store/index'; // 导入你的 Vuex Store 实例的路径

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      store.commit('changeIsUser',true); 
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    const newToken = response.data.token;
    if (newToken) {
      localStorage.setItem('token', newToken);
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance
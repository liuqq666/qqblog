
import axios from 'axios'
import { state } from '@/main';

axios.interceptors.request.use(function (config) {

    if(state.IsUser){//判断是否本人，不是本人就没必要加token了

    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config;
    }
  }, function (error) {
    return Promise.reject(error);
  });

axios.interceptors.response.use(function (response) {
    if(state.IsUser){
       const {authorization } = response.headers
    authorization && localStorage.setItem("token",authorization)
    return response; 
    }
  }, function (error) {
    const {status} = error.response
    if(status===401){
        localStorage.removeItem("token")
        window.location.href="#/login"
    }
    return Promise.reject(error);
  });

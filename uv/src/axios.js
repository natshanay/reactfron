// src/axios.js
import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:8000/api', // Base URL for your API
  
    headers: {
        Accept:"application/json",
        'Content-Type': 'application/json',
        
    },
});


instance.interceptors.request.use(
    config => {
        
        return config;
    },
    error => {
        // Handle request error
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => {
        
        return response;
    },
    error => {
        // Handle response error
        console.error('API call error:', error); // Log the error
        return Promise.reject(error);
    }
);

export default instance;

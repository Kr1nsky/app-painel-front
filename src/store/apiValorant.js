import axios from 'axios';

const API = axios.create({
    baseURL: 'http://127.0.0.1:8000'
});

// API.interceptors.request.use(config => {
//     config.headers['Accept'] = 'Accept: application/json';
//     return config;
// })

// API.interceptors.response.use(function (response) {
//     return response;
// }, function (error) {
//     if (error && error.response && error.response.status == 401) {
//         localStorage.token = null;
//         location.href = "/login";
//         console.log('erro 401');
//     } else {
//         return Promise.reject(error);
//     }
// });

const weapons = {
    list: () => API.get('/weapons'),
    // me: () => API.get('/me'),
    // login: (loginData) => API.post('/login', loginData),
}

export default {
    weapons,
}
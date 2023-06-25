import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000/api/'
});

// API.interceptors.request.use(config => {
//     const token = window.localStorage.token;
//     if (token) {
//         config.headers['Authorization'] = 'Bearer ' + token;
//     }
//     return config;
// },
//     error => {
//         Promise.reject(error)
//     });

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

const users = {
    list: () => API.get('/users-list'),
    // me: () => API.get('/me'),
    // login: (loginData) => API.post('/login', loginData),
}

export default {
    users,
}
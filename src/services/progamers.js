import axios from 'axios';

const BASE_URL = 'http://localhost:5000/'


function register(body) {
    const promise = axios.post(`${BASE_URL}sign-up`, body);
    return promise;
}
function getProducts(token){
    const config=createHeaders(token);
    const promise=axios.get(`${BASE_URL}products`,config);
    return promise;

}
function getCategories(token){
    const config=createHeaders(token);
    const promise=axios.get(`${BASE_URL}home`,config);
    return promise;
}

function createHeaders(token){
    const config={
        headers:{
            Authorization:`Bearer ${token}`
    }};
    return config;
}

function login(body) {
    const promise = axios.post(`${BASE_URL}`, body);
    return promise;
}

export { register,getProducts,login,getCategories}

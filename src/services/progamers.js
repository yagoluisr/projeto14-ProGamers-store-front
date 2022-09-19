import axios from 'axios';

const BASE_URL = 'https://projeto14-progamers-store.herokuapp.com/'


function register(body) {
    const promise = axios.post(`${BASE_URL}sign-up`, body);
    return promise;
}
function getProducts(){
    const config=createHeaders();
    const promise=axios.get(`${BASE_URL}products`,config);
    return promise;

}
function getCategories(){
    const config=createHeaders();
    const promise=axios.get(`${BASE_URL}home`,config);
    return promise;
}

function createHeaders(){
    const auth=JSON.parse(localStorage.getItem('progamers'));
    const config={
        headers:{
            Authorization:`Bearer ${auth.token}`
    }};
    return config;
}

function login(body) {
    const promise = axios.post(`${BASE_URL}`, body);
    return promise;
}

function finalizePurchase(body) {
    const config=createHeaders();
    const promise = axios.post(`${BASE_URL}cart`, body, config);
    return promise
}

export { register, getProducts, login, getCategories, finalizePurchase}

import axios from 'axios';

const BASE_URL = 'http://localhost:5000/'


function register(body) {
    const promise = axios.post(`${BASE_URL}sign-up`, body);
    return promise;
}
function getProducts(){
    const config=createHeaders();
    const promise=axios.get(`${BASE_URL}home`,config);
    return promise;

}

function createHeaders(){
    const auth=JSON.parse(localStorage.getItem('mywallet'));
    const config={
        headers:{
            Authorization:`Bearer e5ac47c0-e8a6-4e3a-aaea-43dc93632829`
    }};
    return config;
}

function login(body) {
    const promise = axios.post(`${BASE_URL}`, body);
    return promise;
}

function finalizePurchase(body) {
    const promise = axios.post(`${BASE_URL}/carrinho`, body);
    return promise
}

export { register,getProducts,login, finalizePurchase}

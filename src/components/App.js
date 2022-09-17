import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/styles/globalStyles";
import Teste from "./Teste";
import UserContext from "../contexts/User.context";
import SignUp from "./SignUp";
import Home from "./Home";
import SignIn from "./SignIn";
import { useState } from "react";

export default function App(){
    const [cart,setCart]=useState(5);
    const [productList,setProductList]=useState([]);
    const [categorie,setCategorie]=useState('');
    const [selection,setSelection]=useState('');
    const [token, setToken] = useState('');
    return(
        <BrowserRouter>
            <GlobalStyle/> 
            <UserContext.Provider value={{token,setToken,cart,setCart,productList,setProductList,categorie,setCategorie,selection,setSelection}}>
            <Routes>
                <Route path='/' element={<SignIn/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/home' element={<Home/>}/>
            </Routes>   
            </UserContext.Provider>
        </BrowserRouter>
    )
}
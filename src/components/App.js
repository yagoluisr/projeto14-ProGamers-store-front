import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/styles/globalStyles";
import Teste from "./Teste";
import UserContext from "../contexts/User.context";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useState } from "react";

//se n aparecer nada coloca /test na url

export default function App(){
    const [token, setToken] = useState('');

    return(
        <BrowserRouter>
            <GlobalStyle/> 
            <UserContext.Provider  value={{token,setToken}}>
            <Routes>
                <Route path='/test' element={<Teste/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/' element={<SignIn/>}/>
                {/* <Route path='/' element={<SignIn/>}> */}
            </Routes>   
            </UserContext.Provider>
        </BrowserRouter>
    )
}
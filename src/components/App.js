import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/styles/globalStyles";
import Teste from "./Teste";
import UserContext from "../contexts/User.context";

//se n aparecer nada coloca /test na url

export default function App(){

    return(
        <BrowserRouter>
            <GlobalStyle/> 
            <UserContext.Provider>
            <Routes>
                <Route path='/test' element={<Teste/>}/>

            </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}
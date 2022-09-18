import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/styles/globalStyles";
import UserContext from "../contexts/User.context";
import SignUp from "./SignUp";
import Home from "./Home";
import SignIn from "./SignIn";
import { useState } from "react";
import Products from "./Products";
import PrivatePage from "./PrivatePage";


export default function App(){

    const [shop,setShop]=useState([])
    const [cart,setCart]=useState(shop.length);
    const [productList,setProductList]=useState([]);
    const [selection,setSelection]=useState('');
    const [token, setToken] = useState('');
    return(
        <BrowserRouter>
            <GlobalStyle/> 
            <UserContext.Provider value={{token,setToken,cart,setCart,productList,setProductList,selection,setSelection,shop,setShop}}>
            <Routes>
                <Route path='/' element={<SignIn/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>

                <Route path='/home' element={<PrivatePage><Home/></PrivatePage>}/>
                <Route path='/products' element={<PrivatePage><Products/></PrivatePage>}/>
            </Routes>   
            </UserContext.Provider>
        </BrowserRouter>
    )
}
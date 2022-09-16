import { useContext, useEffect } from "react";
import styled from "styled-components";
import UserContext from "../contexts/User.context";
import { Menu,Categorie} from "./Components";
import { getProducts } from "../services/progamers";
import { useNavigate } from "react-router-dom";



export default function Home(){
    const {productList,setProductList}=useContext(UserContext); 
    const {categorie,setCategorie}=useContext(UserContext); 
    const {setSelection}=useContext(UserContext);
    const navigate=useNavigate();
    useEffect(()=>{
        getProducts()
         .then((answer)=>{
            setProductList(answer.data.products);
            setCategorie(answer.data.categorie);
            console.log('ae',productList)
        ;})
         .catch((error)=>{
            alert(error)});
        
    },[]);
    function goProducts(){
        navigate('/products');    
    }
    
    return(
        <Wrapper>
        <Menu icon2="log-out-outline" icon1="cart"></Menu>
        
        <CategorieList>
        {categorie?(categorie.map((value)=>
            <Categorie onClick={()=>{ setSelection(value.title);goProducts();}} title={value.title} image={value.image}>
            </Categorie>
            )):(<></>)}
        
        
        </CategorieList>
        </Wrapper>
    )
}

const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`


const CategorieList=styled.div`
   
    max-width: 500px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:120px;
   

`


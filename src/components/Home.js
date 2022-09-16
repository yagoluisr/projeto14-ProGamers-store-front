import { useContext, useEffect } from "react";
import styled from "styled-components";
import UserContext from "../contexts/User.context";
import { Menu } from "./Components";
import { getProducts } from "../services/progamers";
export default function Home(){
    const {productList,setProductList}=useContext(UserContext); 
    const {categorie,setCategorie}=useContext(UserContext); 
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

    function selectCategorie(type){
        alert(type);

    }
    return(
        <Wrapper>
        <Menu icon2="log-out-outline" icon1="cart"></Menu>
        
        <CategorieList>
        {categorie?(categorie.map((value)=>
            <Categorie onClick={()=>{selectCategorie(value.title)}}>
            <p>{value.title}</p>
            <img src={value.image} />
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


const Categorie=styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1BAC4B;
    border-radius: 20px;
    padding-left:10px;
    padding-right:10px;
    margin-bottom: 5%;
    
    
    img{
        width: 45%;
        background-color: #1BAC4B;
        overflow: hidden;
        border-radius: 20px;
    }
    p{
        font-weight: 400;
        font-size: 35px;
        color: #FFFFFF;
        background-color: #1BAC4B;

    }


`
const CategorieList=styled.div`
   
    max-width: 500px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:120px;
   

`


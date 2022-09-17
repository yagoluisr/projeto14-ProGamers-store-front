import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/User.context";




function Button({children}){
   
    return(
        <ButtonWrapper>{children}</ButtonWrapper>
    )
};
function Input({...otherProps}){
    return(
        <InputWrapper {...otherProps}></InputWrapper>
    )
};

function Menu({icon1,icon2}){
    const navigate=useNavigate();
    const {cart,setCart}=useContext(UserContext);
    let route;
    if(icon2==='log-out-outline'){
        route='/'    
    
    }else{
        route='/home'
    }
    
    return(
    <MenuWrapper>
        <ion-icon name={icon1}></ion-icon>
        {(icon1==="cart"&&cart>0)?(<div><h1>{cart}</h1></div>):(<></>)}
       <Link to={'/home'}><p>ProGamers</p></Link>
        
        <Link to={route}><ion-icon name={icon2} ></ion-icon></Link>
    </MenuWrapper>

    )
};
function Categorie({onClick,title,image}){
    return(
        <CategorieWrapper onClick={onClick}>
        <p>{title}</p>
        <img src={image} />
        </CategorieWrapper>
)
}

function Product ({onClick,title,image,value}){
    return(
            <ProductWrapper onClick={onClick}>
                <img src={image} />
                <p>{title}</p>
                <p>{value}</p>
            </ProductWrapper>

    )
}
const ProductWrapper=styled.div`
    


`


const CategorieWrapper=styled.div`
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




const MenuWrapper =styled.div`
    height: 40px;
    width: 100%;    
    display: flex;
    background-color: #1F222A;
    align-items: center;
    justify-content: space-between;
    padding:15px;
    position: fixed;
    top: 0;
    ion-icon {
        font-size: 24px;
        color: white;
        background-color: #1F222A;
        }
    p{
        color: #ffffff;
        background-color: #1F222A;
        font-family: 'Urbanist', sans-serif;
        font-weight: 700;
        font-size: 30px;
    }
    div{
        height: 20px;
        width: 20px;
        border-radius: 15px;
        background-color: red;
        position:fixed;
        top: 10px;
        left:30px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        h1{
            color: white;
            font-size: 15px;
            background-color:red
        }

    }

`
const ButtonWrapper =styled.button`
    width: 100%;
    height: 46px;
    background-color: #1BAC4B;
    border-radius: 5px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
` 
const InputWrapper =styled.input`
    width: 100%;
    height: 58px;
    background: #1F222A;
    border-radius: 5px;   
    color: #FFFFFF;
    border: 0;
    
`


export {Button,Input,ButtonWrapper,Menu,Categorie,Product}
import { useContext } from "react";
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
    const {cart,setCart}=useContext(UserContext);
    return(
    <MenuWrapper>
        <ion-icon name={icon1}></ion-icon>
        {(icon1==="cart"&&cart>0)?(<div><h1>{cart}</h1></div>):(<></>)}
        <p>LOGO</p>
        <ion-icon name={icon2}></ion-icon>
    </MenuWrapper>

    )
};

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
        color: white;
        font-size: 30px;
        font-weight: 700;
        background-color: #1F222A;
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


export {Button,Input,ButtonWrapper,Menu}
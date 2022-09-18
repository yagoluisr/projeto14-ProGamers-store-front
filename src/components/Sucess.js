import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import { Button } from "./Components"
import { NewButton } from "./SignUp"



export default function Sucess(){
    //se quiser usar o nome: 
    const local=JSON.parse(localStorage.getItem('progamers'));
    const name=local.name;
    const navigate = useNavigate();
    
    return(
        <Wrapper>
        <p>Compra realizada</p>
        <p>com sucesso!</p>
        <ion-icon name="checkmark-circle"></ion-icon>
        <NewButton onClick={()=>{navigate('/home')}}>Continuar Comprando</NewButton>


        </Wrapper>
    )
}

const Wrapper=styled.div`
   max-width: 500px;
    width: 90%;
    height: 100%;
    display: flex;
    padding-top: 20%;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 0 auto;
    ion-icon {
        font-size: 170px;
        color: #1BAC4B; 
        margin-top:20%;
        margin-bottom:10%;
        
        }
    p{
        font-size: 30px;
        color: white;

    }
`
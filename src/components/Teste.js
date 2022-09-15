import styled from "styled-components"
import { Button,Input } from "./Components"


export default function Teste(){

    return (
        <Div>
        <p>isso é um teste </p> 
        <Button>Clica</Button>
        <Input placeholder ="NOME"></Input>
        </Div>
           )
}
const Div=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 0 auto;
    width: 90%;

`
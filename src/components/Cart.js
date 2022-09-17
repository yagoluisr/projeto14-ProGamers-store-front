import styled from "styled-components"
import { Input } from "./Components"



export default function Cart() {
    return (
        <Container>
            <Adress>
                <span>Endereço:</span>
                <Input
                    name = 'adress'
                    type = 'text'
                    placeholder = 'Rua, número, bairro e cidade'
                ></Input>
            </Adress>

            <Products>
                <span>Produtos</span>

                <NumberProduct>
                    <p>Produto 01</p>
                </NumberProduct>

                <Product>
                    <BoxProduct>
                        <ImgProduct>
                            <img src="https://www.navegamer.com.br/image/cache/catalog/--250222-vitrine-s-bg/Saturno%20AA10-1200x1200.png"/>
                        </ImgProduct>

                        <Details>
                            <p>Title</p>
                            <Value>R$ 1.000,99</Value>
                        </Details>
                            <Actions>
                                <Amount>
                                    <ion-icon name="chevron-back-outline"></ion-icon>
                                        1 
                                    <ion-icon name="chevron-forward-outline"></ion-icon> 
                                </Amount>
                                
                                <Remove>Remover</Remove>
                            </Actions>
                    </BoxProduct>

                </Product>
            </Products>
        <>
        </>
        </Container>
    )
}


const Container = styled.div`
    height: 90vh;
    width: 95%;

    input {
        margin-top: 10px;
    }
`

const Adress = styled.div`
    display: flex;
    flex-direction: column;


    span {
        font-weight: 600;
        font-size: 30px;

        color: #ffffff;
    }
`

const Products = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 30px;

    span:first-child {
        font-weight: 600;
        font-size: 40px;

        color: #ffffff;
    }
`
const NumberProduct = styled.div`
    width: 100%;

    display: flex;
    align-items: flex-start;
    
    margin-top: 20px;
    
    p {
        width: 20%;

        display: flex;
        justify-content: center;

        font-weight: 500;
        font-size: 20px;
        
        border: 1px solid red;
        border-bottom: 0;
        border-radius: 3px;


        color: #ffffff;
    }
`

const Product = styled.div`
    width: 100%;
    
    display: flex;

    border: 1px solid red;

`

const BoxProduct = styled.div`
    width: 100%;

    display: flex;

    margin-top: 12px;
`
const ImgProduct = styled.div`

    img {
        height: 100px;
        width: 100px;
    }
`

const Details = styled.div`
    width: 65%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
        font-weight: 600;
        font-size: 25px;

        color: #ffffff;
    }
`

const Actions = styled.div`
    width: 20%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 7px 7px 0;
    
`

const Value = styled.span`
    font-size: 30px;
    color: aqua;
`

const Amount = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 25px;

    margin-top: 15px;

    color: #ffffff;

    ion-icon {
        height: 5vh;
        color: red;
    }
`

const Remove = styled.button`
    width: 100%;
        
    font-size: 15px;
    line-height: 25px;

    border: none;
    border-radius: 3px;

    color: #FFFFFF;
    background-color: green;

`
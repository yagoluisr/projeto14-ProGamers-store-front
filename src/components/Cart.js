import { useState } from "react"
import styled from "styled-components"
import { ButtonWrapper, Input } from "./Components"
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";


export default function Cart() {

    
    const [count, setCount] = useState(1)
    const [data, setData] = useState({
        username: '',
        adress: '',
        amount: '',
        date: dayjs().format('DD/MM/YY'),
        products: []
    });

    const navigate = useNavigate()

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function finalizePurchase() {
        navigate('/sucesso');
        // finalizePurchase(data).then(res => {
        //     console.log(res.data)
        //     navigate('/sucesso');
        // }).catch(error => {
        //     console.log(error)
        // });
    }

    return (
        <Container>
            <Adress>
                <span>Endereço:</span>
                <Input
                    name = 'adress'
                    type = 'text'
                    placeholder = 'Rua, número, bairro e cidade'
                    value = {data.name}
                    onChange={updateData}
                    //required
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
                                    <ion-icon name="chevron-back-outline" 
                                        onClick={()=> {
                                            if(count > 1){
                                                const subtraction = count - 1
                                                setCount(subtraction)
                                            }
                                        }
                                    }></ion-icon>
                                        {count} 
                                    <ion-icon name="chevron-forward-outline" 
                                        onClick={()=>
                                            setCount(count + 1)
                                    }></ion-icon> 
                                </Amount>
                                
                                <Remove>Remover</Remove>
                            </Actions>
                    </BoxProduct>

                </Product>
                
                <Clear>Limpar carrinho X</Clear>
            </Products>

            <Extract>
                <Sumary>
                    <ion-icon name="document-text-outline"></ion-icon>
                    RESUMO
                </Sumary>

                <ValueProducts>
                    <div>Valor dos produtos:</div>
                    <div>R$499,89</div>
                </ValueProducts>

                <ShippingDetails>
                    <div>Frete:</div>
                    <div>R$14,99</div>
                </ShippingDetails>

                <TotalValue>
                    <div>Total:</div>
                    <div>R$514,88</div>
                </TotalValue>

                <Buttons>
                    <NewButton onClick={finalizePurchase}>Finalizar compra</NewButton>
                    <NewButton onClick={() => navigate('/home')}>Continuar Comprando</NewButton>
                </Buttons>
            </Extract>

    
        </Container>
    )
}

const NewButton = styled(ButtonWrapper)`
    width: 60%;
    
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;

    margin-top: 20px;

`


const Container = styled.div`
    height: 100%;
    width: 95%;

    margin: 100px auto 50px auto;
    input {
        margin-top: 10px;
    }
`

const Adress = styled.form`
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
        width: 30%;

        display: flex;
        justify-content: center;

        font-weight: 500;
        font-size: 20px;
        padding-top: 4px;
        padding-bottom: 3px;
        
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

    background-color: #1f222a;


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

const Clear = styled.div`
    width: 100%;

    display: flex;
    justify-content: flex-end;
    
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;

    margin-top: 15px;
`

const Extract = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 35px;
`

const Sumary = styled.span`
    font-weight: 700;
    font-size: 35px;
    color: #ffffff;

    ion-icon {
        height: 30px;
        width: 30px;
        margin-right: 10px;
    }
`

const ValueProducts = styled.span`
    width: 85%;
    
    display: flex;
    justify-content: space-between;
    
    font-weight: 500;
    font-size: 20px;
    color: #ffffff;

    margin-top: 25px;
`

const ShippingDetails = styled.span`
width: 85%;
    
    display: flex;
    justify-content: space-between;
    
    font-weight: 500;
    font-size: 20px;
    color: #ffffff;

    margin-top: 25px;
`

const TotalValue = styled.span`
    width: 85%;
    
    display: flex;
    justify-content: space-between;
    
    font-weight: 500;
    font-size: 20px;
    color: #ffffff;

    padding-top: 7px;

    border-top: 1px solid #ffffff;

    margin-top: 25px;
`

const Buttons = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 20px;
`   

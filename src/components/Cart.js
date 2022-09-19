import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { ButtonWrapper, Input, Menu } from "./Components"
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/User.context";
import { finalizePurchase } from "../services/progamers";


export default function Cart() {

    const { shop, setShop } = useContext(UserContext);
    
    const local=JSON.parse(localStorage.getItem('progamers'));
    const name=local.name;

    console.log(name)
    
    let soma = 0;
    shop.forEach(obj => soma += Number(obj.value.replace(',', '.')));
    
    const [total, setTotal] = useState(0);
    const [data, setData] = useState({
        username: name,
        adress: '',
        amount: soma,
        date: dayjs().format('DD/MM/YY'),
        products: shop
    });
    
    const navigate = useNavigate()
    
    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    
    function finalizePurchases() {
        const obj = {
            username: name,
            adress: data.adress,
            amount: (total + 14.99).toFixed(2),
            date: dayjs().format('DD/MM/YY'),
            products: shop
        }
        console.log(obj)
        
        finalizePurchase(obj).then(() => {
            navigate('/sucesso');
        }).catch(error => {
            console.log(error.response)
        });
    }

    setTimeout(()=>{
        setTotal(soma)
    },300)

    return (
        <>
            <Menu icon1={'arrow-back-outline'} icon2={'log-out-outline'}></Menu>
        <Container>
            <Adress>
                <span>Endereço:</span>
                <Input
                    name = 'adress'
                    type = 'text'
                    placeholder = 'Rua, número, bairro e cidade'
                    value = {data.name}
                    onChange={updateData}
                    required
                ></Input>
            </Adress>

            <Products>
                <span>Produtos</span>

                { shop.map((obj, key) => (
                    shop.length === 0 ? <Message>DEU RUIM !!!</Message> 
                    : 
                    <CartItem key={key} index={key} total={total} setTotal={setTotal} 
                    shop={shop} setShop={setShop} {...obj}/>
                ))}
                
                <Clear onClick={() => setShop([])}>Limpar carrinho X</Clear>
            </Products>


            <Extract>
                <Sumary>
                    <ion-icon name="document-text-outline"></ion-icon>
                    RESUMO
                </Sumary>

                <ValueProducts>
                    <div>Valor dos produtos:</div>
                    <div>R$ {total.toFixed(2)}</div>
                </ValueProducts>

                <ShippingDetails>
                    <div>Frete:</div>
                    <div>R$14.99</div>
                </ShippingDetails>

                <TotalValue>
                    <div>Total:</div>
                    <div>R$ {(total + 14.99).toFixed(2)}</div>
                </TotalValue>

                <Buttons>
                    <NewButton onClick={finalizePurchases}>Finalizar compra</NewButton>
                    <NewButton onClick={() => navigate('/home')}>Continuar Comprando</NewButton>
                </Buttons>
            </Extract>

    
        </Container>
        </>
    )
}

function CartItem({index, image, value, title, total, setTotal, shop, setShop, soma}) {
    const [count, setCount] = useState(1);
    
    soma = soma + Number(value.replace(',', '.')) * count

    return (
        <>
            <NumberProduct>
                <p>Produto {index+1}</p>
            </NumberProduct>  

            <Product>
                <BoxProduct>
                    <ImgProduct>
                        <img src={image}/>
                    </ImgProduct>

                    <Details>
                        <p>{title}</p>
                        <Value>R$ {(Number(value.replace(',', '.')) * count).toFixed(2)}</Value>
                    </Details>
                        <Actions>
                            <Amount>
                                <ion-icon name="chevron-back-outline" 
                                    onClick={()=> {
                                        if(count > 1){
                                            const subtraction = count - 1
                                            setCount(subtraction);
                                            setTotal(total - (soma * (count -1)))
                                        }
                                    }}>
                                </ion-icon>
                                    {count} 
                                <ion-icon name="chevron-forward-outline" 
                                    onClick={()=>{
                                        setCount(count + 1)
                                        setTotal(total + (soma + Number(value.replace(',', '.')) * (count +1)))
                                    }
                                }></ion-icon> 
                            </Amount>
                            
                            <Remove onClick={()=>{
                                const shopCopy = [...shop]
                                shopCopy.splice(index,1)
                                setShop(shopCopy);                            
                            }}  >Remover</Remove>
                        </Actions>
                </BoxProduct>

            </Product>
        </>
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

    margin: 150px auto 50px auto;
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

const Message = styled.div`
    
    font-size: 40px;
    font-weight: 500;
    color: #ffffff;
`
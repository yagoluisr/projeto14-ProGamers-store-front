import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/User.context";


function Button({children,onClick}){
   
    return(
        <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
    )
};
function Input({...otherProps}){
    return(
        <InputWrapper {...otherProps}></InputWrapper>
    )
};

function Menu({icon1,icon2}){
    const {shop,setShop}=useContext(UserContext);
    const navigate = useNavigate();
    
    let route;
    let route1;

    const cart = shop.length;
    
    function link(){
        if (icon1 === 'cart'){
            route1='/cart'
        }else{
            route1='/products'
        }
    navigate(route1)
}
    
    function logout(){
        if(icon2==='log-out-outline'){
            route='/';
            localStorage.removeItem('progamers');
            setShop('');
      
        }else{
            route='/home'
        }
        navigate(route)
    }
    
    return(
    <MenuWrapper>
        <ion-icon name={icon1} onClick={link}></ion-icon>

        {
            (icon1 === "cart" && cart > 0)?
                (<div onClick={link}><h1>{cart}</h1></div>)
                :
                (<></>)
        }

       <Link to={'/home'}><p>ProGamers</p></Link>
        
        <ion-icon onClick={logout} name={icon2} ></ion-icon>
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
            <ProductWrapper >
                <ProductImage>
                <img src={image} />
                </ProductImage>
                <ProductDescription>
                <h1>{title}</h1>
                <p>{value}</p>
                </ProductDescription>
                <Button onClick={onClick}>ADICIONAR AO CARRINHO</Button>
            </ProductWrapper>

    )
}
const ProductWrapper=styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    border-radius: 40px;
    background-color: #464648;
`;
const ProductImage=styled.div`
    width:100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:15px;
    border-radius: 5px;

`;
const ProductDescription=styled.div`
    background-color: #464648;
    width: 100%;
    padding:15px;
    p{
        color:green;
        font-weight: 700;
        font-size: 30px;
        background-color: #464648;
    }
    h1{
        color:white;
        font-weight: 400;
        font-size: 22px;
        margin-bottom:15px;
        background-color: #464648;
    }
    
`;
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
    a{
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
            font-size: 12px;
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
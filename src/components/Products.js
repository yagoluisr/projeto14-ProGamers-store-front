import { useContext, useEffect } from "react";
import styled from "styled-components";
import UserContext from "../contexts/User.context";
import { getProducts } from "../services/progamers";
import { Menu,Product} from "./Components";


export default function Products(){
    const {productList,setProductList}=useContext(UserContext);
    const{selection}=useContext(UserContext);
    const {shop,setShop}= useContext(UserContext);
    const {cart,setCart}= useContext(UserContext);
   
    useEffect(()=>{
        getProducts()
         .then((answer)=>{
            if(selection==="Mouses"){
                setProductList(answer.data.Mouses);
            }else if(selection==="Headsets"){
                setProductList(answer.data.Headsets);
            }else if(selection==='Desktop'){
                setProductList(answer.data.Desktop);
            }else {
                setProductList(answer.data.Teclados);
            }
        ;})
         .catch((error)=>{
            alert(error)});
        
    },[]);

    return(
        <Wrapper>
        <Menu icon2="log-out-outline" icon1="cart"></Menu>
        <ProductList>
           
        {productList?(productList.map((value)=>
            <Product onClick={()=>{
            setShop([...shop,{title:value.title,value:value.value,image:value.image}]);
            console.log('shop',shop);
            setCart(shop.length);
            }} title={value.title} value={value.value} image={value.image}>
            </Product>
            )):(<></>)}
        </ProductList>

        </Wrapper>
    )
}
const ProductList=styled.div`
    height: 100%;
    max-width: 500px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:calc(40px + 5%);

`

const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

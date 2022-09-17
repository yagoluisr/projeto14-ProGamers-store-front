import { useContext, useEffect } from "react";
import styled from "styled-components";
import UserContext from "../contexts/User.context";
import { getProducts } from "../services/progamers";
import { Menu,Product} from "./Components";


export default function Products(){
    const {productList,setProductList}=useContext(UserContext);
    const{selection}=useContext(UserContext);
    const { token } = useContext(UserContext);
    const {shop,setShop}= useContext(UserContext);
    const {setCart}= useContext(UserContext);
    useEffect(()=>{
        getProducts(token)
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
        
    },[shop]);
    let lista =[]
    console.log(lista)
    const p = {title:"Headset Gamer Bluetooth JBL", value:"1109,90", image:"https://user-images.githubusercontent.com/106850140/190312342-d67ca2d8-82a5-4d64-a279-9e9eebb5cb5e.jpg"}
    return(
        <>
        <Menu icon2="log-out-outline" icon1="cart"></Menu>
        <ProductList>
        {productList?(productList.map((value)=>
            <Product onClick={()=>{ lista.push({title:value.title,value:value.value,image:value.image});
            console.log('lista',lista);
            
            setShop([...shop,lista]);
            
            console.log('shop',shop)
            setCart(shop.length)
            }} title={value.title} value={value.value} image={value.image}>
            </Product>
            )):(<></>)}
        </ProductList>

        </>
    )
}
const ProductList=styled.div`
   top:1000px;
    max-width: 500px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:1000px;
    

`

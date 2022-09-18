import { Navigate } from "react-router-dom";
import styled from "styled-components";

export default function PrivatePage ({children}){
    const auth=JSON.parse(localStorage.getItem('progamers'));
    if(auth){
        return(
            <Private>
            {children}
            </Private>
        )}
        else{
            return <Navigate to='/'/>
        }
    

}
const Private=styled.div`
    height: 100%;
`


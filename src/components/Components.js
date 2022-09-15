import styled from "styled-components";
 

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

export {Button,Input}
import { useState } from "react"
import styled from "styled-components"
import { Button, Input, ButtonWrapper } from "./Components"
import { register } from "../services/progamers";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function handleRegister (e) {
        e.preventDefault();

        if (data.password !== data.ConfirmPassword) return alert('A senha não confere');

        delete data.ConfirmPassword
        
        register(data).then(() => {
            alert('Cadastro realizado com sucesso!')
            navigate('/');
        }).catch(res => {
            alert(res.response.data)
        });
    }

    return (
        <Container>
            <LogoName>ProGamers</LogoName>
            {/* LOGO */}

            <Form onSubmit={handleRegister} >
                <Input
                    placeholder = 'Nome'
                    name = 'name'
                    type = 'text'
                    value = {data.name}
                    onChange = {updateData}
                    required
                ></Input>
    
                <Input
                    placeholder='E-mail'
                    name = 'email'
                    type = 'email'
                    value = {data.email}
                    onChange = {updateData}
                    required
                ></Input>

                <Input
                    placeholder='Senha'
                    name = 'password'
                    type = 'password'
                    value = {data.password}
                    onChange = {updateData}
                    required
                ></Input>

                <Input
                    placeholder='Confirmar senha'
                    name = 'ConfirmPassword'
                    type = 'password'
                    value = {data.ConfirmPassword}
                    onChange = {updateData}
                    required
                ></Input>
                
                <NewButton type='submit'>Cadastrar</NewButton>
            </Form>

            <Link to = '/'>
                <HasLogin>Já tem cadastro? Entre agora! </HasLogin>
            </Link>

        </Container>
    )
}

export const NewButton = styled(ButtonWrapper)`
    width: 75%;
    border-radius: 25px;

    margin-top: 25px;
`

export const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        margin-bottom: 15px;
        padding: 10px;

        font-size: 15px;
    }

`

export const HasLogin = styled.span`
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
`

export const Container = styled.div`
    max-width: 500px;
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 0 auto;

    a {
        margin-top: 25px;
    }
`

export const LogoName = styled.span`
    color: #ffffff;

    font-family: 'Urbanist', sans-serif;
    font-weight: 700;
    font-size: 44px;

    margin-bottom: 50px;
`

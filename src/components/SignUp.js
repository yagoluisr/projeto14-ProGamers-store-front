import { useState } from "react"
import styled from "styled-components"
import { Button, Input } from "./Components"

export default function SignUp() {
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

    console.log(data)


    return (
        <Container>
            <LogoName>ProGamers</LogoName>
            {/* LOGO */}

            <Form>
                <Input
                    placeholder = 'Nome'
                    name = 'name'
                    type = 'text'
                    value = {data.name}
                    onChange = {updateData}
                    //required
                ></Input>
    
                <Input
                    placeholder='E-mail'
                    name = 'email'
                    type = 'email'
                    value = {data.email}
                    onChange = {updateData}
                    //required
                ></Input>

                <Input
                    placeholder='Senha'
                    name = 'password'
                    type = 'password'
                    value = {data.password}
                    onChange = {updateData}
                    //required
                ></Input>
                
                <Button type='submit' >Cadastrar</Button>
            </Form>
        </Container>
    )
}

const Form = styled.form`
    input {
        margin-bottom: 15px;
        padding: 10px;

        font-size: 15px;
    }

`

const Container = styled.div`
    max-width: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const LogoName = styled.span`
    color: #ffffff;

    //font-family: 'Urbanist', sans-serif;
    font-weight: 700;
    font-size: 44px;
`
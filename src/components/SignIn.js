import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../contexts/User.context";
import { login } from "../services/progamers";
import { Input } from "./Components";
import { Container, Form, HasLogin, LogoName, NewButton } from "./SignUp";

export default function SignIn() {
    const { setToken } = useContext(UserContext);

    const navigate = useNavigate();

    const [data, setData] = useState({
        email:'',
        password:''
    });

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function handleRegister (e) {
        e.preventDefault();

        login(data).then((res) => {
            setToken(res.data)
            navigate('/home');
        }).catch(res => {
            alert(res.response.data)
        });
    }

    return (
        <Container>
                <LogoName>ProGamers</LogoName>

                <Form onSubmit={handleRegister} >
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
                
                <NewButton type='submit'>Login</NewButton>

                <Link to = '/'>
                    <HasLogin> Primeira vez? Cadastre-se! </HasLogin>
                </Link>
            </Form>
        </Container>
    )
}
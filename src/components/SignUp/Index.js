import React, { useState } from 'react';
import { Container, SignUpLink, Form, Input, Button, Title } from "../SignIn/Styles";
import { signUp } from "../../services/api";
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({name: '', email: '', password: '', repeat_password: ''});

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();

        const promise = signUp({...formData});

        promise.then(() => {
            navigate('/');
        }).catch(err => alert(err));
    }

    return (
        <Container>
            <Title>MyWallet</Title>
            <Form onSubmit={handleSubmit}>
                <Input onChange={handleChange} name='name' placeholder='Nome' type="text" />
                <Input onChange={handleChange} name='email' placeholder='E-mail' type="email" />
                <Input onChange={handleChange} name='password' placeholder='Senha' type="password" />
                <Input onChange={handleChange} name='repeat_password' placeholder='Confirme a senha' type="password" />
                <Button >Cadastrar</Button>
            </Form>
            <SignUpLink to="/" >Já tem uma conta? Entre agora!</SignUpLink>
        </Container>
  );
}

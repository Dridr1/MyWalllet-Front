import React, { useContext, useEffect, useState } from 'react';
import { Container, Title, Form, Input, Button, SignUpLink } from './Styles';
import { signIn } from '../../services/api';
import AuthContext from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({email: '', password: ''});

    const {setToken} = useContext(AuthContext);

    const handleChange = e => {
        setLoginData({...loginData, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        const promise = signIn({...loginData});
        promise.then( ans => {
            setToken(ans.data);
            localStorage.setItem('user', JSON.stringify(ans.data));
            navigate('/home');
        } ).catch(err => console.log(err));
    }

    useEffect(() => {
        const userLocal = localStorage.getItem('user');
        if( userLocal !== null){
            const filtered = JSON.parse(userLocal);
            setToken(filtered);
            navigate('/home');
        }
    }, [navigate, setToken])


    return (
        <Container>
            <Title>MyWallet</Title>
            <Form onSubmit={handleSubmit}>
                <Input onChange={handleChange} name='email' placeholder='E-mail' type="email" />
                <Input onChange={handleChange} name='password' placeholder='Senha' type="password" />
                <Button>Entrar</Button>
            </Form>
            <SignUpLink to="/sign-up">Primeira vez? Cadastre-se!</SignUpLink>
        </Container>
    );
}

import React from 'react';
import { Container, Title, Form, Input, Button, SignUpLink } from './Styles';
export default function SignIn() {
    return (
        <Container>
            <Title>MyWallet</Title>
            <Form>
                <Input placeholder='E-mail' type="email" />
                <Input placeholder='Senha' type="password" />
                <Button>Entrar</Button>
            </Form>
            <SignUpLink to="/sign-in">Primeira vez? Cadastre-se!</SignUpLink>
        </Container>
    );
}

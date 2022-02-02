import React from 'react';
import { Container, SignUpLink, Form, Input, Button, Title } from "../SignIn/Styles";

export default function SignUp() {
    return (
        <Container>
            <Title>MyWallet</Title>
            <Form>
                <Input placeholder='Nome' type="text" />
                <Input placeholder='E-mail' type="email" />
                <Input placeholder='Senha' type="password" />
                <Input placeholder='Confirme a senha' type="password" />
                <Button >Cadastrar</Button>
            </Form>
            <SignUpLink to="/" >Já tem uma conta? Entre agora!</SignUpLink>
        </Container>
  );
}

import React from 'react';
import { Container, SubTitle } from '../NewEntry/Styles';
import { Input, Button, Form } from '../SignIn/Styles';
export default function NewExit() {
    return (
        <Container>
            <SubTitle>
                <h2>Nova saída</h2>
            </SubTitle>
            <Form>
                <Input placeholder='Valor' type='text' />
                <Input placeholder='Descrição' type='text' />
                <Button>Salvar saída</Button>
            </Form>
        </Container>
    );
}

import React from 'react';
import { Form, Input, Button } from '../SignIn/Styles';
import {Container, SubTitle } from './Styles';

export default function NewEntry() {
    return (
        <Container>
            <SubTitle>
                <h2>Nova entrada</h2>
                </SubTitle>
            <Form>
                <Input placeholder='Valor' type='text' />
                <Input placeholder='Descrição' type='text' />
                <Button>Salvar entrada</Button>
            </Form>
        </Container>
    );
}

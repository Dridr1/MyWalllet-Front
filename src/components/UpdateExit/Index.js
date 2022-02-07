import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';
import MovementIdContext from '../../contexts/movementIDContext';
import { updateMovement } from '../../services/api';
import { Container, SubTitle } from '../NewEntry/Styles';
import {Form, Input, Button } from '../SignIn/Styles';

export default function UpdateExit() {
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);
    const { movementID } = useContext(MovementIdContext);
    const [entryData, setEntryData] = useState({ description: '', value: '', type: 'exit' });

    const handleChange = e => {
        setEntryData({ ...entryData, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const body = entryData;
        body.value = body.value.replace(',', '.');
        const promise = updateMovement(body, token, movementID);
        promise.then(() => {
            navigate('/home');
        }).catch(err => console.log(err));
    }

    return (
        <Container>
            <SubTitle>
                <h2>Editar saída</h2>
            </SubTitle>
            <Form onSubmit={handleSubmit}>
                <Input onChange={handleChange} name='value' placeholder='Valor' type='text' />
                <Input onChange={handleChange} name='description' placeholder='Descrição' type='text' />
                <Button>Atualizar saída</Button>
            </Form>
        </Container>
    );
}
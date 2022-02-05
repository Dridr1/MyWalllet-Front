import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';
import { newMovement } from '../../services/api';
import { Form, Input, Button } from '../SignIn/Styles';
import { Container, SubTitle } from './Styles';

export default function NewEntry() {
    const navigate = useNavigate();

    const { token } = useContext(AuthContext);

    const [entryData, setEntryData] = useState({ description: '', value: '', type: 'entry' });

    const handleChange = e => {
        setEntryData({ ...entryData, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        const body = entryData;
        body.value = body.value.replace(',', '.');
        const promise = newMovement(body, token);

        promise.then(() => {
            navigate('/home');
        }).catch(err => console.log(err));
    }

    return (
        <Container>
            <SubTitle>
                <h2>Nova entrada</h2>
            </SubTitle>
            <Form onSubmit={handleSubmit}>
                <Input onChange={handleChange} name='value' placeholder='Valor' type='text' />
                <Input onChange={handleChange} name='description' placeholder='Descrição' type='text' />
                <Button>Salvar entrada</Button>
            </Form>
        </Container>
    );
}

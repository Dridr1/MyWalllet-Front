import styled from "styled-components";
import {Link} from "react-router-dom";
const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 36px;
    background: #8C11BE;
`;

const Title = styled.h1`
    font-weight: normal;
    font-size: 32px;
    line-height: 50px;
    font-family: "Saira Stencil One";
    color: white;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-direction: center;
    align-items: center;
    gap: 13px;
`;

const Input = styled.input`
    width: 326px;
    height: 58px;
    padding: 18px 15px;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    border-radius: 5px;
    border: none;
    ::placeholder{
        color: #000000;
    }
`;

const Button =  styled.button`
    width: 326px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: #A328D6;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
`;

const SignUpLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    font-family: "Raleway";
`;


export {
    Container,
    Title,
    Form,
    Input,
    Button,
    SignUpLink
}
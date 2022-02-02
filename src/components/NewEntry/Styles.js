import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #8C11BE;
    align-items: center;
`;

const SubTitle = styled.div`
    width: 326px;
    margin: 25px 0 40px 0;
    h2{
        font-family: "Raleway";
        text-align: left;
        color: white;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
    }
`;

export {
    Container,
    SubTitle
}
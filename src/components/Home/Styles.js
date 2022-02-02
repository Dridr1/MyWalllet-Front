import styled from "styled-components";

const HomeContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #8C11BE;
`;

const Header = styled.header`
    width: 326px;
    display: flex;
    justify-content: space-between;
    h2{
        font-weight: bold;
        font-size: 26px;
        line-height: 31px;
        color: white;
        font-family: "Raleway"
    }
`;

const Registers = styled.div`
    width: 326px;
    height: 446px;
    background: white;
    border-radius: 5px;
    margin-top: 26px;
`;

const Options = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 13px;
    button{
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-between; 
        width: 155px;
        height: 114px;
        background: #A328D6;
        border-radius: 5px;
        border: none;
        padding: 10px;
        span{
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
            text-align: left;
            color: white;
        }
    }
`;

export {
    HomeContainer,
    Header,
    Registers,
    Options
}
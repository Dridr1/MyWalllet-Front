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
    padding: 23px 12px 10px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: 'Raleway';
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    position: relative;
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

const MovContainer = styled.div`
    height: 92%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const Mov = styled.div`
    height: 25px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const MovInfo = styled.div`
    display: flex;
    gap: 7px;
    width: auto;
    span{
        color: #C6C6C6;
        font-size: 16px;
        line-height: 19px;
    }
    p{
        font-size: 16px;
        line-height: 19px;    
        color: #000000;
    }
`;

const MovValue = styled.div`
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: ${props => props.entry ? '#5CAE13' : '#C70000'};
`;

const NoMovements = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Balance = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const BalanceLegend = styled.div`
    font-size: 17px;
    line-height: 20px;
    color: #000000;
    font-weight: 700;
`;

const BalanceValue = styled.div`
    font-size: 17px;
    line-height: 20px;
    text-align: right;
    color: #03AC00;
`;

export {
    HomeContainer,
    Header,
    Registers,
    Options,
    MovContainer,
    Mov,
    MovInfo,
    MovValue,
    NoMovements,
    Balance,
    BalanceLegend,
    BalanceValue
}
import React, { useContext, useEffect, useState } from 'react';
import { HomeContainer, Header, Registers, Options, Mov, MovInfo, MovValue, NoMovements, MovContainer, Balance, BalanceLegend, BalanceValue } from "./Styles";
import { useNavigate } from 'react-router-dom';
import { deleteMovement, getMovements } from '../../services/api';
import AuthContext from "../../contexts/authContext"
import MovementIdContext from '../../contexts/movementIDContext';

export default function Home() {
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);
    const { setMovementID } = useContext(MovementIdContext);
    const [homeData, setHomeData] = useState({ name: '', balance: 0, movements: [] });

    const loadMovements = () => {
        const promise = getMovements(token);

        promise.then(ans => {
            setHomeData(ans.data);
        }
        ).catch(err => {
            console.log(err);
            navigate('/');
        })
    }

    const goToUpdateEntry = id => {
        setMovementID(id);
        navigate('/update-entry');
    }

    const goToUpdateExit = id => {
        setMovementID(id);
        navigate('/update-exit');
    }

    const deleteMov = id => {
        if(window.confirm("Você quer mesmo deletar essa movimentação?")){
            deleteMovement(token, id);
        }
        loadMovements();
    }

    useEffect(loadMovements, [token, navigate]);

    return (
        <HomeContainer>
            <Header>
                <h2>Olá, {homeData.name}</h2>
                <svg onClick={() => {
                    localStorage.removeItem('user');
                    navigate('/');
                }} width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.21053 24C0.889475 24 0.581573 23.8736 0.354555 23.6485C0.127537 23.4235 0 23.1183 0 22.8V1.2C0 0.88174 0.127537 0.576515 0.354555 0.351472C0.581573 0.126428 0.889475 0 1.21053 0H18.1579C18.4789 0 18.7868 0.126428 19.0139 0.351472C19.2409 0.576515 19.3684 0.88174 19.3684 1.2V4.8H16.9474V2.4H2.42105V21.6H16.9474V19.2H19.3684V22.8C19.3684 23.1183 19.2409 23.4235 19.0139 23.6485C18.7868 23.8736 18.4789 24 18.1579 24H1.21053ZM16.9474 16.8V13.2H8.47368V10.8H16.9474V7.2L23 12L16.9474 16.8Z" fill="white" />
                </svg>
            </Header>

            <Registers>
                <MovContainer>
                    {
                        homeData.movements.length === 0
                            ?
                            <NoMovements>Não há registros de <br /> entrada ou saída</NoMovements>
                            :
                            homeData.movements.map(movement => (
                                <Mov key={movement._id}>
                                    <MovInfo>
                                        <span>{movement.date}</span>
                                        {movement.type === 'entry'
                                            ?
                                            <p onClick={() => { goToUpdateEntry(movement._id) }}>{movement.description}</p>
                                            :
                                            <p onClick={() => { goToUpdateExit(movement._id) }}>{movement.description}</p>
                                        }
                                    </MovInfo>
                                    <MovValue entry={movement.type === 'entry' ? true : false}>{String(parseFloat(movement.value).toFixed(2)).replace('.', ',')} <span onClick={() => deleteMov(movement._id)}>X</span></MovValue>
                                </Mov>
                            ))
                    }
                </MovContainer>
                <Balance>
                    <BalanceLegend>SALDO</BalanceLegend>
                    <BalanceValue positive={homeData.balance > 0 ? true : false}>{homeData.balance}</BalanceValue>
                </Balance>
            </Registers>

            <Options>
                <button onClick={() => navigate("/new-entry")}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9922 11.7188H13.2812V8.00781C13.2812 7.90039 13.1934 7.8125 13.0859 7.8125H11.9141C11.8066 7.8125 11.7188 7.90039 11.7188 8.00781V11.7188H8.00781C7.90039 11.7188 7.8125 11.8066 7.8125 11.9141V13.0859C7.8125 13.1934 7.90039 13.2812 8.00781 13.2812H11.7188V16.9922C11.7188 17.0996 11.8066 17.1875 11.9141 17.1875H13.0859C13.1934 17.1875 13.2812 17.0996 13.2812 16.9922V13.2812H16.9922C17.0996 13.2812 17.1875 13.1934 17.1875 13.0859V11.9141C17.1875 11.8066 17.0996 11.7188 16.9922 11.7188Z" fill="white" />
                        <path d="M12.5 1.5625C6.45996 1.5625 1.5625 6.45996 1.5625 12.5C1.5625 18.54 6.45996 23.4375 12.5 23.4375C18.54 23.4375 23.4375 18.54 23.4375 12.5C23.4375 6.45996 18.54 1.5625 12.5 1.5625ZM12.5 21.582C7.48535 21.582 3.41797 17.5146 3.41797 12.5C3.41797 7.48535 7.48535 3.41797 12.5 3.41797C17.5146 3.41797 21.582 7.48535 21.582 12.5C21.582 17.5146 17.5146 21.582 12.5 21.582Z" fill="white" />
                    </svg>
                    <span>Nova <br /> entrada</span>
                </button>
                <button onClick={() => navigate("/new-exit")}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9922 11.7188H8.00781C7.90039 11.7188 7.8125 11.8066 7.8125 11.9141V13.0859C7.8125 13.1934 7.90039 13.2812 8.00781 13.2812H16.9922C17.0996 13.2812 17.1875 13.1934 17.1875 13.0859V11.9141C17.1875 11.8066 17.0996 11.7188 16.9922 11.7188Z" fill="white" />
                        <path d="M12.5 1.5625C6.45996 1.5625 1.5625 6.45996 1.5625 12.5C1.5625 18.54 6.45996 23.4375 12.5 23.4375C18.54 23.4375 23.4375 18.54 23.4375 12.5C23.4375 6.45996 18.54 1.5625 12.5 1.5625ZM12.5 21.582C7.48535 21.582 3.41797 17.5146 3.41797 12.5C3.41797 7.48535 7.48535 3.41797 12.5 3.41797C17.5146 3.41797 21.582 7.48535 21.582 12.5C21.582 17.5146 17.5146 21.582 12.5 21.582Z" fill="white" />
                    </svg>
                    <span>Nova <br /> saída</span>
                </button>
            </Options>
        </HomeContainer>
    );
}

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from './SignIn/Index';
import "../Styles/style.css";
import SignUp from './SignUp/Index';
import Home from './Home/Index';
import NewEntry from './NewEntry/Index';
import NewExit from './NewExit/Index';
import AuthContext from '../contexts/authContext';
import MovementIdContext from "../contexts/movementIDContext"
import UpdateEntry from './UpdateEntry/Index';
import UpdateExit from "./UpdateExit/Index";

export default function App() {

    const [token, setToken] = useState();
    const [movementID, setMovementID] = useState();

    return (
        <BrowserRouter>
            <MovementIdContext.Provider value={{ movementID, setMovementID }}>
                <AuthContext.Provider value={{ token, setToken }}>
                    <Routes>
                        <Route path="/" element={<SignIn />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/new-entry" element={<NewEntry />} />
                        <Route path="/new-exit" element={<NewExit />} />
                        <Route path='/update-entry' element={<UpdateEntry />} />
                        <Route path='/update-exit' element={<UpdateExit />} />
                    </Routes>
                </AuthContext.Provider>
            </MovementIdContext.Provider>
        </BrowserRouter>
    );
}
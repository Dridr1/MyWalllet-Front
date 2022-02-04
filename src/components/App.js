import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from './SignIn/Index';
import "../Styles/style.css";
import SignUp from './SignUp/Index';
import Home from './Home/Index';
import NewEntry from './NewEntry/Index';
import NewExit from './NewExit/Index';
import AuthContext from '../contexts/authContext';

export default function App() {

    const [token, setToken] = useState();

    return (
        <BrowserRouter>
            <AuthContext.Provider value={{ token, setToken }}>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/new-entry" element={<NewEntry />} />
                    <Route path="/new-exit" element={<NewExit />} />
                </Routes>
            </AuthContext.Provider>
        </BrowserRouter>
    );
}
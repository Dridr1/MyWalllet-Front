import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from './SignIn/Index';
import "../Styles/style.css";
import SignUp from './SignUp/Index';
import Home from './Home/Index';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/home" element={<Home/>}/>
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}
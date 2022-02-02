import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from './SignIn/Index';
import "../Styles/style.css";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
            </Routes>
        </BrowserRouter>
    );
}

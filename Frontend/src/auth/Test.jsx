import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    // NavLink,
  } from "react-router-dom";
import LoginPage from './pages/Login/LoginPage';
import Signuppage from './pages/Signup/Signuppage';
const Test = () => {
  return (
    <>
        <Routes>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/signup" element={<Signuppage />}/>
        </Routes>
    </>
  )
}

export default Test
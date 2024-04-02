import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Buyer from "./Customer/Buyer";
import Vendor from "./VENDOR/Vendor";
import LoginPage from './auth/pages/Login/LoginPage';
import Signuppage from './auth/pages/Signup/Signuppage';

function App() {
  return (
    <div >   
     {/* <Vendor/> */}
      {/* <Buyer /> */}
      <LoginPage/>
      {/* <Signuppage/> */}
      
    </div>
  );
}

export default App;

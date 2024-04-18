import "./App.css";
import {
  BrowserRouter as Router,
  // Routes,
  // Route,
  // NavLink,
} from "react-router-dom";
import Buyer from "./Customer/Buyer";
import Vendor from "./VENDOR/Vendor";
import Test from "./auth/Test";
import LoginPage from "./auth/pages/Login/LoginPage";
// import LoginPage from './auth/pages/Login/LoginPage';
// import Login from "./auth/pages/login/Login";
// import Footer from "./Customer/components/Footer/Footer";
// import Login from './auth/pages/login/Login';
// import login from './auth/pages/login/Login';

function App() {
  return (
    <>
      <Router>
        <Buyer />
        {/* <Vendor /> */}
        {/* <Test /> */}
        {/* If u want to run Login & signup page then comment buyer & vendor camponents. All the sign up & login page call in text component*/}
        {/* If u want to run  buyer or vendor page u can comment out according to your needs*/}
      </Router>
    </>
  );
}

export default App;

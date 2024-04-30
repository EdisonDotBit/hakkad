import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";

const Router = () => (
    <>
        <Routes>
            <Route path="*" element={<Navigate to="/Home"/>} />
            <Route path="/Home" element={<LandingPage/>} />
            <Route path="/LoginPage" element={<Login/>} />
            <Route path="/SignUpPage" element={<Register/>} />
        </Routes>
    </>
);

export default Router;
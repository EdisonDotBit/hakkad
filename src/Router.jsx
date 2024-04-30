import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";

const Router = () => (
    <>
        <Routes>
            <Route path="" element={<LandingPage/>} />
            
        </Routes>
    </>
);

export default Router;
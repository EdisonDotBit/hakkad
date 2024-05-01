import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import DashboardContent from "./views/DashboardContent";
import Quiz from "./views/Quiz";
import Leaderboard from "./views/Leaderboard";
import StudentLayout from "./Layout/StudentLayout";

const Router = () => (
  <>
    <Routes>
      <Route path="*" element={<Navigate to="/Home" />} />
      <Route path="/Home" element={<LandingPage />} />
      <Route path="/LoginPage" element={<Login />} />
      <Route path="/SignUpPage" element={<Register />} />

      <Route path="/Student" element={<StudentLayout />}>
        <Route path="" element={<DashboardContent />} />
        <Route path="Dashboard" element={<DashboardContent />} />
        <Route path="Quiz" element={<Quiz />} />
        <Route path="Leaderboard" element={<Leaderboard />} />
      </Route>
    </Routes>
  </>
);

export default Router;

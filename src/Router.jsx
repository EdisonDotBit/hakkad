import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import DashboardContent from "./views/DashboardContent";
import Quiz from "./views/Quiz";
import Leaderboard from "./views/Leaderboard";
import StudentLayout from "./Layout/StudentLayout";
import Contact from "./components/Contact.jsx";
import Quiz1 from "./components/Quiz1.jsx";
import Quiz2 from "./components/Quiz2.jsx";
import Lesson1 from "./components/Lesson1.jsx";
import Lesson2 from "./components/Lesson2.jsx";
import Lesson3 from "./components/Lesson3.jsx";
import EditProfile from "./components/EditProfile.jsx";
import { AuthProvider } from "./Hooks/useAuth.jsx";
import { ProtectedRoute } from "./ProtectedRoute.jsx";

const Router = () => (
  <>
    <AuthProvider>
      <Routes>
        <Route path="*" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<LandingPage />} />
        <Route path="/LoginPage" element={<Login />} />
        <Route path="/SignUpPage" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Profile" element={<EditProfile />} />

        {/* Lessons */}
        <Route path="/Lesson1" element={<Lesson1 />} />
        <Route path="/Lesson2" element={<Lesson2 />} />
        <Route path="/Lesson3" element={<Lesson3 />} />

        <Route path="/Student" element={<StudentLayout />}>
          <Route path="" element={<DashboardContent />} />
          <Route
            path="Dashboard"
            element={
              <ProtectedRoute>
                <DashboardContent />
              </ProtectedRoute>
            }
          />
          <Route path="Quiz" element={<Quiz />} />
          <Route path="Leaderboard" element={<Leaderboard />} />

          <Route path="Quiz1" element={<Quiz1 />} />
          <Route path="Quiz2" element={<Quiz2 />} />
        </Route>
      </Routes>
    </AuthProvider>
  </>
);

export default Router;

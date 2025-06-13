import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import HomeLayout from "./layout/HomeLayout";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./components/404";

export default function App()
{
  return (
    <Routes>
      {/* Public route */}
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/docs" element={<ChatBot />} /> */}
      </Route>

      {/* Private Route */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/dashboard/profile" element={<h1>Profile</h1>} />
        <Route path="/dashboard/settings" element={<h1>Settings</h1>} />
        <Route path="/dashboard/challenges" element={<h1>Challenges</h1>} />
        <Route path="/dashboard/challenges/:id" element={<h1>Challenge</h1>} />
        <Route path="/dashboard/challenges/:id/leaderboard" element={<h1>Leaderboard</h1>} />
        <Route path="/dashboard/challenges/:id/leaderboard/:id" element={<h1>Leaderboard</h1>} />
        <Route path="/dashboard/challenges/:id/leaderboard/:id/profile" element={<h1>Profile</h1>} /> */}
      </Route>

      {/* Error route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
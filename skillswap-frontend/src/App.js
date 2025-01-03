// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignupLogin from "./pages/SignupLogin";
import Dashboard from "./pages/Dashboard";
import ProjectDetails from "./pages/ProjectDetails";
import Profile from "./pages/Profile";
import Matchmaking from "./pages/Matchmaking";
import Reviews from "./pages/Reviews";
import Chat from "./pages/Chat";
import Followers from "./pages/Followers";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup-login" element={<SignupLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/matchmaking" element={<Matchmaking />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/followers" element={<Followers />} />
      </Routes>
    </Router>
  );
};

export default App;


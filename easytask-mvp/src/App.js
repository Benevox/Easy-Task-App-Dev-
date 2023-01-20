import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginLaunch from "./components/common/LoginLaunch";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Onboarding from './pages/onboarding/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLaunch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

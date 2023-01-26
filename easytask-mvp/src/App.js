import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginLaunch from "./components/common/LoginLaunch";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Onboarding from './pages/onboarding/index';
import OnboardOne from "./pages/onboarding/OnboardOne";
import OnboardTwo from "./pages/onboarding/OnboardTwo";
import OnboardThree from "./pages/onboarding/OnboardThree";
import Dashboard from "./pages/dashboard/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLaunch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/onboarding/one" element={<OnboardOne />} />
        <Route path="/onboarding/two" element={<OnboardTwo />} />
        <Route path="/onboarding/three" element={<OnboardThree />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginLaunch from "./components/common/LoginLaunch";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Onboarding from "./pages/onboarding/index";
import OnboardOne from "./pages/onboarding/OnboardOne";
import OnboardTwo from "./pages/onboarding/OnboardTwo";
import OnboardThree from "./pages/onboarding/OnboardThree";
import Dashboard from "./pages/dashboard/index";
import ProtectedRoute from "./components/ProtectedRoute";
import PostJobs from './pages/post job/index';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLaunch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/onboarding"
          element={
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          }
        />
        <Route
          path="/onboarding/one"
          element={
            <ProtectedRoute>
              <OnboardOne />
            </ProtectedRoute>
          }
        />
        <Route
          path="/onboarding/two"
          element={
            <ProtectedRoute>
              <OnboardTwo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/onboarding/three"
          element={
            <ProtectedRoute>
              <OnboardThree />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/postjob"
          element={
           <ProtectedRoute>
              <PostJobs />
           </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

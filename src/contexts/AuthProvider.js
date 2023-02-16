import React, { useState } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const login = async (data) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}api/auth/login`, data);
      const { _id } = response.data;

      if (_id) {
        setIsAuthenticated(true);
        setUser(response.data);
        return "Authorized";
      } else {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => setIsAuthenticated(false);

  const signInNewUser = (user) => {
    setIsAuthenticated(true);
    setUser(user);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, user, signInNewUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

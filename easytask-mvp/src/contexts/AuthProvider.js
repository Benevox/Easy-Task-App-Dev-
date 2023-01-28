import React, { useState } from "react";
import AuthContext from "./AuthContext";
import swal from "sweetalert";

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const login = async (data) => {
    try {
      const response = await fetch(
        "https://precious-macaulay-super-duper-rotary-gw57j5w5vr92vvj4-8000.preview.app.github.dev/api/auth/login",
        {
          method: "POST",
          body: JSON.stringify(data),
          redirect: "follow",
        }
      );
      if (response.status === 200) {
        setIsAuthenticated(true);
        setUser(response.body);
        return true;
      } else {
        swal(response.body);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

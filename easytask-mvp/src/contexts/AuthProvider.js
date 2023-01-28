import React, { useState } from "react";
import AuthContext from "./AuthContext";


const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const login = async (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    var response = await fetch(
      "https://precious-macaulay-super-duper-rotary-gw57j5w5vr92vvj4-8000.preview.app.github.dev/api/auth/login",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => JSON.parse(result))
      .catch((error) => console.error(error));
      
      if (response._id) {
          setIsAuthenticated(true);
          setUser(response);
          return 'authorised';
      } else {
        return response;
      }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

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

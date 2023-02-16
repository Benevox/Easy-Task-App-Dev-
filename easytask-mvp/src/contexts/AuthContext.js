import { createContext } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
    login: () => { },
    logout: () => { },
    signInNewUser: () => { },
    user: {}
});

export default AuthContext;
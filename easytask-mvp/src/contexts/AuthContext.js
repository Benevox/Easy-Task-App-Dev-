import { createContext } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
    login: () => { },
    logout: () => { },
    user: {}
});

export default AuthContext;
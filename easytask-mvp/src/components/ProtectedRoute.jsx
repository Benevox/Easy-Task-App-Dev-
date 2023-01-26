
import { Component, useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { Route, useNavigate } from 'react-router-dom';


const ProtectedRoute = ({ render, ...rest }) => {
    const { user, isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate()
    return (<Route {...rest} render={(props) => {
        if (isAuthenticated) {
            return render(props);
        } else {
            navigate("/login");
        }
    }} />);
}
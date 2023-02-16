import React from "react";
import logo from '../../assets/images/logo.png'

function LaunchScreen() {
    return (<div className="container bg-primary-100 h-screen w-screen grid place-items-center">
        <div>
            <img src={logo} alt="Easytask logo" className="w-56 h-12" />
        </div>
    </div>);
}

export default LaunchScreen;
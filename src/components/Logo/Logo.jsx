import React from 'react';
import "./logo.css"
import logo from "../../assets/logo.jpg"
import {useNavigate} from "react-router-dom";


const Logo = () => {
    const navigate = useNavigate();
    return (
        <div onClick={e => navigate("/")} className={"logo"}>
            <img className={"logo__img"} src={logo} alt={"logo"} />
            <p className={"logo__title"}>SpeakLab.by</p>
        </div>
    );
};

export default Logo;
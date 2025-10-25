import React, {useContext} from 'react';
import Logo from "../Logo/Logo";
import AuthButtons from "../AuthButtons/AuthButtons";
import "./header.css"
import {ModalsContext} from "../../context/ModalsContext";

const Header = () => {


    return (
        <div className={"header"}>
            <div className={"page-wrapper"}>
                <div className={"header__inner"}>
                    <Logo />
                    <AuthButtons />
                </div>
            </div>
        </div>
    );
};

export default Header;
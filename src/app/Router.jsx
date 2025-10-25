import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {adminPages, onlyUserPages, pages} from "../config/Pages";
import {UserContext} from "../context/UserContext";
import {decodeToken} from "../utils/tokens";

const Router = () => {
    const {isAuth} = useContext(UserContext)
    return (
        <Routes>
            {
                pages.map((elem, index) => (
                    <Route key={index} {...elem} />
                ))
            }
            {
                isAuth && onlyUserPages.map((elem, index) => (
                    <Route key={index} {...elem} />
                ))
            }
            {
                isAuth && decodeToken().role === "Admin" && adminPages.map((elem, index) => (
                    <Route key={index} {...elem} />
                ))
            }
        </Routes>
    );
};

export default Router;
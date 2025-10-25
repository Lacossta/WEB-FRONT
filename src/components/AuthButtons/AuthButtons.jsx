import React, {useContext, useState} from 'react';
import Button from "../ui/Button/Button";
import "./authButtons.css"
import {ModalsContext} from "../../context/ModalsContext";
import avatar from "../../assets/profile.svg"
import btn from "../../assets/btn.svg"
import {$authHost, logout} from "../../api/API";
import {decodeToken, setTokens} from "../../utils/tokens";
import {UserContext} from "../../context/UserContext";
import {useNavigate} from "react-router-dom";

const AuthButtons = () => {
    const {isLoginShown,
        setLoginShown,
        isRegShown,
        setRegShown} = useContext(ModalsContext)

    const {isAuth, setAuth} = useContext(UserContext)
    const [isMenuOpened, setMenuOpened] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpened(!isMenuOpened)
    }

    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout().then(e => {
            $authHost.defaults.headers['Authorization'] = '';
            setTokens("", "");
            setAuth(false);
            setMenuOpened(false);
            navigate("/");
        });
    }

    const handleAdmin = async () => {
        navigate("/admin")
        setMenuOpened(false)
    }

    const handleProfile = () => {
        navigate("/profile")
        setMenuOpened(false)
    }


    return (
        <div className={"auth-buttons"}>
            {
                !isAuth && <>
                    <Button onClick={e => setLoginShown(true)} variant={"outlined"}>Войти</Button>
                    <Button onClick={e => setRegShown(true)} >Зарегистрироваться</Button>
                </>
            }
            {
                isAuth && <>
                    <div className={"profile-wrapper"}>
                        <div onClick={handleMenuOpen} className={"profile"}>
                            <img className={"profile__deco"} src={btn} alt={"btn"}/>
                            <img className={"profile__img"} src={avatar} alt={"avatar"}/>
                        </div>
                        {
                            isMenuOpened && (
                                <div className={"header-menu"}>
                                    <div onClick={handleProfile} className={"header-menu__item"}>
                                        Профиль
                                    </div>
                                    <hr className={"line-gray"}/>
                                    {
                                        decodeToken().role === "Admin" && <>
                                            <div onClick={handleAdmin} className={"header-menu__item"}>
                                                Админ панель
                                            </div>
                                            <hr className={"line-gray"}/>
                                        </>
                                    }
                                    <div onClick={handleLogout} className={"header-menu__item"}>
                                        Выйти
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </>
            }
        </div>
    );
};

export default AuthButtons;
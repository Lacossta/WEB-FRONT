import React, {useContext, useEffect, useState} from 'react';
import "./auth.css"
import Modal from "../Modal";
import Input from "../../ui/Input/Input";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../../context/UserContext";
import {ModalsContext} from "../../../context/ModalsContext";
import * as Yup from "yup";
import {useFormik} from "formik";
import {login} from "../../../api/API";
import {setTokens} from "../../../utils/tokens";

const LoginModal = () => {
    const navigate = useNavigate();

    const {setAuth} = useContext(UserContext);
    const [error, setError] = useState("")

    const {isRegShown, setRegShown, isLoginShown, setLoginShown} = useContext(ModalsContext)

    const validateSchema = Yup.object().shape({
        login: Yup.string().required("Введите логин/почту"),
        password: Yup.string().required("Введите пароль"),
    });

    const handleMenuChange = () => {
        setRegShown(true)
        setLoginShown(false)
    }

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema: validateSchema,
        validateOnChange: false,
        validateOnMount: false,
        validateOnBlur: false,
        onSubmit: async (values, { resetForm }) => {
            const data = await login({
                login: values.login,
                password: values.password,
            })
            setError("")
            if(data.status !== 200) {
                setError(data?.data)
            } else if(data?.data?.access_token) {
                setTokens(data.data.access_token, data.data.refresh_token)
                setLoginShown(false);
                setAuth(true);
                formik.resetForm()
            }
         },
    });

    useEffect(() => {
        if(formik.errors) {
            for(let key in formik.errors) {
                setError(formik.errors[key].toString())
                break;
            }
        }
    }, [formik.errors, ]);

    if(isLoginShown) return (
        <Modal setOpen={setLoginShown} title={"Авторизация"}>
            <form onSubmit={formik.handleSubmit}>
                <div className={"auth"}>
                    <div className={"auth__forms"}>
                        <Input
                            name={"login"}
                            onChange={formik.handleChange}
                            value={formik.values.login}
                            title={"Логин/почта"}
                            placeholder={"Введите логин или почту..."}/>
                        <Input
                            name={"password"}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            title={"Пароль"}
                            type={"password"}
                            placeholder={"Введите пароль..."}/>
                    </div>
                    <div className={"auth__info"}>
                        <p onClick={handleMenuChange} className={"auth__info-text"}>Еще нет аккаунта? Создать
                            аккаунт.</p>
                    </div>
                    {
                        !!error && <p className={"ui-error"}>
                            {error}
                        </p>
                    }
                    <button className={"auth__btn"}>Войти в аккаунт</button>
                </div>
            </form>
        </Modal>
    );
};

export default LoginModal;
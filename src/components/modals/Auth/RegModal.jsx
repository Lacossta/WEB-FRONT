import React, {useContext, useEffect, useState} from 'react';
import "./auth.css"
import Input from "../../ui/Input/Input";
import Modal from "../Modal";
import {ModalsContext} from "../../../context/ModalsContext";
import * as Yup from "yup";
import {useFormik} from "formik";
import {setTokens} from "../../../utils/tokens";
import {UserContext} from "../../../context/UserContext";
import {useNavigate} from "react-router-dom";
import {login, register} from "../../../api/API";
import DatePicker from "react-datepicker";

const RegModal = () => {
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const {setAuth} = useContext(UserContext);

    const {isRegShown, setRegShown, isLoginShown, setLoginShown} = useContext(ModalsContext)

    const validateSchema = Yup.object().shape({
        login: Yup.string().required("Введите логин"),
        email: Yup.string().email("Почта указана не верно"),
        password: Yup.string().required("Введите пароль"),
        firstName: Yup.string().required("Введите имя"),
        lastName: Yup.string().required("Введите фамилию"),
        phone: Yup.string().required("Введите телефон"),
        birthDate: Yup.string().required("Введите дату рождения"),
    });

    const handleMenuChange = () => {
        setRegShown(false)
        setLoginShown(true)
    }

    const formik = useFormik({
        initialValues: {
            login: '',
            email: '',
            password: '',
            repeatedPassword: '',
            firstName: '',
            lastName: '',
            phone: '',
            birthDate: null,
        },
        validationSchema: validateSchema,
        validateOnChange: false,
        validateOnMount: false,
        validateOnBlur: false,
        onSubmit: async (values, { resetForm }) => {
            if(values.repeatedPassword === values.password) {
                const data = await register({
                    ...values, birthDate: values.birthDate.toString()
                })
                setError("")
                if(data.status !== 200) {
                    setError(data?.data)
                } else if(data?.data?.access_token) {
                    setTokens(data.data.access_token, data.data.refresh_token)
                    setRegShown(false);
                    setAuth(true);
                    formik.resetForm()
                }
            } else {
                setError("Пароли не совпадают")
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




    if(isRegShown) return (
        <Modal setOpen={setRegShown} title={"Регистрация"}>
            <form onSubmit={formik.handleSubmit}>
                <div className={"auth"}>
                    <div className={"auth__forms"}>
                        <Input
                            name={"login"}
                            onChange={formik.handleChange}
                            value={formik.values.login}
                            title={"Логин"}
                            placeholder={"Введите логин..."}/>
                        <Input
                            name={"email"}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            title={"Почта"}
                            placeholder={"Введите почту..."}/>
                        <Input
                            name={"lastName"}
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            title={"Фамилия"}
                            placeholder={"Введите фамилию..."}/>
                        <Input
                            name={"firstName"}
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            title={"Имя"}
                            placeholder={"Введите имя..."}/>
                        <Input
                            name={"phone"}
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            title={"Телефон"}
                            placeholder={"Введите телефон..."}/>
                        <Input
                            title={"Дата рождения"}
                            inputProp={
                                <DatePicker
                                    selected={formik.values.birthDate}
                                    name={"date"}
                                    placeholderText={"Введите дату рождения"}
                                    className={"full-width"}
                                    disableFuture
                                    dateFormat="dd.MM.yyyy"
                                    onChange={e => {
                                       formik.setFieldValue("birthDate", new Date(e).getTime())
                                    }}
                                />
                            }
                            placeholder={"Введите дату рождения..."}/>
                        <Input
                            type={"password"}
                            name={"password"}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            title={"Пароль"}
                            placeholder={"Введите пароль..."}/>
                        <Input
                            name={"repeatedPassword"}
                            onChange={formik.handleChange}
                            value={formik.values.repeatedPassword}
                            type={"password"}
                            title={"Повторите пароль"}
                            placeholder={"Введите пароль повторно..."}/>
                    </div>
                    <div className={"auth__info"}>
                        <p className={"auth__info-text"} onClick={handleMenuChange}>Уже есть аккаунт? Войдите.</p>
                    </div>
                    {
                        !!error && <p className={"ui-error"}>{error}</p>
                    }
                    <button className={"auth__btn"}>Войти в аккаунт</button>
                </div>
            </form>
        </Modal>
    );
};

export default RegModal;
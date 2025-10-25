import React, {useEffect, useState} from 'react';
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import {changePassword} from "../../api/API";
import {useFormik} from "formik";
import * as Yup from "yup";
import useInfoPopup from "../../hooks/useInfoPopup";

const Security = () => {
    const [error, setError] = useState("")

    const validateSchema = Yup.object().shape({
        oldPassword: Yup.string().required("Введите старый пароль"),
        password: Yup.string().required("Введите новый пароль"),
        repeatedPassword: Yup.string().required("Повторите новый пароль"),
    });

    const {showInfoPopup} = useInfoPopup()

    const formik = useFormik({
        initialValues: {
            oldPassword: "",
            password: "",
            repeatedPassword: "",
        },
        enableReinitialize: true,
        validationSchema: validateSchema,
        validateOnChange: false,
        validateOnMount: false,
        validateOnBlur: false,
        onSubmit: async (values, { resetForm }) => {
            if(values.password === values.repeatedPassword) {
                changePassword({
                    oldPassword: values.oldPassword,
                    password: values.password
                }).then(e => {
                    if(e.status !== 200) {
                        setError(e.data)
                    } else {
                        setError("")
                        showInfoPopup("Пароль успешно изменен")
                    }
                })
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

    return (
        <div className={"security"}>
            <h2>Изменить пароль от аккаунта</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className={"security__inputs"}>
                    <Input value={formik.values.oldPassword}
                           onChange={formik.handleChange}
                           name={"oldPassword"}
                           type={"password"}
                           title={"Старый пароль"} placeholder={"Введите старый пароль"}/>
                    <Input value={formik.values.password}
                           onChange={formik.handleChange}
                           type={"password"}
                           name={"password"}
                           title={"Пароль"} placeholder={"Введите новый пароль"}/>
                    <Input
                        value={formik.values.repeatedPassword}
                        name={"repeatedPassword"}
                        type={"password"}
                        onChange={formik.handleChange}
                        title={"Повтор пароля"} placeholder={"Повторите новый пароль"}/>
                    <Button className={"main-info__btn"}>Сохранить</Button>
                    <p className={"ui-error"}>{error}</p>
                </div>
            </form>
        </div>)
};

export default Security;
import React, {useEffect, useState} from 'react';
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import {useFormik} from "formik";
import {register, updateUserInfo} from "../../api/API";
import {setTokens} from "../../utils/tokens";
import useFetch from "../../hooks/useFetch";
import useInfoPopup from "../../hooks/useInfoPopup";

const MainInfo = () => {
    const [error, setError] = useState("")
    const {data} = useFetch("/user/info", {}, false, true)
    const validateSchema = Yup.object().shape({
        firstName: Yup.string().required("Введите имя"),
        lastName: Yup.string().required("Введите фамилию"),
        phone: Yup.string().required("Введите телефон"),
        birthDate: Yup.string().required("Введите дату рождения"),
    });

    const {showInfoPopup} = useInfoPopup();

    const formik = useFormik({
        initialValues: {
            firstName: data?.firstName,
            lastName: data?.lastName,
            phone: data?.phone,
            birthDate: (new Date()).setTime(data?.birthdate),
        },
        validationSchema: validateSchema,
        validateOnChange: false,
        validateOnMount: false,
        validateOnBlur: false,
        enableReinitialize: true,
        onSubmit: async (values, { resetForm }) => {
            const data = await updateUserInfo({
                ...values, birthDate: values.birthDate.toString()
            })
            setError("")
            if(data.status !== 200) {
                setError(data?.data)
            } else {
                showInfoPopup("Данные изменены")
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
        <form onSubmit={formik.handleSubmit}>
            <div className={"main-info"}>
                <Input
                    name={"firstName"}
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    placeholder={"Введите имя"} title={"Имя"}/>
                <Input
                    name={"lastName"}
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    placeholder={"Введите фамилию"} title={"Фамилия"}/>
                <Input
                    name={"phone"}
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    placeholder={"Введите номер телефона"} title={"Номер телефона"}/>
                <Input placeholder={"Введите дату рождения"} inputProp={
                    <DatePicker
                        placeholderText={"Введите дату рождения"}
                        selected={formik.values.birthDate}
                        name={"date"}
                        className={"full-width"}
                        disableFuture
                        dateFormat="dd.MM.yyyy"
                        onChange={e => {
                            formik.setFieldValue("birthDate", new Date(e).getTime())
                        }}
                    />
                } title={"Дата рождения"}/>
                {
                    error && <p className={"ui-error"}>{error}</p>
                }
                <Button className={"main-info__btn"}>Сохранить</Button>
            </div>
        </form>
    );
};

export default MainInfo;
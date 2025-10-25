import React, {useEffect, useState} from 'react';
import Input from "../ui/Input/Input";
import DatePicker from "react-datepicker";
import Button from "../ui/Button/Button";
import useFetch from "../../hooks/useFetch";
import * as Yup from "yup";
import useInfoPopup from "../../hooks/useInfoPopup";
import {useFormik} from "formik";
import {updatePaymentInfo, updateUserInfo} from "../../api/API";

const PaymentInfo = () => {
    const [error, setError] = useState("")
    const {data} = useFetch("/user/payment", {}, false, true)
    const validateSchema = Yup.object().shape({
        cardNumber: Yup.string().required("Введите номер карты"),
        cardHolder: Yup.string().required("Введите владельца карты"),
        date: Yup.string().required("Введите срок действия карты"),
        cvv: Yup.string().required("Введите CVV"),
    });


    const {showInfoPopup} = useInfoPopup();

    const formik = useFormik({
        initialValues: {
            cardNumber: data?.cardNumber,
            cardHolder: data?.cardHolder,
            cvv: data?.cvv,
            date: (new Date()).setTime(data?.cardDate),
        },
        validationSchema: validateSchema,
        validateOnChange: false,
        validateOnMount: false,
        validateOnBlur: false,
        enableReinitialize: true,
        onSubmit: async (values, { resetForm }) => {
            const data = await updatePaymentInfo({
                ...values, date: values.date.toString()
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
            <div className={"payment-info"}>
                <Input
                    onChange={formik.handleChange}
                    name={"cardNumber"}
                    value={formik.values.cardNumber}
                    placeholder={"Введите номер карты"} title={"Номер карты"}/>
                <Input
                    onChange={formik.handleChange}
                    name={"cardHolder"}
                    value={formik.values.cardHolder}
                    placeholder={"Введите держателя карты"} title={"Держатель карты"}/>
                <div className={"payment-info__wrapper"}>
                    <Input placeholder={"Введите срок действия"} inputProp={
                        <DatePicker
                            selected={formik.values.date}
                            name={"date"}
                            className={"full-width"}
                            minDate={new Date()}
                            dateFormat="MM/yy"
                            showMonthYearPicker
                            placeholderText={"Дата"}
                            onChange={e => {
                                formik.setFieldValue("date", new Date(e).getTime())
                            }}
                        />
                    } title={"Срок действия"}/>
                    <Input
                        onChange={formik.handleChange}
                        name={"cvv"}
                        value={formik.values.cvv}
                        type={"password"} placeholder={"Введите CVV"} title={"CVV"}/>
                </div>
                {
                    error && <p className={"ui-error"}>{error}</p>
                }
                <Button className={"main-info__btn"}>Сохранить</Button>
            </div>
        </form>
    );
};

export default PaymentInfo;
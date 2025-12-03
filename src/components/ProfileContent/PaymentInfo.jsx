import React, { useEffect, useState } from 'react';
import Input from "../ui/Input/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Не забудьте стили календаря
import Button from "../ui/Button/Button";
import useFetch from "../../hooks/useFetch";
import * as Yup from "yup";
import useInfoPopup from "../../hooks/useInfoPopup";
import { useFormik } from "formik";
import { updatePaymentInfo } from "../../api/API";

const PaymentInfo = () => {
    const [error, setError] = useState("");
    const { data } = useFetch("/user/payment", {}, false, true);
    const { showInfoPopup } = useInfoPopup();

    // Схема валидации
    const validateSchema = Yup.object().shape({
        cardNumber: Yup.string()
            .matches(/^[0-9]{16}$/, "Номер карты должен содержать 16 цифр")
            .required("Введите номер карты"),
        cardHolder: Yup.string()
            .matches(/^[a-zA-Z\s]+$/, "Имя должно содержать только латинские буквы")
            .required("Введите владельца карты"),
        date: Yup.date()
            .nullable()
            .min(new Date(), "Срок действия истёк")
            .required("Введите срок действия карты"),
        cvv: Yup.string()
            .matches(/^[0-9]{3,4}$/, "CVV должен содержать 3 или 4 цифры")
            .required("Введите CVV"),
    });

    const formik = useFormik({
        initialValues: {
            cardNumber: data?.cardNumber || "",
            cardHolder: data?.cardHolder || "",
            cvv: data?.cvv || "",
            // Преобразуем timestamp из БД в объект Date для DatePicker
            date: data?.cardDate ? new Date(Number(data.cardDate)) : null,
        },
        validationSchema: validateSchema,
        validateOnChange: false, // Валидация срабатывает при попытке отправить
        validateOnBlur: false,   // или можно включить true для мгновенной реакции
        enableReinitialize: true, // Важно: обновляет форму, когда приходят data из useFetch
        onSubmit: async (values) => {
            // Преобразуем дату обратно в timestamp (строку) для бэкенда
            const timestampDate = values.date ? values.date.getTime().toString() : "";

            const payload = {
                ...values,
                date: timestampDate
            };

            const response = await updatePaymentInfo(payload);
            setError("");

            if (response.status !== 200) {
                setError(response?.data || "Ошибка сохранения");
            } else {
                showInfoPopup("Данные изменены");
            }
        },
    });

    // Вывод ошибок валидации
    useEffect(() => {
        if (formik.errors && Object.keys(formik.errors).length > 0) {
            // Берем первую ошибку из списка
            const firstErrorKey = Object.keys(formik.errors)[0];
            setError(formik.errors[firstErrorKey]);
        }
    }, [formik.errors]);

    // Хендлер для номера карты (только цифры, макс 16)
    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 16);
        formik.setFieldValue("cardNumber", value);
    };

    // Хендлер для CVV (только цифры, макс 4)
    const handleCvvChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 4);
        formik.setFieldValue("cvv", value);
    };

    // Хендлер для имени (латиница, UpperCase)
    const handleHolderChange = (e) => {
        // Разрешаем буквы и пробелы
        const value = e.target.value.toUpperCase();
        formik.setFieldValue("cardHolder", value);
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={"payment-info"}>
                <Input
                    onChange={handleCardNumberChange}
                    name={"cardNumber"}
                    value={formik.values.cardNumber}
                    placeholder={"0000 0000 0000 0000"}
                    title={"Номер карты"}
                    maxLength={16}
                />

                <Input
                    onChange={handleHolderChange}
                    name={"cardHolder"}
                    value={formik.values.cardHolder}
                    placeholder={"IVAN IVANOV"}
                    title={"Держатель карты"}
                />

                <div className={"payment-info__wrapper"}>
                    <Input
                        placeholder={"ММ/ГГ"}
                        title={"Срок действия"}
                        inputProp={
                            <DatePicker
                                selected={formik.values.date}
                                name={"date"}
                                className={"full-width"} // Убедитесь, что этот класс растягивает инпут
                                minDate={new Date()}
                                dateFormat="MM/yy"
                                showMonthYearPicker
                                placeholderText={"ММ/ГГ"}
                                onChange={(date) => {
                                    formik.setFieldValue("date", date);
                                    // Сбрасываем ошибку при выборе даты, если она была
                                    if (error) setError("");
                                }}
                                // Отключаем ручной ввод, чтобы пользователь выбирал только из календаря
                                onKeyDown={(e) => e.preventDefault()}
                            />
                        }
                    />

                    <Input
                        onChange={handleCvvChange}
                        name={"cvv"}
                        value={formik.values.cvv}
                        type={"password"}
                        placeholder={"123"}
                        title={"CVV"}
                        maxLength={4}
                    />
                </div>

                {error && <p className={"ui-error"}>{error}</p>}

                <Button className={"main-info__btn"} type="submit">
                    Сохранить
                </Button>
            </div>
        </form>
    );
};

export default PaymentInfo;
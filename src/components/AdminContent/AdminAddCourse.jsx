import React, {useContext, useEffect, useId, useState} from 'react';
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import Select from "../ui/Select/Select";
import {ModalsContext} from "../../context/ModalsContext";
import * as Yup from "yup";
import {useFormik} from "formik";
import {addCourse, login} from "../../api/API";
import {setTokens} from "../../utils/tokens";

const AdminAddCourse = () => {
    const id = useId();
    const [file,setFile] = useState(null)
    const languages = [{
        name: "Английский",
        id: 0,
    },{
        name: "Немецкий",
        id: 1,
    },{
        name: "Французский",
        id: 2,
    },{
        name: "Испанский",
        id: 3,
    },{
        name: "Итальянский",
        id: 4,
    },
    ]

    const formats = [{
        name: "Online",
        id: 0,
    },{
        name: "Offline",
        id: 1,
    }
    ]

    const [error, setError] = useState("")

    const validateSchema = Yup.object().shape({
        name: Yup.string().required("Введите название"),
        price: Yup.string().required("Введите цену"),
        duration: Yup.string().required("Введите продолжительность занятия"),
        amountOfStudies: Yup.string().required("Введите кол-во занятий"),
        durationOfCourse: Yup.string().required("Введите продолжительность курса"),
        langId: Yup.string().required("Выберите язык"),
        description: Yup.string().required("Введите описание"),
        formatId: Yup.string().required("Выберите формат"),
    });


    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            duration: '',
            amountOfStudies: '',
            durationOfCourse: '',
            langId: '',
            description: '',
            formatId: '',
        },
        validationSchema: validateSchema,
        validateOnChange: false,
        validateOnMount: false,
        validateOnBlur: false,
        enableReinitialize: true,
        onSubmit: async (values, { resetForm }) => {
            if(file)  {
                const formData = new FormData();
                for (let value in values) {
                    formData.append(value, values[value]);
                }
                formData.append("file", file);
                await addCourse(formData)
            } else {
                setError("Выберите файл")
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

    const loadImages = (e) => {
        if(e.target.files?.length)
            setFile(e.target.files[0])
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={"admin-add-course"}>
                <h2>Добавить новый курс</h2>
                <div className={"admin-add-course__forms"}>
                    <Input
                        onChange={formik.handleChange}
                        name={"name"}
                        value={formik.values.name}
                        placeholder={"Введите название курса"} title={"Название"}/>
                    <Input
                        onChange={formik.handleChange}
                        name={"price"}
                        value={formik.values.price}
                        placeholder={"Введите цену"} title={"Цена"}/>
                    <Input
                        onChange={formik.handleChange}
                        name={"duration"}
                        value={formik.values.duration}
                        placeholder={"Введите длительность занятия"} title={"Длительность"}/>
                    <Input
                        onChange={formik.handleChange}
                        name={"amountOfStudies"}
                        value={formik.values.amountOfStudies}
                        placeholder={"Введите кол-во занятий в неделю"} title={"Кол-во занятий"}/>
                    <Input
                        onChange={formik.handleChange}
                        name={"durationOfCourse"}
                        value={formik.values.durationOfCourse}
                        placeholder={"Введите продолжительность курса"} title={"Продолжительность курса"}/>
                    <label className={"admin-add-course__btn"} htmlFor={id}>
                        Добавить изображения отеля
                    </label>
                    <input className={"hidden"} onChange={loadImages} id={id} hidden={true} multiple={true} accept="image/*" type={"file"}/>
                    <Select value={languages[formik.values.langId]}
                            onChange={e => formik.setFieldValue("langId", e)}
                            data={languages}
                            title={"Выберите язык"}/>
                    <Select value={formats[formik.values.formatId]}
                            onChange={e => formik.setFieldValue("formatId", e)}
                            data={formats}
                            title={"Выберите форму обучения"}/>
                    <Input onChange={formik.handleChange}
                           value={formik.values.description}
                           name={"description"}
                           full={true}
                           placeholder={"Введите небольшое описание"}
                           title={"Описание"}/>
                </div>
                <div className={"admin-add-course__actions"}>
                    <Button>Добавить</Button>
                    {error && <p className={"ui-error"}>{error}</p>}
                </div>
            </div>
        </form>
    );
};

export default AdminAddCourse;
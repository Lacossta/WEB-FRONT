import React from 'react';
import {useNavigate} from "react-router-dom";
import LangCard from "../LangCard/LangCard";
import infoImg from "../../assets/infoimg.png"
import useFetch from "../../hooks/useFetch";

const DeContent = () => {
    const navigate = useNavigate();

    const handleMainPage = () => {
        navigate("/")
    }

    const {data} = useFetch("/course/get/De");

    return (
        <div className={"de-content lang-page"}>
            <div className={"lang-page-breadcrumb"}>
                <span onClick={handleMainPage} className={"lang-page-breadcrumb--clickable"}>Главная</span> » <span
                className={"lang-page-breadcrumb--current"}>Немецкий язык</span>
            </div>
            <div className={"lang-page__header"}>
                <div className={"lang-page__header-info"}>
                    <h1 className={"lang-page__header-title"}>НЕМЕЦКИЙ ЯЗЫК</h1>
                    <p className={"lang-page__header-desc"}>
                        Программы обучения немецкому языку. <br/>
                        Онлайн и офлайн форматы
                    </p>
                </div>
                <div className={"lang-page__header-menu"}>
                    <div className={"lang-page__header-menu-item"}>
                        Офлайн
                    </div>
                    <div className={"lang-page__header-menu-item"}>
                        Онлайн
                    </div>
                </div>
            </div>
            <div className={"lang-page__content"}>
                <section className={"lang-page__offline"}>
                    <h1 className={"lang-page__section-title"}>
                        ОФЛАЙН
                    </h1>
                    <div className={"lang-page__offline-cards"}>
                        {
                            data && data.map(elem => {
                                    if (elem.format === "offline") {
                                        return <LangCard data={elem}/>
                                    }
                                }
                            )
                        }
                    </div>
                </section>
                <section className={"lang-page__online"}>
                    <h1 className={"lang-page__section-title"}>
                        ОНЛАЙН
                    </h1>
                    <div className={"lang-page__online-cards"}>
                        {
                            data && data.map(elem => {
                                    if (elem.format === "online") {
                                        return <LangCard data={elem}/>
                                    }
                                }
                            )
                        }
                    </div>
                </section>
                <section className={"lang-page__info"}>
                    <div className={"lang-page__info-text-wrapper"}>
                        <p className={"lang-page__info-text"}>
                            Онлайн-занятия немецким языком — это возможность обучаться в любом комфортном для вас месте
                            и из любой точки мира.
                            <br/><br/>
                            Курсы немецкого в онлайн-формате не уступают по своему качеству и вовлеченности
                            офлайн-урокам. Вы учитесь на интуитивно понятной и удобной платформе, где разбираете новый
                            материал с преподавателем, смотрите видео, выполняете разнообразные задания, активно
                            работаете с чатом и онлайн-досками и много общаетесь как всей группой, так и в отдельных
                            сессионных комнатах в парах и мини-группах. Мы создаем условия, в которых вы начнете
                            разговаривать на немецком языке с самых первых занятий, даже на начальном уровне. Мы
                            полностью погружаем вас в живой современный немецкий и учим применять его на практике.
                            <br/><br/>
                            Если вы пропустили занятие или хотите вернуться и повторить пройденный материал — в
                            онлайн-формате это сделать легко. Для каждого занятия преподаватель готовит презентацию,
                            которую сохраняет в чате группы вместе с записью урока, чтобы все материалы были у вас под
                            рукой.
                        </p>
                    </div>
                    <div className={"lang-page__info-img-wrapper"}>
                        <img className={"lang-page__info-img"} src={infoImg}/>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DeContent;
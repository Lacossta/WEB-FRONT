import React from 'react';
import "./startContent.css"
import tick from "../../assets/tick.svg"
import pg1 from "../../assets/pg1.png"
import check from "../../assets/check.svg"
import cardmg1 from "../../assets/cardmg1.jpeg"
import cardmg2 from "../../assets/cardmg2.jpeg"
import cardmg3 from "../../assets/cardmg3.jpeg"
import cardmg4 from "../../assets/cardmg4.jpeg"
import cardmg5 from "../../assets/cardmg5.jpeg"
import reward1 from "../../assets/reward1.jpeg"
import reasonsmg from "../../assets/reasonsmg.jpeg"
import {useNavigate} from "react-router-dom";
const StartContent = () => {
    const navigate = useNavigate();
    return (
        <div className={"start-content"}>
            <section className={"start-content__intro"}>
                <div className={"start-content__intro-main"}>
                    <div className={"start-content__main-info"}>
                        <h1 className={"start-content__main-title"}>ШКОЛА
                            ИНОСТРАННЫХ<br/> ЯЗЫКОВ SpeakLab.by</h1>
                        <div className={"start-content__main-abilities"}>
                            <div className={"start-content__main-ability"}>
                                <img className={"start-content__ability-img"} src={tick}/>
                                <p className={"start-content__ability-title"}>Онлайн и офлайн
                                    форматы обучения</p>
                            </div>
                            <div className={"start-content__main-ability"}>
                                <img className={"start-content__ability-img"} src={tick}/>
                                <p className={"start-content__ability-title"}>Программы для детей,
                                    подростков и взрослых</p>
                            </div>
                            <div className={"start-content__main-ability"}>
                                <img className={"start-content__ability-img"} src={tick}/>
                                <p className={"start-content__ability-title"}>Занятия в группах
                                    и индивидуально</p>
                            </div>
                            <div className={"start-content__main-ability"}>
                                <img className={"start-content__ability-img"} src={tick}/>
                                <p className={"start-content__ability-title"}>Корпоративное обучение
                                    и повышение квалификации</p>
                            </div>
                        </div>
                    </div>
                    <div className={"start-content__img-wrapper"}>
                        <img src={pg1} className={"start-content__img"}/>
                    </div>
                </div>
                <div className={"start-content__intro-add"}>
                    <div className={"start-content__intro-add-item"}>
                        <img className={"start-content__intro-item-img"} src={check}/>
                        <p className={"start-content__intro-item-text"}>
                            25 лет опыта преподавания иностранных языков
                        </p>
                    </div>
                    <div className={"start-content__intro-add-item"}>
                        <img className={"start-content__intro-item-img"} src={check}/>
                        <p className={"start-content__intro-item-text"}>
                            Более 10 000 студентов выпускаются ежегодно
                        </p>
                    </div>
                    <div className={"start-content__intro-add-item"}>
                        <img className={"start-content__intro-item-img"} src={check}/>
                        <p className={"start-content__intro-item-text"}>
                            500+ компаний прошли корпоративное обучение
                        </p>
                    </div>
                    <div className={"start-content__intro-add-item"}>
                        <img className={"start-content__intro-item-img"} src={check}/>
                        <p className={"start-content__intro-item-text"}>
                            96% студентов рекомендуют
                            нас своим друзьям
                        </p>
                    </div>
                </div>
            </section>
            <section className={"lang-programs"}>
                <div className={"lang-programs__header"}>
                    <h1 className={"lang-programs__header-title"}>ЯЗЫКОВЫЕ
                        ПРОГРАММЫ</h1>
                    <p className={"lang-programs__header-text"}>Нажмите на карточку, чтобы посмотреть программы</p>
                </div>
                <div className={"lang-programs__main"}>
                    <div onClick={e => navigate("/languages/en")} className={"lang-programs__card"}>
                        <div className={"lang-programs__card-info"}>
                            <div className={"lang-programs__card-adtinfo"}>
                                <div className={"lang-programs__card-adtinfo-item"}>
                                    English
                                </div>
                                <div className={"lang-programs__card-adtinfo-item"}>
                                    Офлайн и онлайн
                                </div>
                            </div>
                            <h1 className={"lang-programs__card-title"}>Курсы английского языка</h1>
                            <p className={"lang-programs__card-text"}>Детям, подросткам и взрослым</p>
                        </div>
                        <div className={"lang-programs__card-img-wrapper"}>
                            <img className={"lang-programs__card-img"} src={cardmg1}/>
                        </div>
                    </div>
                    <div onClick={e => navigate("/languages/de")} className={"lang-programs__card"}>
                        <div className={"lang-programs__card-info"}>
                            <div className={"lang-programs__card-adtinfo"}>
                                <div className={"lang-programs__card-adtinfo-item"}>
                                    Deutsch
                                </div>
                                <div className={"lang-programs__card-adtinfo-item"}>
                                    Офлайн и онлайн
                                </div>
                            </div>
                            <h1 className={"lang-programs__card-title"}>курсы Немецкого языка</h1>
                            <p className={"lang-programs__card-text"}>Подросткам и взрослым</p>
                        </div>
                        <div className={"lang-programs__card-img-wrapper"}>
                            <img className={"lang-programs__card-img"} src={cardmg2}/>
                        </div>
                    </div>
                    <div onClick={e => navigate("/languages/fra")} className={"lang-programs__card"}>
                        <div className={"lang-programs__card-info"}>
                            <div className={"lang-programs__card-adtinfo"}>
                                <div className={"lang-programs__card-adtinfo-item"}>
                                    Français
                                </div>
                                <div className={"lang-programs__card-adtinfo-item"}>
                                    Офлайн и онлайн
                                </div>
                            </div>
                            <h1 className={"lang-programs__card-title"}>курсы французского языка</h1>
                            <p className={"lang-programs__card-text"}>Взрослым</p>
                        </div>
                        <div className={"lang-programs__card-img-wrapper"}>
                            <img className={"lang-programs__card-img"} src={cardmg3}/>
                        </div>
                    </div>
                    <div onClick={e => navigate("/languages/esp")} className={"lang-programs__card"}>
                        <div className={"lang-programs__card-info"}>
                            <div className={"lang-programs__card-adtinfo"}>
                                <div className={"lang-programs__card-adtinfo-item"}>
                                    Español
                                </div>
                                <div className={"lang-programs__card-adtinfo-item"}>
                                    Офлайн и онлайн
                                </div>
                            </div>
                            <h1 className={"lang-programs__card-title"}>курсы испанского языка</h1>
                            <p className={"lang-programs__card-text"}>Взрослым</p>
                        </div>
                        <div className={"lang-programs__card-img-wrapper"}>
                            <img className={"lang-programs__card-img"} src={cardmg4}/>
                        </div>
                    </div>
                    <div onClick={e => navigate("/languages/ita")} className={"lang-programs__card"}>
                        <div className={"lang-programs__card-info"}>
                            <div className={"lang-programs__card-adtinfo"}>
                                <div className={"lang-programs__card-adtinfo-item"}>
                                    Italiano
                                </div>
                                <div className={"lang-programs__card-adtinfo-item"}>
                                    Офлайн и онлайн
                                </div>
                            </div>
                            <h1 className={"lang-programs__card-title"}>курсы Итальянского языка</h1>
                            <p className={"lang-programs__card-text"}>Взрослым</p>
                        </div>
                        <div className={"lang-programs__card-img-wrapper"}>
                            <img className={"lang-programs__card-img"} src={cardmg5}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"reasons"}>
                <div className={"reasons__header"}>
                    <h1 className={"reasons__header-title"}>
                        ПОЧЕМУ lang.by
                    </h1>
                </div>
                <div className={"reasons__main"}>
                    <div className={"reasons__main-item"}>
                        Обучение языкам по современным мировым стандартам: комплексный, практико-ориентированный подход
                        с измеряемым результатом, постоянная поддержка со стороны преподавателей.
                    </div>
                    <div className={"reasons__main-item"}>
                        Высокие результаты выпускников. Более 90% студентов успешно осваивают программы и достигают
                        целей: сдают экзамены, участвуют в международных проектах и свободно общаются.
                    </div>
                    <div className={"reasons__main-item"}>
                        Собственный центр разработки продуктов. Эксперты и методисты школы постоянно улучшают подходы к
                        обучению, разрабатывают специализированные программы под потребности клиентов.
                    </div>
                    <div className={"reasons__main-item"}>
                        Топовые преподаватели, которые постоянно проходят обучение, сдают профессиональные экзамены и
                        повышают свою квалификацию на международных образовательных конференциях.
                    </div>
                </div>
                <div className={"reasons__info"}>
                    <div className={"reasons__info-main"}>
                        <p className={"reasons__info-main-text"}>
                            Streamline Language School - это современная языковая школа, где уже более 100 000 студентов
                            достигли поставленных целей: подготовились к экзаменам и важным поездкам, выучили язык для
                            работы, учебы и просто для себя.
                            <br/><br/>
                            В Streamline в офлайн и онлайн формате обучаются дети, взрослые и сотрудники компаний из
                            разных сфер бизнеса. В продуктовой линейке представлены 5 иностранных языков: доминирующий
                            по популярности английский, а также немецкий, французский, испанский и итальянский.
                            <br/><br/>
                            Streamline имеет престижную международную аккредитацию Quality English Associate School за
                            качество преподавания и сервиса.
                        </p>
                        <div className={"reasons__info-rewards"}>
                            <img className={"reasons__info-reward"} src={reward1}/>
                        </div>
                    </div>
                    <div className={"reasons__info-img-wrapper"}>
                        <img className={"reasons__info-img"} src={reasonsmg}/>
                    </div>
                </div>
            </section>
            <section className={"feedback"}>
                <div className={"feedback__header"}>
                    <h1 className={"feedback__header-title"}>
                        ОТЗЫВЫ
                        НАШИХ СТУДЕНТОВ
                    </h1>
                </div>
                <div className={"feedback__main"}>
                    <div className={"feedback__card"}>
                        <h2 className={"feedback__card-title"}>МАРИАННА НОВИКОВА</h2>
                        <p className={"feedback__card-text"}>Если у меня спросят, какая школа английского языка лучшая,
                            я точно порекомендую Стримлайн. Я учила английский в школе, ходила на другие курсы, но все,
                            чего добилась - выучила правила, заучила "темы" наизусть. По-настоящему пользоваться языком
                            я научилась только в Стримлайн. Это то обучение, которое помогает начать говорить, а не
                            просто сдавать экзамены. Могу сказать, что это лучшие языковые курсы.</p>
                    </div>
                    <div className={"feedback__card"}>
                        <h2 className={"feedback__card-title"}>ПОЛИНА</h2>
                        <p className={"feedback__card-text"}>Школа Streamline - моя любовь уже несколько лет. Прошла годичный курс, потому что хотела повысить уровень английского языка с А1 до А2.
                            В итоге задержалась еще на 2 года. Теперь у меня языковой уровень B2. И это помогло мне в устройстве на новую работу. Streamline, спасибо!</p>
                    </div>
                    <div className={"feedback__card"}>
                        <h2 className={"feedback__card-title"}>СВЕТЛАНА МАЕВСКАЯ</h2>
                        <p className={"feedback__card-text"}>Школа Стримлайн помогла мне, наконец, заговорить. До изучения языка на этих курсах у меня был ступор в общении на иностранном, хотя был приличный словарный запас. Теперь преодолела языковой барьер и есть желание учиться дальше.</p>
                    </div>
                    <div className={"feedback__card"}>
                        <h2 className={"feedback__card-title"}>ТАМАРА КАЗАКЕВИЧ</h2>
                        <p className={"feedback__card-text"}>Streamline действительно школа, а не курсы. Здесь совсем другой подход к обучению. Училась английскому в Минске, но знаю, что есть филиалы в других городах. Если хотите учить иностранный, то точно сюда. Не жалко потраченных денег и времени, потому что вижу результат.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StartContent;
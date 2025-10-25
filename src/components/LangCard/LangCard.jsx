import React from 'react';
import engCardImg from "../../assets/engCardImg.png";
import tick from "../../assets/check.svg";
import Button from "../ui/Button/Button";
import "./langCard.css"
import {getImage} from "../../utils/images";
import {buyCourse} from "../../api/API";
import useInfoPopup from "../../hooks/useInfoPopup";

const LangCard = ({data}) => {

    const {showInfoPopup} = useInfoPopup();
    const handleSub = () => {
        buyCourse({id: data.id}).then(e => {
            if(e.status === 200) {
                showInfoPopup("Вы записались на курс")
            } else if(e.status === 403) {
                showInfoPopup("Войдите в аккаунт")
            } else {
                showInfoPopup(e.data)
            }
        })
    }
    return (
        <div className={"lang-card"}>
            <img className={"lang-card__img"} src={getImage(data.imgURL)}/>
            <div className={"lang-card__wrapper"}>
                <h1 className={"lang-card__title"}>{data.title}</h1>
                <p className={"lang-card__desc"}>{data.description}</p>
                <div className={"lang-card__info"}>
                    <div className={"lang-card__info-item"}>
                        <img className={"lang-card__info-item-img"} src={tick}/>
                        <p className={"lang-card__info-item-text"}>{data.amountOfLessons} в неделю по {data.timeForLesson}</p>
                    </div>
                    <div className={"lang-card__info-item"}>
                        <img className={"lang-card__info-item-img"} src={tick}/>
                        <p className={"lang-card__info-item-text"}>Продолжительность - {data.timeForAllCourse}</p>
                    </div>
                    <div className={"lang-card__info-item"}>
                        <img className={"lang-card__info-item-img"} src={tick}/>
                        <p className={"lang-card__info-item-text"}>Языковые клубы и вебинары</p>
                    </div>
                </div>
                <div className={"lang-card__price-wrapper"}>
                    <h2 className={"lang-card__price-title"}>{data.price} BYN</h2>
                    <p className={"lang-card__price-desc"}>Стоимость за месяц</p>
                </div>
                <Button onClick={handleSub} className={"lang-card__btn"}>Записаться на курс</Button>
            </div>
        </div>
    );
};

export default LangCard;
import React from 'react';
import Button from "../ui/Button/Button";
import useInfoPopup from "../../hooks/useInfoPopup";
import useFetch from "../../hooks/useFetch";
import {unBuyCourse} from "../../api/API";

const BuyedCourses = () => {
    const {data, refetch} = useFetch("/user/courses", {}, false, true);
    const handleRemove = (id) => {
        unBuyCourse({id}).then(e => {
            refetch();
        })
    }
    return (
        <div className={"buyed-courses"}>
            <h2 className={"buyed-courses__title"}>Купленные курсы</h2>
            <div className={"buyed-courses__cards"}>
                {
                    data && data.map(r => <div className={"buyed-courses__card"}>
                        <div className={"buyed-courses-card__info"}>
                            <h2 className={"buyed-courses-card__info-title"}>{r.course.title}</h2>
                            <div className={"buyed-courses-card__info-wrapper"}>
                                <p className={"buyed-courses-card__info-text"}>{r.course.amountOfLessons} в неделю </p>
                                <p className={"buyed-courses-card__info-text"}>По {r.course.timeForLesson}</p>
                                <p className={"buyed-courses-card__info-text"}>Продолжительность - {r.course.timeForAllCourse}</p>
                            </div>
                        </div>
                        <div className={"buyed-courses-card__actions"}>
                            <Button onClick={e => handleRemove(r.course.id)} className={"buyed-courses-card__btn"}>Отменить</Button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BuyedCourses;
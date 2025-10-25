import React, {useState} from 'react';
import Button from "../ui/Button/Button";
import useFetch from "../../hooks/useFetch";
import {removeCourse} from "../../api/API";

const AdminCoursesList = () => {
    const {data, refetch} = useFetch("/course/getAll", {}, false, true);
    const handleRemove = (id) => {
        removeCourse({id}).then(e => {
            refetch();
        })
    }

    return (
        <div className={"buyed-courses"}>
            <h2 className={"buyed-courses__title"}>Курсы</h2>
            <div className={"buyed-courses__cards"}>
                {
                    data && data.map(r =>
                        <div className={"buyed-courses__card"}>
                            <div className={"buyed-courses-card__info"}>
                                <h2 className={"buyed-courses-card__info-title"}>{r.title}</h2>
                                <div className={"buyed-courses-card__info-wrapper"}>
                                    <p className={"buyed-courses-card__info-text"}>{r.timeForAllCourse}</p>
                                    <p className={"buyed-courses-card__info-text"}>{r.timeForLesson}</p>
                                    <p className={"buyed-courses-card__info-text"}>Кол-во занятий {r.amountOfLessons}</p>
                                </div>
                            </div>
                            <div className={"buyed-courses-card__actions"}>
                                <Button onClick={e => handleRemove(r.id)} className={"buyed-courses-card__btn"}>Удалить</Button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AdminCoursesList;
import React from 'react';
import Button from "../ui/Button/Button";
import useFetch from "../../hooks/useFetch";
import {unBuyCourse} from "../../api/API";

const AdminUsersReq = () => {
    const {data, refetch} = useFetch("/user/allCourses", {}, false, true);
    const handleRemove = (id) => {
        unBuyCourse({id}).then(e => {
            refetch();
        })
    }

    return (
        <div className={"buyed-courses"}>
            <h2 className={"buyed-courses__title"}>Записавшиеся</h2>
            <div className={"buyed-courses__cards"}>
                {
                    data && data.map(res => <div className={"buyed-courses__card"}>
                        <div className={"buyed-courses-card__info"}>
                            <h2 className={"buyed-courses-card__info-title"}>{res.course.title}</h2>
                            <div className={"buyed-courses-card__info-wrapper"}>
                                <p className={"buyed-courses-card__info-text"}>ID курса: {res.course.id}</p>
                                <p className={"buyed-courses-card__info-text"}>ID пользователя: {res.user.id}</p>
                            </div>
                        </div>
                        <div className={"buyed-courses-card__actions"}>
                            <Button onClick={e => handleRemove(res.course.id)} className={"buyed-courses-card__btn"}>Удалить</Button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AdminUsersReq;



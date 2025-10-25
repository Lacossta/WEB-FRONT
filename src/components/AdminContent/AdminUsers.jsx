import React from 'react';
import Button from "../ui/Button/Button";
import useFetch from "../../hooks/useFetch";
import {convertTime} from "../../utils/time";

const AdminUsers = () => {
    const {data} = useFetch("/admin/users", {}, false, true);
    return (
        <div className={"admin-users"}>
            <h2 className={"admin-users__title"}>Пользователи</h2>
            <div className={"admin-users__cards"}>
                {
                    data && data.map(elem => (
                        <div className={"admin-users__card"}>
                            <div className={"admin-users-card__info"}>
                                <h2 className={"admin-users-card__info-title"}>#{elem.id}</h2>
                                <div className={"admin-users-card__info-wrapper"}>
                                    <p className={"admin-users-card__info-text"}>Логин: {elem.login}</p>
                                    <p className={"admin-users-card__info-text"}>Почта: {elem.email}</p>
                                    <p className={"admin-users-card__info-text"}>Номер телефона: {elem.userInfo.phone}</p>
                                    <p className={"admin-users-card__info-text"}>Имя: {elem.userInfo.firstName}</p>
                                    <p className={"admin-users-card__info-text"}>Фамилия: {elem.userInfo.lastName}</p>
                                    <p className={"admin-users-card__info-text"}>Дата рождения: {convertTime(elem.userInfo.birthdate)}</p>
                                    <p className={"admin-users-card__info-text"}>Роль: {elem.role}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AdminUsers;
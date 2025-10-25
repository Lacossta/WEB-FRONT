import React, {useState} from 'react';
import MainInfo from "../ProfileContent/MainInfo";
import PaymentInfo from "../ProfileContent/PaymentInfo";
import Security from "../ProfileContent/Security";
import BuyedCourses from "../ProfileContent/BuyedCourses";
import AdminUsers from "./AdminUsers";
import "./adminContent.css"
import AdminAddCourse from "./AdminAddCourse";
import AdminCoursesList from "./AdminCoursesList";
import AdminUsersReq from "./AdminUsersReq";

const AdminContent = () => {
    const [state, setState] = useState(1);
    const changeView = () => {
        switch (state) {
            case 1:
                return <AdminUsers />;
            case 2:
                return <AdminAddCourse />;
            case 3:
                return <AdminCoursesList />;
            case 4:
                return <AdminUsersReq />;
        }
    }

    return (
        <div className={"profile-content"}>
            <div className={"profile-header"}>
                <h1 className={"profile-header__title"}>Профиль</h1>
                <div className={"profile-header__menu"}>
                    <div onClick={e => setState(1)}
                         className={"profile-header__menu-item " + (state === 1 ? "profile-header__menu-item--active" : "")}>
                        Пользователи
                    </div>
                    <div onClick={e => setState(2)}
                         className={"profile-header__menu-item " + (state === 2 ? "profile-header__menu-item--active" : "")}>
                        Добавить курс
                    </div>
                    <div onClick={e => setState(3)}
                         className={"profile-header__menu-item " + (state === 3 ? "profile-header__menu-item--active" : "")}>
                        Курсы
                    </div>
                    <div onClick={e => setState(4)}
                         className={"profile-header__menu-item " + (state === 4 ? "profile-header__menu-item--active" : "")}>
                        Записавшиеся
                    </div>
                </div>
            </div>
            <div className={"profile-main"}>
                {changeView()}
            </div>
        </div>
    );
};

export default AdminContent;
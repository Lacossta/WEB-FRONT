import React, {useState} from 'react';
import "./profileContent.css"
import MainInfo from "./MainInfo";
import PaymentInfo from "./PaymentInfo";
import Security from "./Security";
import BuyedCourses from "./BuyedCourses";

const ProfileContent = () => {

    const [state, setState] = useState(1);
    const changeView = () => {
        switch (state) {
            case 1:
                return <MainInfo />;
            case 2:
                return <PaymentInfo />;
            case 3:
                return <Security />;
            case 4:
                return <BuyedCourses/>;
        }
    }

    return (
        <div className={"profile-content"}>
            <div className={"profile-header"}>
                <h1 className={"profile-header__title"}>Профиль</h1>
                <div className={"profile-header__menu"}>
                    <div onClick={e => setState(1)}
                         className={"profile-header__menu-item " + (state === 1 ? "profile-header__menu-item--active" : "")}>
                        Основная информация
                    </div>
                    <div onClick={e => setState(2)}
                         className={"profile-header__menu-item " + (state === 2 ? "profile-header__menu-item--active" : "")}>
                        Платежная информация
                    </div>
                    <div onClick={e => setState(3)}
                         className={"profile-header__menu-item " + (state === 3 ? "profile-header__menu-item--active" : "")}>
                        Безопасность
                    </div>
                    <div onClick={e => setState(4)}
                         className={"profile-header__menu-item " + (state === 4 ? "profile-header__menu-item--active" : "")}>
                        Курсы
                    </div>
                </div>
            </div>
            <div className={"profile-main"}>
                {changeView()}
            </div>
        </div>
    );
};

export default ProfileContent;
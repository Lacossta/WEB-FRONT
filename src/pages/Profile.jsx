import React from 'react';
import Header from "../components/Header/Header";
import StartContent from "../components/StartContent/StartContent";
import Footer from "../components/Footer/Footer";
import ProfileContent from "../components/ProfileContent/ProfileContent";

const Profile = () => {
    return (
        <>
            <Header />
            <div className={"start-page"}>
                <div className={"page-wrapper"}>
                    <div className={"start-page__inner"}>
                        <ProfileContent/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Profile;
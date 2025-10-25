import React from 'react';
import StartContent from "../components/StartContent/StartContent";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Start = () => {
    return (
        <>
            <Header />
            <div className={"start-page"}>
                <div className={"page-wrapper"}>
                    <div className={"start-page__inner"}>
                        <StartContent/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Start;
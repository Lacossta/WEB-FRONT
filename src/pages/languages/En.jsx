import React from 'react';
import Header from "../../components/Header/Header";
import StartContent from "../../components/StartContent/StartContent";
import Footer from "../../components/Footer/Footer";
import EnContent from "../../components/EnContent/EnContent";

const En = () => {
    return (
        <>
            <Header />
            <div className={"en-page"}>
                <div className={"page-wrapper"}>
                    <div className={"en-page__inner"}>
                        <EnContent />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default En;
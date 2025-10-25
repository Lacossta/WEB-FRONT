import React from 'react';
import Header from "../../components/Header/Header";
import EnContent from "../../components/EnContent/EnContent";
import Footer from "../../components/Footer/Footer";
import DeContent from "../../components/DeContent/DeContent";

const De = () => {
    return (
        <>
            <Header />
            <div className={"de-page"}>
                <div className={"page-wrapper"}>
                    <div className={"de-page__inner"}>
                        <DeContent />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default De;
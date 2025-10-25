import React from 'react';
import Header from "../../components/Header/Header";
import EspContent from "../../components/EspContent/EspContent";
import Footer from "../../components/Footer/Footer";
import FraContent from "../../components/FraContent/FraContent";

const Fra = () => {
    return (
        <>
            <Header />
            <div className={"fra-page"}>
                <div className={"page-wrapper"}>
                    <div className={"fra-page__inner"}>
                        <FraContent />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Fra;
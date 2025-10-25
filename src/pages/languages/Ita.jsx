import React from 'react';
import Header from "../../components/Header/Header";
import EspContent from "../../components/EspContent/EspContent";
import Footer from "../../components/Footer/Footer";
import FraContent from "../../components/FraContent/FraContent";
import ItaContent from "../../components/ItaContent/ItaContent";

const Ita = () => {
    return (
        <>
            <Header />
            <div className={"ita-page"}>
                <div className={"page-wrapper"}>
                    <div className={"ita-page__inner"}>
                        <ItaContent />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Ita;
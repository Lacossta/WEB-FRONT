import React from 'react';
import Header from "../../components/Header/Header";
import EnContent from "../../components/EnContent/EnContent";
import Footer from "../../components/Footer/Footer";
import EspContent from "../../components/EspContent/EspContent";

const Esp = () => {
    return (
        <>
            <Header />
            <div className={"esp-page"}>
                <div className={"page-wrapper"}>
                    <div className={"esp-page__inner"}>
                        <EspContent />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Esp;
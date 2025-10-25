import React from 'react';
import LoginModal from "../components/modals/Auth/LoginModal";
import RegModal from "../components/modals/Auth/RegModal";
import InfoPopup from "../components/modals/InfoPopup/InfoPopup";

const Modals = () => {
    return (
        <>
            <LoginModal />
            <RegModal />
            <InfoPopup />
        </>
    );
};

export default Modals;
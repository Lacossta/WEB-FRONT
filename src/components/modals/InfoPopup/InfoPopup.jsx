import React, {useContext, useEffect} from 'react';
import "./infoPopup.css"
import {PopupContext} from "../../../context/PopupContext";
import close from "../../../assets/close.svg"

const InfoPopup = () => {
    const {infoPopup, setInfoPopup} = useContext(PopupContext)

    const handleClose = () => {
        setInfoPopup({
            isOpen: false,
            message: ''
        })
    }

    useEffect(() => {
        setTimeout(() => {
            handleClose();
        }, 1000 * 15)
    }, [infoPopup.isOpen, ]);

    if(infoPopup.isOpen) {
        return (
            <div className={"info-popup"}>
                <div className={"info-popup__content"}>
                    <div>
                        <p className={"info-popup__text"}>
                            {infoPopup.message}
                        </p>
                    </div>
                    <img onClick={handleClose} className={"info-popup__close-btn"} src={close} alt={close} />
                </div>
            </div>
        );
    }
};

export default InfoPopup;
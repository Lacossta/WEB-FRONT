import React, {useContext} from 'react';
import "./modal.css"
import close from "../../assets/close.svg"

const Modal = ({setOpen, title, children}) => {

    const handleClose = () => {

        setOpen(false);
    }

    return (
        <div className={"modal-wrapper"}>
            <div className={"modal-base"}>
                <div className={"modal-base__header"}>
                    <div onClick={handleClose} className={"modal-base__close-btn"}>
                        <img className={"close-ico"} src={close} alt={"close"}/>
                    </div>
                    <p className={"modal-base__title"}>{title}</p>
                </div>
                <div className={"modal-base__content"}>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Modal;
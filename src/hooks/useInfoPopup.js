import {useContext} from "react";
import {PopupContext} from "../context/PopupContext";

const useInfoPopup = () => {
    const {setInfoPopup} = useContext(PopupContext)
    const showInfoPopup = (message) => {
        setInfoPopup({
            isOpen: true,
            message,
        })
    }
    return {showInfoPopup}
}

export default useInfoPopup;
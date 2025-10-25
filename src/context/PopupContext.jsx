import {createContext, useState} from "react";
export const PopupContext = createContext(null)

export const PopupWrapper = ({children}) => {
    const [infoPopup, setInfoPopup] = useState({
        isOpen: false,
        message: "",
    });

    const [isBasketPopup, setBasketPopup] = useState(false);

    return <PopupContext.Provider value={{
        infoPopup, setInfoPopup,
        isBasketPopup, setBasketPopup
    }}>{children}</PopupContext.Provider>
}

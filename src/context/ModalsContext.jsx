import {createContext, useState} from "react";
export const ModalsContext = createContext(null)

export const ModalsWrapper = ({children}) => {

    const [isLoginShown, setLoginShown] = useState(false);
    const [isRegShown, setRegShown] = useState(false);

    return <ModalsContext.Provider value={{
        isLoginShown,
        setLoginShown,
        isRegShown,
        setRegShown,
    }}>
        {children}
    </ModalsContext.Provider>
}



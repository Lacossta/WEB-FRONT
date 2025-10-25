import {createContext, useState} from "react";
export const OtherContext = createContext(null)

export const OtherWrapper = ({children}) => {

    const [adminEdit, setAdminEdit] = useState({
        isActive: false,
        info: {},
    });

    return <OtherContext.Provider value={{
        adminEdit, setAdminEdit,
    }}>{children}</OtherContext.Provider>
}

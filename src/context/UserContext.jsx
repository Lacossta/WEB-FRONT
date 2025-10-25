import {createContext, useEffect, useState} from "react";
import {check} from "../api/API";
import {getTokens} from "../utils/tokens";
export const UserContext = createContext(null)

export const UserWrapper = ({children}) => {


    const [isAuth, setAuth] = useState(false);

    useEffect(() => {
        const checkForAuth = async () => {
            const data = await check();
            if(data?.status !== 200) {
                setAuth(false);
                //setTokens("", "")
            } else {
                setAuth(true);
            }
        }
        if(getTokens().access_token) {
            checkForAuth();
        }
    }, []);

    return <UserContext.Provider value={{
        isAuth,
        setAuth,
    }}>{children}</UserContext.Provider>
}

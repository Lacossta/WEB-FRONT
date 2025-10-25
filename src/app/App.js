import './App.css';
import {BrowserRouter, RouterProvider} from "react-router-dom";
import Router from "./Router";
import Modals from "../pages/Modals";
import {UserWrapper} from "../context/UserContext";
import {ModalsWrapper} from "../context/ModalsContext";
import {PopupWrapper} from "../context/PopupContext";
import {OtherWrapper} from "../context/OtherContext";

function App() {
    return (
        <BrowserRouter>
            <UserWrapper>
                <ModalsWrapper>
                    <PopupWrapper>
                        <OtherWrapper>
                            <div className="App">
                                <Router/>
                                <Modals/>
                            </div>
                        </OtherWrapper>
                    </PopupWrapper>
                </ModalsWrapper>
            </UserWrapper>
        </BrowserRouter>
    );
}

export default App;

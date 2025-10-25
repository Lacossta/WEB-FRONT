import Start from "../pages/Start";
import En from "../pages/languages/En";
import De from "../pages/languages/De";
import Esp from "../pages/languages/Esp";
import Fra from "../pages/languages/Fra";
import Ita from "../pages/languages/Ita";
import Profile from "../pages/Profile";
import AdminPanel from "../pages/AdminPanel";


export const pages = [
    {
        path: "/",
        element: <Start />,
    },
    {
        path: "/languages/en",
        element: <En />,
    },
    {
        path: "/languages/de",
        element: <De />,
    },
    {
        path: "/languages/esp",
        element: <Esp/>,
    },
    {
        path: "/languages/fra",
        element: <Fra/>,
    },
    {
        path: "/languages/ita",
        element: <Ita/>,
    },
];

export const onlyUserPages = [
    {
        path: "/profile",
        element: <Profile />,
    },
];

export const adminPages = [
    {
        path: "/admin",
        element: <AdminPanel />,
    },
];
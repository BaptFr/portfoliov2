import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { lazy } from "react";

const Homepage= lazy (() => import('./pages/homepage/Homepage'));
const Projetspage= lazy( () => import ('./pages/projetspage/Projetspage'));

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path:'projets',
                element: <Projetspage />
            },
        ]
    },
]);
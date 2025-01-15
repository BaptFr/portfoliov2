import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { lazy } from "react";

const Homepage = lazy(() => import('./pages/homepage/Homepage'));
const Projectspage= lazy(() => import('./pages/projectspage/Projectspage'));
const ContactPage = lazy(() => import('./pages/contactpage/ContactPage'));

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
                element: <Projectspage />
            },
            {
                path:'contact',
                element: <ContactPage />
            }
        ]
    },
]);
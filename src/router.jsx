import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const LandingPage =  import('./pages/landingpage/Landingpage.jsx'));
const PresentationPage = import('./pages/presentationpage/Presentationpage'));
const ProjectsPage=  import('./pages/projectspage/Projectspage'));
const ContactPage =  import('./pages/contactpage/ContactPage'));
const ErrorPage =  import('./pages/errorpage/Errorpage'));


export const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path:'presentation',
                element: <PresentationPage />
            },
            {
                path:'projects',
                element: <ProjectsPage />
            },
            {
                path:'contact',
                element: <ContactPage />
            },
            {
                path:'*',
                element: <ErrorPage />
            }
        ]
    },
]);
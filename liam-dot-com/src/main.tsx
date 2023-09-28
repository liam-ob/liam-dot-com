import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Root from "./routes/Root.tsx";
import Contact from "./routes/Contact.tsx";
import Projects from "./routes/Projects.tsx";
import GamesRoute from "./routes/Games.tsx";

import ErrorPage from "./routes/pages/ErrorPage.tsx";
import HomePage from "./routes/pages/HomePage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "home/",
                element: <HomePage />,
            },
            {
                path: "contact/",
                element: <Contact />,
            },
            {
                path: "projects/",
                element: <Projects />,
            },
            {
                path: "games/",
                element: <GamesRoute />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

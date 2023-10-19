import NavBar, { Navigation } from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export const navigationItems: Navigation[] = [
    {
        name: "Home",
        href: "home",
        current: true,
    },
    {
        name: "Projects",
        href: "projects",
        current: false,
    },
    {
        name: "Games",
        href: "games",
        current: false,
    },
    {
        name: "Contact",
        href: "contact",
        current: false,
    },
    {
        name: "Blog",
        href: "blog/",
        current: false,
    },
];

export default function Root() {
    const [current, setCurrent] = useState("home");

    const navigationItems: Navigation[] = [
        {
            name: "Home",
            href: "home",
            current: current === "Home",
        },
        {
            name: "Projects",
            href: "projects",
            current: current === "Projects",
        },
        {
            name: "Games",
            href: "games",
            current: current === "Games",
        },
        {
            name: "Contact",
            href: "contact",
            current: current === "Contact",
        },
        {
            name: "Blog",
            href: "blog/",
            current: current === "Blog",
        },
    ];

    const handleNavigationClick = (href: string): void => {
        console.log("Clicked " + href);
        setCurrent(href);
    };

    return (
        <>
            <NavBar
                navigation={navigationItems}
                handleClick={handleNavigationClick}
            />
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}

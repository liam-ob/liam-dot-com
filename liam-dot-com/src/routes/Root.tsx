import NavBar, { Navigation } from "../components/NavBar";
import { Outlet } from "react-router-dom";

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
    return (
        <>
            <NavBar navigation={navigationItems} />
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}

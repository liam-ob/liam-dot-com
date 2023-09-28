import NavBar, { Navigation } from "../components/NavBar";
import { Outlet, Link } from "react-router-dom";

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
        href: "#",
        current: false,
    },
    {
        name: "Contact",
        href: "contact",
        current: false,
    },
    {
        name: "Blog",
        href: "#",
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

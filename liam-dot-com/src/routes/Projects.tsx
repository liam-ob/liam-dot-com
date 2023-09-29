import ProjectsPage from "./pages/ProjectsPage.tsx";
import { dataObject } from "../components/Table.tsx";

// add in getting this from an API call?
const projects: dataObject[][] = [
    [
        { heading: "id", content: "1" },
        { heading: "Name", content: "DjangoReactFlash" },
        {
            heading: "Purpose",
            content: "Fullstack flashcard application to help memorize things.",
        },
        { heading: "Role", content: "Solo Developer" },
        {
            heading: "Link",
            content: "https://github.com/liam-ob/DjangoReactFlash",
        },
        { heading: "linkText", content: "Github" },
        {
            heading: "imageUrl",
            content: "https://avatars.githubusercontent.com/u/98386642?v=4",
        },
        { heading: "dateStarted", content: "6 Sep 2023" },
    ],
    [
        { heading: "id", content: "2" },
        { heading: "Name", content: "liam-dot-com" },
        { heading: "Purpose", content: "My personal website." },
        { heading: "Role", content: "Solo Developer" },
        { heading: "Link", content: "https://github.com/liam-ob/liam-dot-com" },
        { heading: "linkText", content: "Github" },
        {
            heading: "imageUrl",
            content: "https://avatars.githubusercontent.com/u/98386642?v=4",
        },
        { heading: "dateStarted", content: "26 Sep 2023" },
    ],
];

const Projects = () => {
    return (
        <>
            <ProjectsPage projects={projects} />
        </>
    );
};

export default Projects;

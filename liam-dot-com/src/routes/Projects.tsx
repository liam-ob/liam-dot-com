import ProjectsPage, { Project } from "./pages/ProjectsPage.tsx";

// add in getting this from an API call?
const projects: Project[] = [
    {
        id: 1,
        name: "DjangoReactFlash",
        purpose: "Fullstack flashcard application to help memorize things.",
        role: "Solo Developer",
        link: "https://github.com/liam-ob/DjangoReactFlash",
        imageUrl: "https://avatars.githubusercontent.com/u/98386642?v=4",
        dateStarted: "6 Sep 2023",
    },
    {
        id: 2,
        name: "liam-dot-com",
        purpose: "My personal website.",
        role: "Solo Devloper",
        link: "https://github.com/liam-ob/liam-dot-com",
        imageUrl: "https://avatars.githubusercontent.com/u/98386642?v=4",
        dateStarted: " 26 Sep 2023",
    },
];

const Projects = () => {
    return (
        <>
            <ProjectsPage projects={projects} />
        </>
    );
};

export default Projects;

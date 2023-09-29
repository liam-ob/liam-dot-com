import { useState } from "react";
import { dataObject } from "../../components/Table";
import Tabs, { tabObject } from "../../components/Tabs";
import ProjectTableTab from "./tabs/projects/ProjectTable";
import ProjectListTab from "./tabs/projects/ProjectList";

interface ProjectPageProps {
    projects: dataObject[][];
}

const ProjectPage = ({ projects }: ProjectPageProps) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabObjects: tabObject[] = [
        { title: "List", content: <ProjectListTab data={projects} /> },
        { title: "Table", content: <ProjectTableTab data={projects} /> },
    ];

    return (
        <>
            <div className="py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h1 className="text-3xl text-center font-bold leading-tight text-gray-900">
                        Projects
                    </h1>

                    <Tabs
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        tabObjects={tabObjects}
                    />
                </div>
            </div>
        </>
    );
};

export default ProjectPage;

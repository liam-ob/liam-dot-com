import List, { listObject } from "../../../../components/List";
import { dataObject } from "../../../../components/Table";

interface ProjectListTabProps {
    data: dataObject[][];
}

const ProjectTableTab = ({ data }: ProjectListTabProps) => {
    const projectList: listObject[] = data.map((project, index) => {
        project[8] = project[8] ?? { heading: "", content: "" };
        return {
            id: index,
            name: project[1].content,
            purpose: project[2].content,
            role: project[3].content,
            link: project[4].content,
            linkText: project[5].content,
            imageUrl: project[6].content,
            dateStarted: project[7].content,
            dateFinished: project?.[8].content,
        };
    });
    return (
        <>
            <List listItems={projectList} />
        </>
    );
};

export default ProjectTableTab;

import Table, { dataObject } from "../../../../components/Table";

interface ProjectTableTabProps {
    data: dataObject[][];
}

const ProjectTableTab = ({ data }: ProjectTableTabProps) => {
    const projectTableRows: dataObject[][] = data.map((project, index) => {
        return [
            { heading: "id", content: index.toString() },
            { heading: "Name", content: project[1].content },
            { heading: "Purpose", content: project[2].content },
            { heading: "Role", content: project[3].content },
            { heading: "Link", content: project[4].content },
            { heading: "imageUrl", content: project[6].content },
            { heading: "dateStarted", content: project[7].content },
            project[8],
        ];
    });

    return (
        <>
            <Table rows={projectTableRows} />
        </>
    );
};

export default ProjectTableTab;

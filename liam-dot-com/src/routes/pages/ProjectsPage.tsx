export interface Project {
    id: number;
    name: string;
    purpose: string;
    role: string;
    link: string;
    imageUrl: string;
    dateStarted: string;
    dateFinished?: string;
}

interface ProjectPageProps {
    projects: Project[];
}

const ProjectPage = ({ projects }: ProjectPageProps) => {
    return (
        <>
            <div className="py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h1 className="text-3xl text-center font-bold leading-tight text-gray-900">
                        Projects
                    </h1>

                    <ul role="list" className="divide-y divide-gray-100">
                        {projects.map((project) => (
                            <li
                                key={project.id}
                                className="flex justify-between gap-x-6 py-5"
                            >
                                <div className="flex min-w-0 gap-x-4">
                                    <img
                                        className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                        src={project.imageUrl}
                                        alt=""
                                    />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">
                                            {project.name}
                                        </p>
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                            {project.purpose}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-x-10 justify-between">
                                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                        <p className="text-sm leading-6 text-gray-900">
                                            {project.role}
                                        </p>
                                        {project.dateFinished ? (
                                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                                Finished{" "}
                                                <time
                                                    dateTime={
                                                        project.dateFinished
                                                    }
                                                >
                                                    {project.dateFinished}
                                                </time>
                                            </p>
                                        ) : (
                                            <div className="mt-1 flex items-center gap-x-1.5">
                                                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                </div>
                                                <p className="text-xs leading-5 text-gray-500">
                                                    Ongoing
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            className="text-sm font-medium leading-6 text-emerald-600 hover:text-emerald-500"
                                        >
                                            View on GitHub
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            )
        </>
    );
};

export default ProjectPage;

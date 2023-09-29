// Should really make this into a list and make it malleabe to the list
export interface listObject {
    id: number | string;
    name: string;
    purpose: string;
    role: string;
    link: string;
    linkText: string;
    imageUrl: string;
    dateStarted: string;
    dateFinished?: string | undefined;
}

interface ListProps {
    listItems: listObject[];
}

const List = ({ listItems }: ListProps) => {
    return (
        <>
            <ul role="list" className="divide-y divide-gray-100">
                {listItems.map((listItem) => (
                    <li
                        key={listItem.id}
                        className="flex justify-between gap-x-6 py-5"
                    >
                        <div className="flex min-w-0 gap-x-4">
                            <img
                                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                src={listItem.imageUrl}
                                alt=""
                            />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                    {listItem.name}
                                </p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                    {listItem.purpose}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-x-10 justify-between">
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">
                                    {listItem.role}
                                </p>
                                {listItem.dateFinished ? (
                                    <p className="mt-1 text-xs leading-5 text-gray-500">
                                        Finished{" "}
                                        <time dateTime={listItem.dateFinished}>
                                            {listItem.dateFinished}
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
                                    href={listItem.link}
                                    target="_blank"
                                    className="text-sm font-medium leading-6 text-emerald-600 hover:text-emerald-500"
                                >
                                    {listItem.linkText}
                                </a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default List;

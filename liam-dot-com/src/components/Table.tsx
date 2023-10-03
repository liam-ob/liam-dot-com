export interface dataObject {
    heading: string;
    content: string;
}

interface TableProps {
    rows: dataObject[][];
}

const Table = ({ rows }: TableProps) => {
    return (
        <>
            <table className="min-w-full text-left font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                        {rows.slice(0, 1).map((row) => (
                            <>
                                {row.map((data, colIndex) => (
                                    <th
                                        key={colIndex}
                                        scope="col"
                                        className="px-4 py-4"
                                    >
                                        {data.heading}
                                    </th>
                                ))}
                            </>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                        >
                            {row.map((data, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="whitespace-nowrap px-6 py-4"
                                >
                                    {data.content}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;

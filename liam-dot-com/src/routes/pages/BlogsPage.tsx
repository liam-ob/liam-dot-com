import { useState } from "react";
import List from "../../components/List";
import { listObject } from "../../components/List";

interface BlogsPageProps {
    blogsList: listObject[];
}

const BlogsPage = ({ blogsList }: BlogsPageProps) => {
    return (
        <>
            <div className="py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h1 className="text-3xl text-center font-bold leading-tight text-gray-900">
                        Projects
                    </h1>

                    <List listItems={blogsList} />
                </div>
            </div>
        </>
    );
};

export default BlogsPage;

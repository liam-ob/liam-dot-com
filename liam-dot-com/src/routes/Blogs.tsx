import List from "../components/List";
import { listObject } from "../components/List";

const blogPostList: listObject[] = [
    {
        id: 1,
        name: "myblog",
        purpose: "test the blog post",
        role: "author",
        link: "https://liamdotcom.vercel.app/blog/myblog",
        linkText: "myblog",
        imageUrl: "my link",
        dateStarted: "2021-08-01",
        dateFinished: "2021-08-01",
    },
];

const BlogRoute = () => {
    return (
        <>
            <div className="mx-auto py-12 px-4 sm:px-0 lg:px-8">
                <h1 className="text-3xl text-center font-bold leading-tight">
                    Blog
                </h1>
            </div>
            {}
            <List listItems={blogPostList} />
        </>
    );
};

export default BlogRoute;

import React from "react";
import connectMongoDB from "@/libs/mongodb";
import Blog from "@/app/model/Blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import mongoose from "mongoose";


const ArticlePage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    await connectMongoDB();
    if (!mongoose.isValidObjectId(id)) {
        return <div>Invalid Blog ID</div>;
    }
    const blog = await Blog.findById(id);

    if (!blog) {
        return <div>no blog...</div>;
    }
    const markdown = await blog.content
    const cleanMarkdown = markdown.replace(/\\([()[\]<>])/g, "$1");
    return (
        <div className="grid justify-center w-full my-8">
            <div className="grid grid-rows-[auto_1fr] gap-4 w-full max-w-3xl">
                <h1 className="text-center text-3xl font-bold">{blog.title}</h1>
                <div className="prose prose-a:text-blue-500 w-full mx-8">
                    <MDXRemote source={cleanMarkdown} />
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;

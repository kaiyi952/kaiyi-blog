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

    return (
        <div className="prose flex flex-col items-center justify-center w-[100%]">
            <h1>{blog.title}</h1>
            <MDXRemote source={markdown} />
        </div>
    );
};

export default ArticlePage;

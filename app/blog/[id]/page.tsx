import React from "react";
import connectMongoDB from "@/libs/mongodb";
import Blog from "@/app/model/Blog";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import mongoose from "mongoose";
import styles from "./article.module.scss";

const ArticlePage = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    await connectMongoDB();

    if (!mongoose.isValidObjectId(id)) {
        return <div>Invalid Blog ID</div>;
    }

    const blog = await Blog.findById(id);
    if (!blog) {
        return <div>No blog found...</div>;
    }

    const markdown = blog.content;

    // 解析 MDX 并提取 Frontmatter
    const { content, frontmatter } = await compileMDX<{
        title: string;
        description: string;
        tags: [string];
        createdAt: string;
    }>({
        source: markdown,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [remarkGfm],
            },
        },
    });
    console.log("Frontmatter:", frontmatter);

    return (
        <div className={`${styles.main} grid justify-center w-full my-8`}>
            <div className="grid grid-rows-[auto_1fr] gap-4 w-full max-w-3xl">
                <h1 className="text-center text-3xl font-bold">{frontmatter.title}</h1>
                <h1 className="text-center text-3xl font-bold">{blog.title}</h1>
                <div className={`prose prose-a:text-blue-500 w-full mx-8 ${styles.main}`}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;

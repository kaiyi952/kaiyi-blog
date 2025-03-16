import React from "react";
import connectMongoDB from "@/libs/mongodb";
import Blog from "@/app/model/Blog";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import mongoose from "mongoose";
import styles from "./article.module.scss";
import { codeToHtml } from "shiki";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    await connectMongoDB();
    if (!mongoose.isValidObjectId(id)) {
        return { title: "Invalid Blog", description: "The blog ID is invalid" };
    }

    const blog = await Blog.findById(id);
    if (!blog) {
        return { title: "Blog Not Found", description: "No blog found for this ID" };
    }

    const { frontmatter } = await compileMDX<{
        title: string;
        description: string;
        tags?: string[];
    }>({
        source: blog.content,
        options: { parseFrontmatter: true, mdxOptions: { remarkPlugins: [remarkGfm] } },
    });

    return {
        title: frontmatter.title,
        description: frontmatter.description,
        keywords: frontmatter.tags && Array.isArray(frontmatter.tags) ? frontmatter.tags.join(", ") : "",
        openGraph: {
            title: frontmatter.title,
            description: frontmatter.description,
            type: "article",
        },
    };
}

async function CodeBlock({ children, className }: { children: string; className?: string }) {
    const lang = className?.replace("language-", "") || "text";
    const highlightedCode = await codeToHtml(children, { lang, theme: "github-dark" });

    return <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
}

const ArticlePage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    await connectMongoDB();

    if (!mongoose.isValidObjectId(id)) {
        return <div>Invalid Blog ID</div>;
    }

    const blog = await Blog.findById(id);
    if (!blog) {
        return <div>No blog found...</div>;
    }

    const markdown = blog.content;

    const { content, frontmatter } = await compileMDX<{
        title: string;
        description: string;
        tags: string[];
        createdAt: string;
    }>({
        source: markdown,
        options: { parseFrontmatter: true, mdxOptions: { remarkPlugins: [remarkGfm], } },
        components: {
            pre: ({ children }) => <>{children}</>,
            code: CodeBlock,
        },
    });

    return (
        <div className={`${styles.main} grid justify-center w-full my-8`}>
            <div className="grid grid-rows-[auto_1fr] gap-4 w-full max-w-3xl">
                <h1 className="text-center text-3xl font-bold">
                    {frontmatter?.title || blog?.title || "Untitled"}
                </h1>
                <div className={`prose prose-a:text-blue-500 w-full mx-8 ${styles.main}`}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;

import React from "react";
import connectMongoDB from "@/libs/mongodb";
import Blog from "@/app/model/Blog";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import mongoose from "mongoose";
import styles from "./article.module.scss";
import { codeToHtml } from "shiki";
import Link from "next/link";
import { FaRegHandPointLeft } from "react-icons/fa6";

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
        <div className={`${styles.main} flex justify-center w-full mb-2`}>
            <div className="flex flex-col items-center gap-3 w-full max-w-3xl">
                <Link href='/blog' className="w-full pl-4 font-bold flex items-center gap-2"><FaRegHandPointLeft />Back to lists</Link>
                <h1 className="text-center text-3xl font-bold">
                    {frontmatter?.title || blog?.title || "Untitled"}
                </h1>
                <h2 className={styles.date}>created on: {new Date(blog.createdAt).toLocaleDateString()}</h2>
                <div className={`prose prose-a:text-blue-500 w-full  ${styles.main} `}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;

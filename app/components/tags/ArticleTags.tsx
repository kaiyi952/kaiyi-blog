'use client';
import React, { FC } from 'react'
import styles from './article-tags.module.scss';
import { usePathname, useSearchParams } from "next/navigation";
import router from 'next/router';


interface ArticleTagsProps {
    tags: string[] | undefined;
    activTag: string;
    handleTag: () => void;
}


const ArticleTags: FC<ArticleTagsProps> = ({ activeTag, handleTag, tags }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const currentTags = searchParams.get("tags")?.split(",") || [];
    console.log(currentTags);
    console.log(searchParams);

    const handleTagChange = (tag: string) => {
        const updatedTags = currentTags.includes(tag)
            ? currentTags.filter((t) => t !== tag) // 移除标签
            : [...currentTags, tag]; // 添加标签

        const queryString = updatedTags.length > 0 ? `?tags=${updatedTags.join(",")}` : "";

        router.push(`${pathname}${queryString}`);
    };
    if (!tags || (Array.isArray(tags) && tags.length === 0)) {
        return null;
    }
    return (
        <>
            {tags.map((tag) => (
                <button
                    key={tag}
                    className={`${styles.article} ml-6 md:inline-block `} style={{ color: '#2733f5' }}
                    onClick={handleTag}
                >
                    {tag}
                </button>
            ))}
        </>
    );
};

export default ArticleTags
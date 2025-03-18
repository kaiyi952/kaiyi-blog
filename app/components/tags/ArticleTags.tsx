import React, { FC } from 'react';
import Link from 'next/link';
import styles from './article-tags.module.scss';
import { FaTag } from 'react-icons/fa6';

interface ArticleTagsProps {
    tags: string[] | undefined;
    activeTag: string;
}


const ArticleTags: FC<ArticleTagsProps> = ({ activeTag, tags }) => {

    if (!tags || (Array.isArray(tags) && tags.length === 0)) {
        return null;
    }
    return (
        <>
            <Link href="/blog" className={`${styles.article} ml-2 sm:ml-6 md:inline-block ${activeTag === "" ? styles.articleActive : ""}`} style={{ color: '#2733f5' }}>All</Link>
            {tags.map((tag) => (
                <Link
                    key={tag}
                    className={`${styles.article} ml-2 sm:ml-4 md:inline-block ${activeTag === tag ? styles.articleActive : ""}`} style={{ color: '#2733f5' }}
                    href={`/blog?tag=${tag}`}
                >
                    <FaTag />{tag}
                </Link>
            ))}
        </>
    );
};

export default ArticleTags
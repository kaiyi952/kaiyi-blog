import React, { FC } from 'react'
import styles from './article-tags.module.scss';


interface ArticleTagsProps {
    tags: string[] | undefined;
    activTag: string;
    handleTag: () => void;
}


const ArticleTags: FC<ArticleTagsProps> = ({ activeTag, handleTag, tags }) => {
    if (!tags || (Array.isArray(tags) && tags.length === 0)) {
        return null;
    }
    return (
        <>
            {tags.map((tag) => (
                <button
                    key={tag}
                    className={`${styles.article} ml-6 md:inline-block ${isActive ? 'active' : ''}`} style={{ color: '#2733f5' }}
                    onClick={handleTag}
                >
                    {tag}
                </button>
            ))}
        </>
    );
};

export default ArticleTags
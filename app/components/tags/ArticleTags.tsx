import React, { FC } from 'react'
import styles from './article-tags.module.scss';


interface ArticleTagsProps {
    tags: string[] | undefined;
}


const ArticleTags: FC<ArticleTagsProps> = ({ tags }) => {
    if (!tags || (Array.isArray(tags) && tags.length === 0)) {
        return null;
    }
    return (
        <>
            {tags.map((tag) => (
                <button
                    key={tag}
                    className={`${styles.articleHover} ml-6 md:inline-block`} style={{ color: '#2733f5' }}
                >
                    {tag}
                </button>
            ))}
        </>
    );
};

export default ArticleTags
import React, { FC } from 'react'
import styles from "./article-card.module.scss"
import Link from 'next/link'
import ArticleActionButtons from './ArticleActionButtons'

export interface ArticleCardProps {
    title: string;
    description: string;
    createdAt: Date;
}

const ArticleCard: FC<ArticleCardProps> = ({ title, description }) => {
    return (
        <Link href={`/article`}>
            <div className='flex justify-between'>
                <div>
                    <h1 className={`${styles.title}`}>{title}</h1>
                    <div className={`${styles.description}`}>{description}</div>
                </div>
                <ArticleActionButtons id='123' />
            </div>
        </Link>
    )
}

export default ArticleCard
import React, { FC } from 'react'
import styles from "./article-card.module.scss"
import Link from 'next/link'
import ArticleActionButtons from './ArticleActionButtons'
import { BlogEntry } from '../List/BlogList'


const ArticleCard: FC<{ blog: BlogEntry }> = (props) => {
    const { id, title, description, date }: BlogEntry = props.blog;
    return (
        <>
            <Link href={`/article`} key={id} >
                <div className='flex justify-between mb-4'>
                    <div>
                        <h1 className={`${styles.title}`}>{title}</h1>
                        <div className={`${styles.description}`}>{description}</div>
                    </div>
                    <div className='flex items-start gap-2'>
                        <p className={`${styles.description}`}>{new Date(date).toLocaleDateString()}</p>
                        <ArticleActionButtons id='123' />
                    </div>
                </div>
            </Link>
        </>



    )
}

export default ArticleCard
import React, { FC } from 'react'
import styles from "./article-card.module.scss"
import Link from 'next/link'
import ArticleActionButtons from './ArticleActionButtons'
import { BlogEntry } from '../List/BlogList'


const ArticleCard: FC<{ blog: BlogEntry }> = (props) => {
    const { id, title, description, createdAt }: BlogEntry = props.blog;
    return (
        <>
            <Link href={`/blog/${id}`} key={id} >
                <div className='flex flex-col  justify-between mb-4 max-w-[700px] '>
                    <div className='flex justify-between'>
                        <h1 className={`${styles.title}`}>{title}</h1>
                        <div className='flex items-start gap-2'>
                            <p className={`${styles.description}`}>{new Date(createdAt).toLocaleDateString()}</p>
                            <ArticleActionButtons id={id} />
                        </div>
                    </div>
                    <div className={`${styles.description} sm:max-w-[550px]  w-[360px]`}>{description}</div>
                </div>
            </Link>
        </>



    )
}

export default ArticleCard
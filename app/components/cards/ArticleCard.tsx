import React, { FC } from 'react'
import styles from "./article-card.module.scss"
import Link from 'next/link'
import ArticleActionButtons from './ArticleActionButtons'
import { BlogEntry } from '../List/BlogList'
import pinyin from "tiny-pinyin"
import slugify from 'slugify'

const ArticleCard: FC<{ blog: BlogEntry }> = (props) => {
    const { id, title, description, createdAt }: BlogEntry = props.blog;
    const param_title = title.toLowerCase().replace(/\s+/g, "-")
    const convertedTitle = pinyin.convertToPinyin(title, '-', true)
    const slug = slugify(convertedTitle, { lower: true })
    console.log(slug)

    return (
        <>
            <Link href={`/blog/${param_title}`} key={id} >
                <div className='flex flex-col  justify-between mb-4 max-w-[700px] '>
                    <div className='flex justify-between'>
                        <div className={styles.title}><span className={styles.arrow}>&gt;</span> <span className='underline'>{title}</span>   </div>
                        <div className='flex items-start gap-2'>
                            <p className={`${styles.date}`}>{new Date(createdAt).toLocaleDateString()}</p>
                            <ArticleActionButtons id={id} />
                        </div>
                    </div>
                    <div className={`${styles.description} sm:w-[550px]  w-[360px]`}>{description}</div>
                </div>
            </Link>
        </>



    )
}

export default ArticleCard
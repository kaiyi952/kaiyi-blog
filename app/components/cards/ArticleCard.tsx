import React, { FC } from 'react'
import styles from "./article-card.module.scss"
import Link from 'next/link'
import ArticleActionButtons from './ArticleActionButtons'

const ArticleCard: FC = () => {
    return (<>
        <Link href={`/article`}>
            <div className='flex justify-between'>
                <div>
                    <h1 className={`${styles.title}`}>Title</h1>
                    <div className={`${styles.description}`}>Description</div>
                </div>
                <ArticleActionButtons id='123' />
            </div>
        </Link>

    </>

    )
}

export default ArticleCard
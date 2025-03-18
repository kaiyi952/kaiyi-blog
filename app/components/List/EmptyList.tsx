import React, { FC } from 'react'
import styles from './blog-list.module.scss'

const EmptyList: FC = () => {
    return (
        <div className={styles.title}>Nothing there...</div>
    )
}

export default EmptyList
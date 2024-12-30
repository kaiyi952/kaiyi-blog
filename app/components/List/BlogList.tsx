import React, { FC } from 'react'
import RemoveBtn from '../buttons/RemoveBtn'
import styles from "./blog-list.module.scss"
import Link from 'next/link'
import { BiPencil } from 'react-icons/bi'

const BlogList: FC = () => {
  return (<>
    <div className='flex justify-between'>
      <div>
        <h1 className={`${styles.title}`}>Title</h1>
        <div className={`${styles.description}`}>Description</div>
      </div>
      <div className='flex items-start gap-2'>
        <Link href={"/editblog/123"} style={{ color: "#2733f5" }}>
          <BiPencil size={24} />
        </Link>
        <RemoveBtn />
      </div>
    </div>
  </>

  )
}

export default BlogList
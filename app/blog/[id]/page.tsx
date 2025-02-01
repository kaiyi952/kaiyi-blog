import React from 'react'
// import styles from "./article.module.scss"
import connectMongoDB from '@/libs/mongodb';
import Blog from '@/app/model/Blog';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';

const Articlepage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    await connectMongoDB();
    const blog = await Blog.findById(id);
    if (!blog) {
        throw new PageNotFoundError("blog");
    }
    return (
        <div className='flex flex-col items-center'>
            <div>{blog.title}</div>
            <div>{blog.content}</div>
        </div>
    )
}

export default Articlepage
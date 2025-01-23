import EditTopicForm from '@/app/components/Form/EditTopicForm'
import connectMongoDB from '@/libs/mongodb';
import React, { FC } from 'react'
import Blog from '@/app/model/Blog';

const Editpage: FC<{ params: Promise<{ id: string }> }> = async ({ params }) => {
    const id = (await params).id;
    await connectMongoDB();
    const blog = await Blog.findById(id);
    const { title, description, content, tags } = blog
    console.log(blog);
    console.log(id);
    return (
        <EditTopicForm id={id} title={title} description={description} content={content} tags={tags} />
    )
}

export default Editpage
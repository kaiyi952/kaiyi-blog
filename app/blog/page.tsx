import React from 'react'
import styles from './blog.module.scss'
import Link from 'next/link';
import { SignedIn } from '@clerk/nextjs';
import connectMongoDB from '@/libs/mongodb';
import Blog from '../model/Blog';
import BlogList from '../components/List/BlogList';
import ArticleTags from '../components/tags/ArticleTags';
import BlogTag from '../model/BlogTag';
import Pagination from '@/app/components/pagination/Pagination';


const PER_PAGE = 4;


const BlogPage = async ({ searchParams }: { searchParams: { tag?: string, page?: string } }) => {
    const params = await searchParams;
    const tag = params.tag ?? "";
    const currentPage = params?.page ? parseInt(params.page, 10) : 1;
    await connectMongoDB();
    const tags = await BlogTag.find();
    let allBlogs;
    if (tag) {
        allBlogs = await Blog.find({ tags: { $in: tag } });
    } else {
        allBlogs = await Blog.find();
    }

    const blogs = allBlogs.sort((a, b) => b.createdAt - a.createdAt)
        .slice(PER_PAGE * (currentPage - 1), PER_PAGE * currentPage);
    const totalPages = Math.ceil(allBlogs.length / PER_PAGE);



    return (
        <div className={`${styles.main}`}>
            <div className="inline-block">
                <p className={`${styles.header} text-center text-[130px] sm:text-[200px] sm:ml-10 ml-5 w-fit -z-10 relative leading-[0.8em] select-none`}>
                    <span>Kaiyi&apos;s Blog</span>
                    <img className="absolute -z-20 top-0 object-contain w-[80%]" src="/bg1.png" />
                </p>
            </div>
            <div className="flex flex-col items-center w-screen sm:items-start sm:flex-row sm:justify-between md:mt-9" >
                <div className='flex flex-col sm:ml-10 mx-auto w-[95%]'>
                    <div className={`${styles.article} mt-8 mx-8 sm:w-[50vw] sm:mt-20 sm:max-w-[700px]`}>
                        <div className='flex my-8 sm:my-0'>
                            <p className='md:inline-block'><b>Tags: </b></p>
                            <ArticleTags tags={tags.map((v) => v.name)} activeTag={tag} />
                            <SignedIn>
                                <Link href="/createblog" className={`${styles.articleHover} ml-8 md:inline-block`} style={{ color: '#2733f5' }}>Add</Link>
                            </SignedIn>
                        </div>
                    </div>
                    <div className="mt-0 mx-8 sm:w-[50vw] sm:mt-6 sm:max-w-[700px] h-[290px]" data-aos="fade-in">
                        <BlogList blogs={blogs} />
                    </div>
                    <Pagination currentPage={currentPage} totalPages={totalPages} tag={tag} />
                </div>
                <p className={`w-[80%] sm:w-auto mt-8 sm:mr-[20%] sm:ml-10 xl:mr-[30%] ${styles.subHeader} max-w-[300px]`}>
                    Live in Paradox
                </p>
            </div>
        </div >
    )
}

{/*Tried to use StaticParams to do pagination but failed*/ }
{/*
const getStaticParams = async () => {
    await connectMongoDB();
    const blogs = await Blog.find()
    const n = Math.ceil(blogs.length / PER_PAGE);
    const arr = Array.from({ length: n }, (_, i) => ({
        id: ["page", (i + 1).toString()],
    }));
    return arr;
}

export { getStaticParams };*/ }
export default BlogPage;

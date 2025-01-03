import React, { FC } from 'react'
import styles from './blog.module.scss'
import Link from 'next/link';
import { SignedIn } from '@clerk/nextjs';
import connectMongoDB from '@/libs/mongodb';
import Blog from '../model/Blog';
import BlogList from '../components/List/BlogList';
import ArticleTags from '../components/tags/ArticleTags';
import Tag from '../model/Tag';

const BlogPage: FC = async () => {
    // let blogs: BlogProps[] = [];
    // try {
    //     if (!rawData.ok) {
    //         throw new Error(`HTTP error! Status: ${rawData.status}`);
    //     }
    // } catch (error) {
    //     console.error("Error fetching blogs:", error);
    // }
    // const rawData = await fetch('http://localhost:3000/api/blogs/');
    // const { blogs } = (await rawData.json());
    await connectMongoDB();
    const blogs = await Blog.find();
    const tags = await Tag.find();

    return (
        <>
            <div className="inline-block">
                <p className={`${styles.header} text-center text-[130px] sm:text-[200px] sm:ml-10 ml-5 w-fit -z-10 relative leading-[0.8em] select-none`}>
                    <span>Kaiyi's Blog</span>
                    <img className="absolute -z-20 top-0 object-contain w-[80%]" src="/bg1.png" />
                </p>
            </div>
            <div className="flex items-center w-screen sm:items-start sm:flex-row sm:justify-between md:mt-9" data-aos="zoom-in">
                <div className='flex flex-col sm:ml-10'>
                    <div className={`${styles.article} mt-8 mx-8 sm:w-[50vw] sm:mt-20 sm:max-w-[700px]`}>
                        <p className='md:inline-block'><b>tags: </b></p>
                        <ArticleTags tags={tags.map((v) => v.name)} />
                        {/* <button className={`${styles.articleHover}`} style={{ color: '#2733f5' }}>Developer Blog</button>
                        <button className={`${styles.articleHover} ml-8 md:inline-block`} style={{ color: '#2733f5' }}>Book Review</button>
                        <button className={`${styles.articleHover} ml-8 md:inline-block`} style={{ color: '#2733f5' }}>Journal</button> */}
                        <SignedIn>
                            <Link href="/createblog" className={`${styles.articleHover} ml-8 md:inline-block`} style={{ color: '#2733f5' }}>Add</Link>
                        </SignedIn>
                    </div>
                    <div className="mt-0 mx-8 sm:w-[50vw] sm:mt-6 sm:max-w-[700px]">
                        <BlogList blogs={blogs} />
                    </div>
                </div>
                <p className={`w-[80%] sm:w-auto mt-8 sm:mr-[7%] sm:ml-10 xl:mr-[15%] ${styles.subHeader}`}>
                    Live in Paradox
                </p>
            </div>
        </>
    )
}

export default BlogPage;

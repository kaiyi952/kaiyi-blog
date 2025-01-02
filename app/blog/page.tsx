import React, { FC } from 'react'
import styles from './blog.module.scss'
import Image from "next/image";
import Link from 'next/link';
import { SignedIn } from '@clerk/nextjs';
import ArticleCard from '../components/cards/ArticleCard';

const Page = async () => {

    return (
        <>
            <div className="inline-block">
                <p className={` ${styles.header} text-center text-[130px] sm:text-[200px] sm:ml-10 ml-5 w-fit -z-10 relative leading-[0.8em] select-none`}>
                    <span>Kaiyi's Blog</span>
                    <img className="absolute -z-20 top-0 object-contain w-[80%]" src="/bg1.png" />
                </p>
            </div>
            <div className="flex items-center w-screen sm:items-start sm:flex-row sm:justify-between md:mt-9" data-aos="zoom-in">
                <div className='flex flex-col sm:ml-10'>
                    <div className={`${styles.article} mt-8 mx-8  sm:w-[50vw] sm:mt-20 sm:max-w-[700px]`} >
                        <p className='  md:inline-block'><b>tags: </b></p>&nbsp;&nbsp;
                        <button className={`${styles.articleHover}`} style={{ color: '#2733f5' }} >Developer Blog</button>
                        <button className={`${styles.articleHover} ml-8  md:inline-block`} style={{ color: '#2733f5' }}>Book Review</button>
                        <button className={`${styles.articleHover} ml-8  md:inline-block`} style={{ color: '#2733f5' }}>Journal</button>
                        <SignedIn>
                            <Link href="/createblog" className={`${styles.articleHover} ml-8  md:inline-block`} style={{ color: '#2733f5' }}>Add</Link>
                        </SignedIn>
                    </div>
                    <div className={`mt-0 mx-8  sm:w-[50vw] sm:mt-6 sm:max-w-[700px]`}><ArticleCard /></div>

                </div>


                <Image
                    src="/kaiyi2.png"
                    width={400}
                    height={400}
                    alt="Picture of the author"
                    className="w-[80%] sm:w-auto mt-8 sm:mr-[7%] xl:mr-[15%]"
                    data-aos="zoom-in"
                />
            </div>

        </>
    )
}

export default Page
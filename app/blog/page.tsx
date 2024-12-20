import React from 'react'
import styles from './blog.module.scss'
import Image from "next/image";
import Link from 'next/link';
function page() {
    return (
        <>
            <div className="inline-block">
                <p className={` ${styles.header} text-center text-[130px] sm:text-[200px] sm:ml-10 ml-5 w-fit -z-10 relative leading-[0.8em] select-none`}>
                    <span>Kaiyi's Blog</span>
                    <img className="absolute -z-20 top-0 object-contain w-[80%]" src="/bg1.png" />
                </p>
            </div>
            <div className="flex flex-col items-center w-screen sm:items-start sm:flex-row sm:justify-between md:mt-9">
                <div className={`${styles.article} mt-8 mx-8 sm:ml-10 sm:w-[50vw] sm:mt-20 sm:max-w-[700px]`}>
                    <Link href="/developerblog" style={{ color: '#2733f5' }} className='mr-4' >Developer Blog</Link>
                    <Link href="/readingjournal" className='ml-8  md:inline-block' style={{ color: '#2733f5' }}>Reading Journal</Link>
                </div>

                <Image
                    src="/kaiyi2.png"
                    width={400}
                    height={400}
                    alt="Picture of the author"
                    className="w-[80%] sm:w-auto mt-8 sm:mr-[7%] xl:mr-[15%]"
                />
            </div>
        </>
    )
}

export default page
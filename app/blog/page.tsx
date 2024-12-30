'use client'
import React from 'react'
import styles from './blog.module.scss'
import Image from "next/image";
import Link from 'next/link';
import { SignedIn } from '@clerk/nextjs';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import BlogList from '../components/List/BlogList';

function page() {
    useEffect(() => {
        AOS.init({
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 600, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        });
    }, []);

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
                            <Link href="/createblog" className={`${styles.articleHover} ml-8  md:inline-block`} style={{ color: '#2733f5' }}>add</Link>
                        </SignedIn>
                    </div>
                    <div className={`mt-0 mx-8  sm:w-[50vw] sm:mt-6 sm:max-w-[700px]`}><BlogList /></div>

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

export default page
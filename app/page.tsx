'use client'
import styles from "./home.module.scss";
import React from 'react'
import Image from "next/image";
import ReactECharts from 'echarts-for-react';
import Echart from "./echart/page";
import { options } from './echart/page'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

function page() {
  useEffect(() => {
    AOS.init({
      // Global settings:
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
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
  }, []);
  return (
    <>
      <div className="inline-block">
        <p className={`${styles.header} text-center text-[130px] sm:text-[200px] sm:ml-10 ml-5 w-fit -z-10 relative leading-[0.8em]`}>
          <span>Kaiyi's Home</span>
          <img className="absolute -z-10 top-0 object-contain w-[80%]" src="/bg1.png" />
        </p>
      </div>
      <div className="flex flex-col items-center w-screen sm:items-start sm:flex-row sm:justify-between md:mt-9" data-aos="zoom-in">
        <p className={`${styles.subHeader} sm:mt-20 ml-18 sm:ml-20 mt-8`}>about me</p>
        <p className={`${styles.article} ml-12 mt-8 mx-8 sm:ml-8 sm:w-[50vw] sm:mt-20 sm:max-w-[700px]`}>
          Hello world! My name is Kaiyi<br />
          Used to be a student in English Literature<br />
          Now I'm a passionate web developer and designer, dedicated to crafting seamless, user-friendly applications that blend functionality with aesthetic appeal.<br />
          I'm always curious and open to new ideas, seeking opportunities to collaborate with others, share knowledge, and explore innovative approaches. My goal is to not only improve my own skills but also contribute to a community of like-minded individuals.<br />
          Let's connect and create something impactful together!
        </p>
        <Image
          src="/kaiyi.png"
          width={400}
          height={400}
          alt="Picture of the author"
          className="w-[80%] sm:w-auto mt-8 sm:mr-[7%] xl:mr-[15%] "
          data-aos="fade-up"
        />
      </div >
      <div className="flex justify-center " data-aos="fade-up">
        <Image
          src="/arrow.png"
          width={320}
          height={320}
          alt="arrow"
          className="my-0 hidden md:inline-block sm:mt-8"
        />
      </div>
      <div className="flex flex-col-reverse items-center w-screen sm:items-start sm:flex-row sm:justify-between md:mt-0" data-aos="fade-up">
        <ReactECharts className="flex-none sm:ml-0 basis-4/12 sm:w-auto mt-2  xl:ml-8" option={options} />
        {/* <Image
          src="/kaiyi.png"
          width={400}
          height={400}
          alt="Picture of the author"
          className="w-[80%] sm:w-auto mt-2 sm:ml-10 xl:ml-12"
        /> */}
        <ul className={`${styles.article} mt-8 mx-8 sm:ml-18 ml-12 sm:w-[50vw] sm:mt-10 sm:max-w-[700px]`}>
          <li><b>Languages: </b> JavaScript, TypeScript, HTML, CSS, Python, C#</li>
          <li><b>Frameworks & Libraries: </b> React, Next.js, Blazor, Tailwind CSS</li>
          <li><b>Databases: </b> MySQL, Prisma</li>
          <li><b>Tools & Platforms: </b> Figma, Git, Jest, Mocha, Vercel</li>
          <li><b>Others: </b> REST APIs, Responsive Design, Graphic Design</li>
        </ul>
        <p className={`${styles.subHeader} sm:mt-12 sm:mr-[7%] xl:mr-[15%] mt-8`}>tech</p>
      </div>
      <div className="flex flex-col items-center w-screen sm:items-start sm:flex-row sm:justify-start md:mt-9" data-aos="fade-up">
        <p className={`${styles.subHeader} sm:mt-20 ml-18 sm:ml-20 mt-8`}>projects</p>
        <p className={`${styles.article} ml-12 mt-8 mx-8 sm:ml-20  xl:ml-20 sm:mt-20 sm:max-w-[700px]`}>
          Hello world! My name is Kaiyi<br />
          Used to be a student in English Literature<br />
          Now I'm a passionate web developer and designer, dedicated to crafting seamless, user-friendly applications that blend functionality with aesthetic appeal.<br />
          I'm always curious and open to new ideas, seeking opportunities to collaborate with others, share knowledge, and explore innovative approaches. My goal is to not only improve my own skills but also contribute to a community of like-minded individuals.<br />
          Let's connect and create something impactful together!
        </p>
      </div >
    </>
  )
}

export default page
"use client";
import styles from "./home.module.scss";
import React from 'react'
import Image from "next/image";
import SideNav from "./components/navbar/SideNav";
import { FaInstagram, FaGithub, FaEnvelope, FaHandPointRight, FaRightLong } from 'react-icons/fa6';
import Link from "next/link";
import Sparkles from "./components/sparkle/Sparkles";
import TrueFocus from "./components/focus/TrueFocus";
import { TypeAnimation } from 'react-type-animation';

function Page() {
  return (
    <>
      {/*home*/}
      <div id="home" className="inline-block">
        <div className={`${styles.header} text-center text-[120px] sm:text-[180px] sm:ml-10 ml-5 w-fit -z-10 relative leading-[0.8em]`}>
          <p><Sparkles>Kaiyi</Sparkles> &apos;s Home</p>
          <img className="absolute -z-10 top-0 object-contain w-[80%]" src="/title-bg1.png" />
        </div>
      </div>

      {/*about*/}
      <div id="about" className="flex flex-col items-center w-screen sm:items-start sm:flex-row sm:justify-between md:mt-9 sm:" data-aos="fade-in">
        <p className={`${styles.subHeader} sm:mt-20 ml-18 sm:ml-20 mt-8`}>about me</p>
        <div className={`${styles.article} ml-12 mt-8 mx-8 sm:ml-8 sm:w-[50vw] sm:mt-20 sm:max-w-[700px]`}>
          Hello world! My name is <Sparkles>Kaiyi</Sparkles> <br />
          Used to be a student in English Literature<br />
          Now I&apos;m a passionate Web <p className="inline-block"><TrueFocus
            sentence="Develoepr and Designer"
            skippedWord="and"
            manualMode={false}
            blurAmount={2}
            borderColor="#f8d378"
            animationDuration={1}
            pauseBetweenAnimations={1}
          /></p>.I dedicate to crafting seamless, user-friendly applications that blend functionality with aesthetic appeal.<br />
          I&apos;m always curious and open to new ideas, seeking opportunities to collaborate with others, share knowledge, and explore innovative approaches. My goal is to not only improve my own skills but also contribute to a community of like-minded individuals.<br />
          <TypeAnimation
            sequence={[
              "Let's connect and create something impactful together!",
            ]}
            speed={50}
            className={`${styles.article}`}
            repeat={1}
          />
          <br />
          <a href="https://github.com/kaiyi952" target="_blank"  >
            <FaGithub className="inline-block" />
          </a>
          &nbsp;
          <a href="mailto:irishe952@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="inline-block" />
          </a>
          &nbsp;
          <a href="https://www.instagram.com/kaiyi_7/profilecard/?igsh=ZDI4M2J3aW1vdzQ1" target="_blank" >
            <FaInstagram className="inline-block" />
          </a>&nbsp;
          <a href="https://bsky.app/profile/kaiyiho.bsky.social" className={styles.bsky} target="_blank" >
            <img src='bsky.svg' className="inline-block w-[12px] mb-[2px] ml-[2px] md:w-[17px]" />
          </a>
          <p><Link href='/blog' className={styles.allPosts} >All Blogs<FaRightLong /></Link></p>
        </div>

        <Image
          src="/kaiyi.png"
          width={400}
          height={400}
          alt="Picture of the author"
          className=" w-[80%] sm:w-[400px] mt-8 sm:mr-[7%] xl:mr-[15%] hidden md:inline-block"
          data-aos="fade-in"
        />
      </div >
      <div className="flex justify-center " data-aos="fade-up" >
        <Image
          src="/arrow.png"
          width={320}
          height={320}
          alt="arrow"
          className="my-0 hidden md:inline-block sm:mt-8"
        />
      </div>

      {/*tech*/}
      <div id='tech' className="flex flex-col-reverse items-center w-screen sm:items-start sm:flex-row sm:justify-between md:mt-0" data-aos="fade-up">
        <figure className="flex-none w-[320px] sm:ml-10 sm:w-[500px] mt-2 xl:ml-14"><embed src="https://wakatime.com/share/@564d6b19-0a9d-4877-9727-cf8496a1b184/a4228140-47ba-4953-8c53-08d1877666c0.svg"></embed></figure>
        <ul className={`${styles.article} mt-8 mx-8 sm:ml-18 ml-12 sm:w-[50vw] sm:mt-10 sm:max-w-[700px]`}>
          <li><b>Languages: </b> JavaScript, TypeScript, HTML, CSS, Python, C#</li>
          <li><b>Frameworks & Libraries: </b> React, Next.js, Blazor, Tailwind CSS</li>
          <li><b>Databases: </b> MySQL, PostgreSQL, Prisma, MongoDB</li>
          <li><b>Tools & Platforms: </b> Figma, Git, Jest, Mocha, Vercel</li>
          <li><b>Others: </b> RESTful APIs, Responsive Design, Graphic Design</li>
        </ul>
        <p className={`${styles.subHeader} sm:mt-12 sm:mr-[7%] xl:mr-[15%] mt-8`}>tech</p>
      </div>

      {/*experience*/}
      <div id='experience' className="flex flex-col items-center w-screen sm:items-start sm:flex-row sm:justify-start md:mt-9" data-aos="fade-up">
        <p className={`${styles.subHeader} sm:mt-6 ml-18 sm:ml-20 mt-8`}>experience</p>
        <section className={`${styles.article} ml-12 mt-8 mx-8 sm:ml-20  xl:ml-20 sm:mt-6 sm:max-w-[800px]`}>
          <div className="flex justify-between sm:w-full">
            <b>Software Engineer Intern, Remote</b>
            <p>United States</p>
          </div>
          <div className="flex justify-between sm:w-full">
            <p> Popcorn AI Tech Inc.</p>
            <p>Jan 2025 - Present</p>
          </div>
          React, TypeScript, Jotai, Signal, SCSS, Shadcn<br />
          - Assist in developing user interfaces using React.js and related libraries.
          <br />
          - Participate in building reusable components and front-end architecture
          <br />
          - Work on integrating RESTful APIs and using Axios into React application.
          <br />
          - Implemented global state management with Jotai, improving code maintainability and developer experience.
          <br />
          - Implemented real-time data updates using WebSocket, ensuring seamless live interactions.
        </section>
      </div >

      {/*projects*/}
      <div id='projects' className="flex flex-col-reverse items-center w-[100%] sm:items-start sm:flex-row sm:justify-between md:mt-9 sm:px-[100px] sm:mr-[100px]" data-aos="fade-up">
        <section className={`${styles.article} ml-12 mt-8 mx-8 sm:ml-20   sm:mt-6 sm:max-w-[800px]`}>
          <div className="flex justify-between sm:w-full">
            <a className="font-bold hover:text-slate-500" href="https://www.kaiyi.io/">
              <b><Sparkles><b> Blog Website</b></Sparkles> (Yep, you&apos;re here!)</b>
            </a>
            <p>Jan 2025 - Present</p>
          </div>
          React, TypeScript, Jotai, Signal, SCSS, Shadcn <br />
          - Developed my own full-stack blog website, integrating a CMS for content management to continuously create, update, and display my blog posts.
          <br />
          <Link href="/blog/679ec5c6f5a0575a3c94ed5d" className="flex items-center gap-2 font-bold underline decoration-2 hover:decoration-transparent"><FaHandPointRight /> Click here to see how it was built!</Link>
          <br />
          <div className="flex justify-between sm:w-full">
            <a className="font-bold hover:text-slate-500" href="https://next-js-home-away.vercel.app/" target="_blank">
              <b>Home Away Website</b>
            </a>
            <p>May 2024 - Sep 2024</p>
          </div>
          Next.js, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL, Vercel <br />
          Developed A full-stack web application for vacation rental services.
          <br />
          - Created user, property, and order features with Prisma ORM for efficient data handling.
          <br />
          - Achieved 60% unit test coverage with Jest and automated CI/CD deployment via GitHub Actions to Vercel.
          <br />
          - Built a reusable component library and implemented OAuth2.0 login using Clerk.
          <br />
          <br />
          <div className="flex justify-between sm:w-full">
            <a className="font-bold hover:text-slate-500" href="https://github.com/kaiyi952/Registrar" target="_blank">
              <b>Student Registration Web Application</b>
            </a>
            <p> May 2024 - Sep 2024</p>
          </div>

          C#, .NET, Blazor, Dapper, MySQL
          <br />
          Developed a database-driven student registration app using C#, Blazor, and Dapper with a MySQL database.
          <br />
          - Built dynamic UI components for real-time student, course, and registration management.
          <br />
          - Implemented unified validation, error handling, and modular architecture for scalability.
          <br />
          - Conducted smoke tests to ensure functionality under diverse scenarios.
        </section>
        <p className={`${styles.subHeader} sm:mt-6 ml-18 sm:mr-[250px] mt-8 `}>projects</p>
      </div >

      {/*trivia*/}
      <div id='trivia' className=" flex flex-col-reverse items-center w-screen sm:items-start sm:flex-row-reverse sm:justify-end md:mt-10 sm:mb-10 mb-10 sm:px-[180px]" data-aos="fade-up">
        <ul className={`${styles.article} sm:ml-[7%] mt-8 mx-8  ml-12 sm:w-[50vw] sm:mt-8 sm:max-w-[700px]`}>
          <a href="http://xhslink.com/a/pyMzEIm07o27" target="_blank"><Sparkles><b>Skateboarding: </b> </Sparkles> Click to see my skateboarding video</a>
          <li><b>Calligraphy: </b> Dedicated tons of time for over ten years since youth.</li>
          <li><b>Hiphop: </b> Work in progress, it&apos;s a bug not a feature for now.</li>
        </ul>
        <p className={`${styles.subHeader} sm:mt-12  mt-8`}>trivia</p>
      </div>
      <div><Link href='/blog' className={styles.allPosts} >All Blogs<FaRightLong /></Link></div>
      <SideNav />
    </>
  )
}

export default Page


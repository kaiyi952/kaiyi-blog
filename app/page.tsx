import styles from "./home.module.scss";
import React from 'react'
import Image from "next/image";
import SideNav from "./components/navbar/SideNav";
import { FaInstagram, FaGithub, FaFacebook, FaEnvelope } from 'react-icons/fa6';

function Page() {

  return (
    <>
      <div id="section1" className="inline-block">
        <p className={`${styles.header} text-center text-[130px] sm:text-[200px] sm:ml-10 ml-5 w-fit -z-10 relative leading-[0.8em]`}>
          <span>Kaiyi&apos;s Home</span>
          <img className="absolute -z-10 top-0 object-contain w-[80%]" src="/bg1.png" />
        </p>
      </div>
      <div id="section2" className="flex flex-col items-center w-screen sm:items-start sm:flex-row sm:justify-between md:mt-9 sm:" data-aos="zoom-in">
        <p className={`${styles.subHeader} sm:mt-20 ml-18 sm:ml-20 mt-8`}>about me</p>
        <p className={`${styles.article} ml-12 mt-8 mx-8 sm:ml-8 sm:w-[50vw] sm:mt-20 sm:max-w-[700px]`}>
          Hello world! My name is Kaiyi<br />
          Used to be a student in English Literature<br />
          Now I'm a passionate web developer and designer, dedicated to crafting seamless, user-friendly applications that blend functionality with aesthetic appeal.<br />
          I'm always curious and open to new ideas, seeking opportunities to collaborate with others, share knowledge, and explore innovative approaches. My goal is to not only improve my own skills but also contribute to a community of like-minded individuals.<br />
          Let's connect and create something impactful together!
          <br />
          <a href="https://github.com/kaiyi952" >
            <FaGithub className="inline-block" />
          </a>
          &nbsp;
          <a href="mailto:irishe952@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="inline-block" />
          </a>
          &nbsp;
          <a href="https://www.instagram.com/kaiyi_7/profilecard/?igsh=ZDI4M2J3aW1vdzQ1" >
            <FaInstagram className="inline-block" />
          </a>&nbsp;
          <a href="https://www.facebook.com/share/15YfS8HcXQ/?mibextid=wwXIfr" >
            <FaFacebook className="inline-block" />
          </a>
        </p>

        <Image
          src="/kaiyi.png"
          width={400}
          height={400}
          alt="Picture of the author"
          className=" w-[80%] sm:w-[400px] mt-8 sm:mr-[7%] xl:mr-[15%] hidden md:inline-block"
          data-aos="fade-up"
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
      <div id='section3' className="flex flex-col-reverse items-center w-screen sm:items-start sm:flex-row sm:justify-between md:mt-0" data-aos="fade-up">
        <figure className="flex-none w-[500] sm:ml-10 sm:w-[500] mt-2 xl:ml-14"><embed src="https://wakatime.com/share/@564d6b19-0a9d-4877-9727-cf8496a1b184/a4228140-47ba-4953-8c53-08d1877666c0.svg"></embed></figure>
        <ul className={`${styles.article} mt-8 mx-8 sm:ml-18 ml-12 sm:w-[50vw] sm:mt-10 sm:max-w-[700px]`}>
          <li><b>Languages: </b> JavaScript, TypeScript, HTML, CSS, Python, C#</li>
          <li><b>Frameworks & Libraries: </b> React, Next.js, Blazor, Tailwind CSS</li>
          <li><b>Databases: </b> MySQL, Prisma</li>
          <li><b>Tools & Platforms: </b> Figma, Git, Jest, Mocha, Vercel</li>
          <li><b>Others: </b> REST APIs, Responsive Design, Graphic Design</li>
        </ul>
        <p className={`${styles.subHeader} sm:mt-12 sm:mr-[7%] xl:mr-[15%] mt-8`}>tech</p>
      </div>
      <div id='section4' className="flex flex-col items-center w-screen sm:items-start sm:flex-row sm:justify-start md:mt-9" data-aos="fade-up">
        <p className={`${styles.subHeader} sm:mt-6 ml-18 sm:ml-20 mt-8`}>projects</p>
        <section className={`${styles.article} ml-12 mt-8 mx-8 sm:ml-20  xl:ml-20 sm:mt-6 sm:max-w-[800px]`}>
          <div className="flex justify-between sm:w-4/5">
            <a className="font-bold hover:text-slate-500" href="https://next-js-home-away.vercel.app/">
              Home Away Website
            </a>
            <p>May 2024 – Sep 2024</p>
          </div>
          Next.js, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL, Vercel <br />
          Developed A full-stack web application for vacation rental services.
          <br />
          Created user, property, and order features with Prisma ORM for efficient data handling.
          <br />
          Achieved 60% unit test coverage with Jest and automated CI/CD deployment via GitHub Actions to Vercel.
          <br />
          Built a reusable component library and implemented OAuth2.0 login using Clerk.
          <br />
          <br />
          <div className="flex justify-between w-4/5">
            <h1 className="font-bold">Student Registration Web Application</h1>
            <p> May 2024 – Sep 2024</p>
          </div>

          C#, .NET, Blazor, Dapper, MySQL
          <br />
          Developed a database-driven student registration app using C#, Blazor, and Dapper with a MySQL database.
          <br />
          Built dynamic UI components for real-time student, course, and registration management.
          <br />
          Implemented unified validation, error handling, and modular architecture for scalability.
          <br />
          Conducted smoke tests to ensure functionality under diverse scenarios.
        </section>
      </div >
      <div id='section5' className=" flex flex-col-reverse items-center w-screen sm:items-start sm:flex-row sm:justify-between md:mt-10 sm:mb-10 mb-10" data-aos="fade-up">
        <ul className={`${styles.article} sm:ml-[200px] mt-8 mx-8 sm:ml-18 ml-12 sm:w-[50vw] sm:mt-8 sm:max-w-[700px]`}>
          <li><b>Languages: </b> JavaScript, TypeScript, HTML, CSS, Python, C#</li>
          <li><b>Frameworks & Libraries: </b> React, Next.js, Blazor, Tailwind CSS</li>
          <li><b>Databases: </b> MySQL, Prisma</li>
          <li><b>Tools & Platforms: </b> Figma, Git, Jest, Mocha, Vercel</li>
          <li><b>Others: </b> REST APIs, Responsive Design, Graphic Design</li>
        </ul>
        <p className={`${styles.subHeader} sm:mt-12 sm:mr-[7%] xl:mr-[15%] mt-8`}>trivia</p>
      </div>
      <SideNav />
    </>
  )
}

export default Page
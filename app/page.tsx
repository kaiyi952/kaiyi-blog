import styles from "./home.module.scss";
import React from 'react'
import Image from "next/image";
function page() {
  return (
    <>
      <div className="inline-block">
        <p className={`${styles.header} text-center text-[100px] sm:text-[200px] ml-10 w-fit relative leading-[0.8em]`}>
          <span>Kaiyi's Home</span>
          <img className="absolute -z-10 top-0 object-contain w-[80%]" src="/bg1.png" />
        </p>
      </div>
      <div className="flex flex-col items-center w-screen sm:items-start sm:flex-row sm:justify-between md:mt-9">
        <p className="mt-8 mx-8 sm:ml-10 sm:w-[50vw] sm:mt-20 sm:max-w-[700px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        <Image
          src="/kaiyi.png"
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
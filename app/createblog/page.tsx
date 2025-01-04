"use client";

import React, { useEffect, useState } from 'react'
import styles from "./createBlog.module.scss"
import TagControler from '../components/tagcontroler/TagControler';
import Editor from './Editor';

function CreateBlog() {
  const [tags, setTags] = useState<string[]>([]);
  useEffect(() => {
    fetch("/api/tags")
      .then((v) => v.json())
      .then((data) => {
        setTags(data.tags as string[]);
      });
  }, []);

  return (
    <div className={`flex flex-col items-center min-h-screen bg-white py-8`}>
      <div className="bg-gray-100 p-8 rounded shadow-md w-full max-w-[80%]">
        <h1 className={`font-bold  mb-6 ${styles.handWritten} text-center`}>Let&apos;s write something!</h1>
        <form className="flex space-y-4 flex-col items-center">
          {/* Name input */}
          <div className='w-full'>
            <label htmlFor="name" className={`block  font-medium mb-2 ${styles.label}`}>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter the blog name"
            />
          </div>
          {/* Description input */}
          <div className='w-full'>
            <label htmlFor="description" className={`block  font-medium mb-2 ${styles.label}`}>
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Short description"
            />
          </div>

          <div className='w-full z-50'>
            <label htmlFor="article" className={`block  font-medium mb-2 ${styles.label}`}>
              Tags
            </label>
            <TagControler tags={tags} />
          </div>
          {/* Article input */}

          <div className='w-full'>
            <label htmlFor="article" className={`block  font-medium mb-2 ${styles.label}`}>
              Article
            </label>
            <Editor />
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className={`w-[200px] bg-gray-100 ${styles.handWritten} font-bold py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition duration-300 block`}
            style={{ display: "block" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div >
  )
}

export default CreateBlog
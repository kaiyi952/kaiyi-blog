"use client";

import React, { useEffect, useState } from 'react'
import styles from "./createBlog.module.scss"
import TagControler from '../components/tagcontroler/TagControler';
import Editor from './Editor';
import { useRouter } from 'next/navigation';

function CreateBlog() {

  useEffect(() => {
    fetch("/api/tags")
      .then((v) => v.json())
      .then((data) => {
        setTags(data.tags as string[]);
      });
  }, []);
  const [tags, setTags] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState<string>("");
  const [article, setArticle] = useState<string>("");
  const route = useRouter();

  const saveArticle = async () => {
    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
          tags: selectedTags,
          content: article,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save article");
      } else {
        route.replace("/blog");
      }
      console.log("Blog saved successfully!");
    } catch (error) {
      console.error("Error saving blog:", error);
    }
  };


  return (
    <div className={`flex flex-col items-center min-h-screen bg-white py-8`}>
      <div className="bg-gray-100 p-8 rounded shadow-md w-full max-w-[80%]">
        <h1 className={`font-bold  mb-6 ${styles.handWritten} text-center`}>Let&apos;s write something!</h1>
        <div className="flex space-y-4 flex-col items-center">
          {/* Name input */}
          <div className='w-full'>
            <label htmlFor="title" className={`block  font-medium mb-2 ${styles.label}`}>
              Title
            </label>
            <input
              type="text"
              name='title'
              onChange={(e) => { setTitle(e.target.value) }}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter the blog title"
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
              onChange={(e) => { setDescription(e.target.value) }}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Short description"
            />
          </div>
          {/* Tags input */}
          <div className='w-full z-50'>
            <label htmlFor="article" className={`block  font-medium mb-2 ${styles.label}`}>
              Tags
            </label>
            <div className='flex'>
              <TagControler tags={tags} onChange={(selected) => setSelectedTags(selected)} selectedTags={selectedTags} />
              <input
                type="text"
                className="w-[50%] border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none mx-4"
                placeholder="Add new tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
              <button className={styles.button} onClick={() => {
                setTags([...tags, newTag]);
                setNewTag("");
              }}>Add tag</button>
            </div>


          </div>
          {/* Article input */}

          <div className='w-full'>
            <label htmlFor="article" className={`block  font-medium mb-2 ${styles.label}`}>
              Article
            </label>
            <Editor onChange={(md) => setArticle(md)} value={article} />
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className={`w-[200px] bg-gray-100 ${styles.handWritten} font-bold py-2 px-4 rounded  hover:scale-110  transition duration-300 block`}
            style={{ display: "block" }}
            onClick={saveArticle}
          >
            Submit
          </button>
        </div>
      </div>
    </div >
  )
}

export default CreateBlog
"use client";

import React, { useEffect, useState } from 'react'
import styles from "./form.module.scss"
import TagControler from '../../components/tagcontroler/TagControler';
import Editor from '@/app/createblog/Editor';
import { useRouter } from 'next/navigation';

export interface BlogDetail {
    id: string;
    title: string;
    description: string;
    content: string;
    tags: string[];
}

function EditBlog({ id, title, description, tags, content }: BlogDetail) {
    const [haveTags, setTags] = useState<string[]>([]);
    const [newSelectedTags, setSelectedTags] = useState<string[]>(tags);
    const [newTitle, setTitle] = useState(title)
    const [newDescription, setDescription] = useState(description)
    const [newArticle, setArticle] = useState<string>(content);
    const route = useRouter();

    useEffect(() => {
        fetch("/api/tags")
            .then((v) => v.json())
            .then((data) => {
                setTags(data.tags as string[]);
            });
    }, []);
    console.log(newSelectedTags);
    console.log(newArticle);

    const editArticle = async () => {
        try {
            const response = await fetch(`/api/blogs/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    newTitle: newTitle,
                    newContent: newArticle,
                    newDescription: newDescription,
                    newTags: newSelectedTags,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to save article");
            } else {
                route.back();
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
                            value={newTitle}
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
                            value={newDescription}
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
                            <TagControler tags={haveTags} onChange={(selected) => setSelectedTags(selected)} selectedTags={newSelectedTags} />
                        </div>


                    </div>
                    {/* Article input */}

                    <div className='w-full'>
                        <label htmlFor="article" className={`block  font-medium mb-2 ${styles.label}`}>
                            Article
                        </label>
                        <Editor value={newArticle} onChange={(md) => setArticle(md)}
                        />
                    </div>
                    {/* Submit button */}
                    <button
                        type="submit"
                        className={`w-[200px] bg-gray-100 ${styles.handWritten} font-bold py-2 px-4 rounded hover:scale-110  transition duration-300 block`}
                        style={{ display: "block" }}
                        onClick={editArticle}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div >
    )
}

export default EditBlog
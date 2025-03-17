"use client";

import { useRouter } from "next/navigation";
import { BiPencil } from "react-icons/bi";
import React, { FC } from "react";
import { SignedIn } from "@clerk/nextjs";
import { FaRegTrashCan } from "react-icons/fa6";
import { useAuth } from "@clerk/nextjs";


export interface ArticleActionButtonsProps {
    id: string;

}

const ArticleActionButtons: FC<ArticleActionButtonsProps> = ({ id }) => {
    const router = useRouter();
    const { userId } = useAuth();


    const handleEdit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (!userId) {
            alert("You must be logged in to edit.");
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        router.replace(`/editblog/${id}`)
    }

    const removeBlog: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        if (!userId) {
            alert("You must be logged in to delete.");
            return;
        }
        e.preventDefault();
        e.stopPropagation();

        const confirmed = confirm("Are you sure?");
        if (confirmed) {
            await fetch(`/api/blogs/${id}`, {
                method: "DELETE",
            });
            router.refresh();

        }
    }


    return (
        <SignedIn>
            <div className='flex items-start gap-2'>
                <button style={{ color: "#2733f5" }} onClick={handleEdit}>
                    <BiPencil size={24} />
                </button>
                <button onClick={removeBlog}>
                    <FaRegTrashCan size={22} className='text-red-400' />
                </button>
            </div>
        </SignedIn>
    );
}

export default ArticleActionButtons;
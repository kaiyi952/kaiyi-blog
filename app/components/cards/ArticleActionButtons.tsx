"use client";

import { useRouter } from "next/navigation";
import RemoveBtn from "../buttons/RemoveBtn";
import { BiPencil } from "react-icons/bi";
import React, { FC } from "react";

export interface ArticleActionButtonsProps {
    id: string;
}

const ArticleActionButtons: FC<ArticleActionButtonsProps> = ({ id }) => {
    const router = useRouter();

    const handleEdit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        e.stopPropagation();
        router.push(`/editblog/${id}`)
    }

    return (
        <div className='flex items-start gap-2'>
            <button style={{ color: "#2733f5" }} onClick={handleEdit}>
                <BiPencil size={24} />
            </button>
            <RemoveBtn />
        </div>
    );
}

export default ArticleActionButtons;
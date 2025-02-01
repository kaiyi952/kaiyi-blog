'use client'
import Link from "next/link";
import { FC } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="flex space-x-4">
      {currentPage > 1 ? (
        <Link href={currentPage === 2 ? "/blog" : `/blog/page/${currentPage - 1}`}>&lt;</Link>
      ) : (
        <span className="opacity-50 cursor-not-allowed">&lt;</span>
      )}

      <span>{currentPage} of {totalPages}</span>

      {currentPage < totalPages ? (
        <Link href={`/blog/page/${currentPage + 1}`}>&gt;</Link>
      ) : (
        <span className="opacity-50 cursor-not-allowed">&gt;</span>
      )}
    </div>
  );
};

export default Pagination;

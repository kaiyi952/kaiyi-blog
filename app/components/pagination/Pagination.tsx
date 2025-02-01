'use client'
import Link from "next/link";
import { FC } from "react";
import styles from './pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages }) => {
  return (
    <div className={styles.main}>
      {currentPage > 1 ? (
        <Link href={currentPage === 2 ? "/blog" : `/blog/page/${currentPage - 1}`}>
          <span className={styles.prev}>&lt;</span> </Link>
      ) : (
        <span className="opacity-50 cursor-not-allowed">&lt;</span>
      )}

      <span className={styles.pageCount}>{currentPage} of {totalPages}</span>

      {currentPage < totalPages ? (
        <Link href={`/blog/page/${currentPage + 1}`}> <span className={styles.next}>&gt;</span> </Link>
      ) : (
        <span className="opacity-50 cursor-not-allowed">&gt;</span>
      )}
    </div>
  );
};

export default Pagination;

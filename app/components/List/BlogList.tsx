import React, { FC } from 'react';
import ArticleCard from '../cards/ArticleCard';

export interface BlogEntry {
  id: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  createdAt: string;
}

interface ArticleListProps {
  blogs: BlogEntry[];
}

const BlogList: FC<ArticleListProps> = ({ blogs }) => {
  return (
    <>
      {blogs.map((b) => (
        <ArticleCard key={b.id} blog={b} />
      ))}
    </>
  );
};

export default BlogList;
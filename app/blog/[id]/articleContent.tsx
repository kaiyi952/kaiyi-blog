"use client";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useEffect, useState } from "react";

const ArticleContent = ({ content }: { content: string }) => {
  const [mdxSource, setMdxSource] = useState<Awaited<ReturnType<typeof serialize>> | null>(null);

  useEffect(() => {
    const parseMDX = async () => {
      const mdx = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      });
      setMdxSource(mdx);
    };
    parseMDX();
  }, [content]);

  if (!mdxSource) return <p>loading...</p>;

  return <MDXRemote {...mdxSource} />;
};

export default ArticleContent;

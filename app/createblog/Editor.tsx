'use client';

import React from 'react';
import {
    BlockTypeSelect,
    BoldItalicUnderlineToggles,
    diffSourcePlugin,
    DiffSourceToggleWrapper,
    frontmatterPlugin,
    imagePlugin,
    InsertCodeBlock,
    InsertFrontmatter,
    InsertImage,
    InsertTable,
    UndoRedo
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import styles from "./createBlog.module.scss";
const {
    MDXEditor,
    codeBlockPlugin,
    codeMirrorPlugin,
    headingsPlugin,
    listsPlugin,
    linkPlugin,
    quotePlugin,
    markdownShortcutPlugin,
    toolbarPlugin,
    tablePlugin
} = await import('@mdxeditor/editor');

const Editor = ({
    onChange,
    value
}: { onChange: (md: string) => void, value: string }) => {
    const handleImageUpload = async (file: File): Promise<string> => {
        try {
            const formData = new FormData();
            formData.append("file", file);

            const res = await fetch("/api/uploads", {
                method: "POST",
                body: formData
            });

            if (!res.ok) throw new Error("Image upload failed");

            const data = await res.json();
            return data.url;
        } catch (error) {
            console.error("Image upload failed", error);
            throw new Error("Image upload failed");
        }
    };
    return (
        <MDXEditor
            contentEditableClassName={styles.editor}
            onChange={onChange}
            markdown={value}
            plugins={[
                imagePlugin({
                    imageUploadHandler: handleImageUpload,
                    imageAutocompleteSuggestions: ['https://picsum.photos/200/300', 'https://picsum.photos/200']
                }),
                diffSourcePlugin({ diffMarkdown: 'An older version', viewMode: 'rich-text' }),
                frontmatterPlugin(),
                codeBlockPlugin({ defaultCodeBlockLanguage: 'ts' }),
                codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', ts: 'TypeScript' } }),
                headingsPlugin(),
                listsPlugin(),
                linkPlugin(),
                quotePlugin(),
                tablePlugin(),
                markdownShortcutPlugin(),
                toolbarPlugin({
                    toolbarContents: () => (
                        <>
                            <UndoRedo />
                            <BoldItalicUnderlineToggles />
                            <InsertImage />
                            <BlockTypeSelect />
                            <InsertCodeBlock />
                            <InsertTable />
                            <DiffSourceToggleWrapper>
                                <UndoRedo />
                            </DiffSourceToggleWrapper>
                            <InsertFrontmatter />
                        </>
                    )
                })
            ]}
        />
    );
};

export default Editor;

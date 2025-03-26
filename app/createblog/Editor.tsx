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
import { uploadImage } from '../api/uploads/route';


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
            const imageUrl = await uploadImage(file);
            return imageUrl;
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

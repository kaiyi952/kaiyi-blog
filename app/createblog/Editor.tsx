'use client';

import React from 'react';
import {
    BlockTypeSelect,
    BoldItalicUnderlineToggles,
    InsertCodeBlock,
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
    return (
        <MDXEditor
            contentEditableClassName={styles.editor}
            onChange={onChange}
            markdown={value}
            plugins={[
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
                        </>
                    )
                })
            ]}
        />
    );
};

export default Editor;

'use client';
// You can use this code in a separate component that's imported in your pages.
import { BlockTypeSelect, BoldItalicUnderlineToggles, InsertCodeBlock, InsertImage, InsertTable, UndoRedo, type CodeBlockEditorDescriptor } from '@mdxeditor/editor';
import styles from "./createBlog.module.scss"
import '@mdxeditor/editor/style.css';
import React from 'react';
const { MDXEditor, codeBlockPlugin, headingsPlugin, listsPlugin, linkPlugin, quotePlugin, markdownShortcutPlugin, useCodeBlockEditorContext, toolbarPlugin } = await import('@mdxeditor/editor')

const PlainTextCodeEditorDescriptor: CodeBlockEditorDescriptor = {
    match: () => true,
    priority: 0,
    Editor: (props) => {
        const cb = useCodeBlockEditorContext()
        return (
            <div onKeyDown={(e) => e.nativeEvent.stopImmediatePropagation()}>
                <textarea rows={3} cols={20} defaultValue={props.code} onChange={(e) => cb.setCode(e.target.value)} />
            </div>
        )
    }
}

const Editor = ({
    onChange, value
}: { onChange: (md: string) => void, value: string }) => {
    return <MDXEditor
        contentEditableClassName={`${styles.editor}`}
        onChange={onChange
        }
        markdown={value}
        plugins={[
            codeBlockPlugin({ codeBlockEditorDescriptors: [PlainTextCodeEditorDescriptor] }),
            headingsPlugin(),
            listsPlugin(),
            linkPlugin(),
            quotePlugin(),
            markdownShortcutPlugin(),
            toolbarPlugin({
                toolbarClassName: 'my-classname',
                toolbarContents: () => (
                    <>
                        {' '}
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
}

export default Editor
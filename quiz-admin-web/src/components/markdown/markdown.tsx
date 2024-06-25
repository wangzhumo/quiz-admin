import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  codeBlockPlugin,
  codeMirrorPlugin,
  CodeToggle,
  CreateLink,
  diffSourcePlugin,
  DiffSourceToggleWrapper,
  headingsPlugin,
  imagePlugin,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  ListsToggle,
  MDXEditor,
  quotePlugin,
  sandpackPlugin,
  Separator,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  UndoRedo
} from '@mdxeditor/editor'

import '@mdxeditor/editor/style.css'
import { Fragment } from 'react'

interface MarkdownProps {
  markdown: string
}

const MarkdownEditor = (props: MarkdownProps) => {
  return (
    <MDXEditor
      plugins={[
        toolbarPlugin({
          toolbarContents: () => (
            <Fragment>
              <DiffSourceToggleWrapper options={['source']}>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <CodeToggle />
                <Separator />

                <ListsToggle />
                <Separator />
                <BlockTypeSelect />
                <Separator />
                <CreateLink />
                <InsertImage />
                <InsertTable />
                <InsertThematicBreak />
              </DiffSourceToggleWrapper>
            </Fragment>
          )
        }),
        listsPlugin(),
        quotePlugin(),
        headingsPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        imagePlugin(),
        tablePlugin(),
        thematicBreakPlugin(),
        codeBlockPlugin(),
        sandpackPlugin(),
        codeMirrorPlugin({
          codeBlockLanguages: {
            js: 'JavaScript',
            css: 'CSS',
            txt: 'text',
            tsx: 'TypeScript'
          }
        }),
        diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo' })
      ]}
      markdown={props.markdown}
      className='dark-theme dark-editor'
    />
  )
}

export default MarkdownEditor

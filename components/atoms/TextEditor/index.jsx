import React, { useState } from 'react'
import { convertToRaw, ContentState, EditorState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import dynamic from 'next/dynamic'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styles from '@/styles/TextEditor.module.css'
import HtmlToDraft from 'html-to-draftjs'

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false },
)

let htmlToDraft = null
if (typeof window === 'object') {
  htmlToDraft = HtmlToDraft.default
}

export const TextEditor = ({ value, setFieldValue }) => {
  const prepareDraft = (value) => {
    const draft = htmlToDraft(value)
    const contentState = ContentState.createFromBlockArray(draft.contentBlocks)
    const editorState = EditorState.createWithContent(contentState)
    return editorState
  }

  const [editorState, setEditorState] = useState(
    value ? prepareDraft(value) : EditorState.createEmpty(),
  )

  const onEditorStateChange = (editorState) => {
    const forFormik = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    setFieldValue(forFormik)
    setEditorState(editorState)
  }
  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName={styles.custom_wrapper}
        editorClassName={styles.custom_editor}
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  )
}

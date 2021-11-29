import React, { useState } from 'react'

type PostFormProps = {
  handleSubmit: (title: string, content: string) => void
}

export const PostForm: React.FC<PostFormProps> = ({ handleSubmit }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const prepareFormData = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!title || !content) {
      console.log('error PostForm handler')
      return
    }
    handleSubmit(title, content)
    console.log('success PostForm handler')
    return
  }

  return (
    <form method="post" onSubmit={(e) => prepareFormData(e)}>
      <fieldset>
        <div className="field">
          <label htmlFor="title" className="label">
            Title
          </label>
          <div className="control">
            <input
              id="title"
              className="input"
              type="text"
              name="title"
              placeholder={'e.g. "More cats for god of cats"'}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="content" className="label">
            Content
          </label>
          <div className="control">
            <textarea
              className="textarea"
              name="content"
              placeholder={'e.g. "Some content about our godlike cats"'}
              rows={10}
              value={content}
              onChange={(e) => {
                setContent(e.target.value)
              }}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
        </div>
      </fieldset>
    </form>
  )
}

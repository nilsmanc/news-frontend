import { useState } from 'react'
import { Avatar, Button, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import { Api } from '../utils/api'
import { CommentType } from '../types'

import styles from '../styles/Comments.module.scss'

type CommentsProps = {
  id: string
  newsComments: CommentType[]
  refreshData: () => void
}

const Comments: React.FC<CommentsProps> = ({ id, newsComments, refreshData }) => {
  const [text, setText] = useState('')

  const handleDelete = (id: string) => {
    Api().comment.remove(id)
    refreshData()
  }

  const sendHandler = async () => {
    try {
      const newsItem = id

      const comment = {
        text,
        newsItem,
      }

      await Api().comment.create(comment)

      refreshData()

      setText('')
    } catch (err) {
      console.warn(err)
      alert('Failed to post comment')
    }
  }

  const formatDate = (date: string) => {
    const commentDate = new Date(date)
    return `${commentDate.toLocaleDateString()} ${commentDate.toLocaleTimeString()}`
  }

  return (
    <>
      {newsComments.map((comment) => (
        <div className={styles.comment} key={comment._id}>
          <Avatar variant='rounded' className={styles.avatar} src={comment.user?.avatarURL} />
          <div className={styles.text}>{comment.text}</div>
          <div className={styles.createdAt}>{formatDate(comment.createdAt)}</div>
          {comment._id && (
            <button className={styles.delete} onClick={() => handleDelete(comment._id)}>
              <DeleteIcon />
            </button>
          )}
        </div>
      ))}
      <TextField
        className={styles.commentInput}
        id='commentField'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button color='inherit' onClick={sendHandler}>
        Send
      </Button>
    </>
  )
}

export default Comments

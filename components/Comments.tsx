import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { fetchComments, fetchRemoveComment } from '../redux/asyncActions'
import { addComment, commentsSelector } from '../redux/slices/comments'
import { useAppDispatch } from '../redux/store'
import { Button, TextField } from '@mui/material'
import instance from '../axios'

import styles from '../styles/Comments.module.scss'

type CommentsProps = {
  id: string
}

const Comments: React.FC<CommentsProps> = ({ id }) => {
  const [text, setText] = useState('')

  const comments = useSelector(commentsSelector)
  const dispatch = useAppDispatch()
  const handleDelete = (id: string) => {
    dispatch(fetchRemoveComment(id))
  }

  const sendHandler = async () => {
    try {
      const newsItem = id

      const comment = {
        text,
        newsItem,
      }

      await instance.post('/comments', comment)

      dispatch(addComment(comment))

      setText('')
    } catch (err) {
      console.warn(err)
      alert('Failed to post comment')
    }
  }

  useEffect(() => {
    dispatch(fetchComments(id))
  }, [])

  return (
    <>
      {comments.map((comment) => (
        <div className={styles.comment} key={comment._id}>
          {comment.text}
          {comment._id && <button onClick={() => handleDelete(comment._id)}>Remove comment</button>}
        </div>
      ))}
      <TextField
        className={styles.commentInput}
        id='commentField'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={sendHandler}>Send</Button>
    </>
  )
}

export default Comments

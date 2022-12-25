import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { fetchComments, fetchRemoveComment } from '../redux/asyncActions'
import { addComment, commentsSelector } from '../redux/slices/comments'
import { useAppDispatch } from '../redux/store'
import { Avatar, Button, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import instance from '../axios'

import styles from '../styles/Comments.module.scss'

type CommentsProps = {
  id: string
}

const Comments: React.FC<CommentsProps> = ({ id }) => {
  const [text, setText] = useState('')
  const [token, setToken] = useState('')

  const comments = useSelector(commentsSelector)
  console.log(comments)

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
        token,
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

    if (typeof window !== 'undefined') {
      const authData = window.localStorage.getItem('token')
      setToken(authData)
    }
  }, [])

  const formatDate = (date) => {
    const commentDate = new Date(date)
    return `${commentDate.toLocaleDateString()} ${commentDate.toLocaleTimeString()}`
  }

  return (
    <>
      {comments.map((comment) => (
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

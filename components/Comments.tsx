import { useSelector } from 'react-redux'
import { Avatar } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import { CommentType } from '../types'
import { authDataSelector } from '../redux/slices/auth'
import { useComments } from '../hooks/useComments'
import { AddCommentForm } from './AddCommentForm'
import { Api } from '../utils/api'

import styles from '../styles/Comments.module.scss'

type CommentsProps = {
  newsItem: string
}

const Comments: React.FC<CommentsProps> = ({ newsItem }) => {
  const authData = useSelector(authDataSelector)
  const { comments, setComments } = useComments(newsItem)
  console.log(comments)

  const onAddComment = (obj: CommentType) => {
    setComments((prev) => [...prev, obj])
  }

  const onRemoveComment = (id: string) => {
    setComments((prev) => prev.filter((obj) => obj._id !== id))
  }

  const handleClickRemove = async (id: string) => {
    try {
      await Api().comment.remove(id)
      onRemoveComment(id)
    } catch (err) {
      console.warn('Error while removing comment', err)
      alert('Failed to remove comment')
    }
  }

  const formatDate = (date: string) => {
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
          <div className={styles.username}>{comment.user.username}</div>
          {authData._id === comment.user._id && (
            <button className={styles.delete} onClick={() => handleClickRemove(comment._id)}>
              <DeleteIcon />
            </button>
          )}
        </div>
      ))}
      {authData && <AddCommentForm newsItem={newsItem} onSuccessAdd={onAddComment} />}
    </>
  )
}

export default Comments

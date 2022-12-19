import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchComments, fetchRemoveComment } from '../redux/asyncActions'
import { commentsSelector } from '../redux/slices/comments'
import { useAppDispatch } from '../redux/store'

import styles from '../styles/Comments.module.scss'
import { handleAxiosError } from '../utils/error'

type CommentsType = {
  id: string
}

const Comments: React.FC<CommentsType> = ({ id }) => {
  const comments = useSelector(commentsSelector)
  const dispatch = useAppDispatch()
  const handleDelete = () => {
    try {
      dispatch(fetchRemoveComment('123'))
    } catch (error) {
      handleAxiosError(error, { type: 'delete', deleteComment: { id } })
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
          <button onClick={handleDelete}>Remove comment</button>
        </div>
      ))}
    </>
  )
}

export default Comments

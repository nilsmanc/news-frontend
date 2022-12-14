import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchComments } from '../redux/asyncActions'
import { commentsSelector } from '../redux/slices/comments'
import { useAppDispatch } from '../redux/store'

import styles from '../styles/Comments.module.scss'

type CommentsType = {
  id: string
}

const Comments: React.FC<CommentsType> = ({ id }) => {
  const dispatch = useAppDispatch()
  const comments = useSelector(commentsSelector)

  useEffect(() => {
    dispatch(fetchComments(id))
  }, [])

  return (
    <>
      {comments.map((comment) => (
        <div className={styles.comment} key={comment._id}>
          {comment.text}
        </div>
      ))}
    </>
  )
}

export default Comments

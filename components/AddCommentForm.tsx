import { Button, Input } from '@mui/material'
import { useState } from 'react'

import { Api } from '../utils/api'
import { CommentType } from '../types'

import styles from '../styles/AddCommentForm.module.scss'

type AddCommentFormProps = {
  newsItem: string
  onSuccessAdd: (obj: CommentType) => void
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({ newsItem, onSuccessAdd }) => {
  const [clicked, setClicked] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [text, setText] = useState('')

  const onAddComment = async () => {
    try {
      setLoading(true)
      const comment = await Api().comment.create({
        newsItem,
        text,
      })
      onSuccessAdd(comment)
      setClicked(false)
      setText('')
    } catch (err) {
      console.warn('Failed to add comment', err)
      alert('Failed to add comment')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.form}>
      <Input
        disabled={isLoading}
        onChange={(e) => setText(e.target.value)}
        value={text}
        onFocus={() => setClicked(true)}
        minRows={clicked ? 3 : 1}
        classes={{ root: styles.fieldRoot }}
        placeholder='Post a comment...'
        fullWidth
        multiline
      />
      {clicked && (
        <Button
          disabled={isLoading}
          onClick={onAddComment}
          className={styles.addButton}
          variant='contained'
          color='inherit'>
          Post
        </Button>
      )}
    </div>
  )
}

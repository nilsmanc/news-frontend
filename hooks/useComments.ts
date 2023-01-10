import { useEffect, useState } from 'react'

import { Api } from '../utils/api'
import { CommentType } from '../types'

type UseCommentsProps = {
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>
  comments: CommentType[]
}

export const useComments = (newsId?: string): UseCommentsProps => {
  const [comments, setComments] = useState<CommentType[]>([])
  useEffect(() => {
    ;(async () => {
      try {
        const arr = await Api().comment.getAll(newsId)
        setComments(arr)
      } catch (err) {
        console.warn('Failed to fetch comments', err)
      }
    })()
  }, [])

  return { comments, setComments }
}

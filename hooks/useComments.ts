import { useEffect, useState } from 'react'

import { Api } from '../utils/api'

export const useComments = (newsId?: string) => {
  const [comments, setComments] = useState([])
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

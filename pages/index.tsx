import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchNews } from '../redux/asyncActions'
import { newsSelector } from '../redux/slices/news'
import { useAppDispatch } from '../redux/store'

const Main = () => {
  const dispatch = useAppDispatch()
  const news = useSelector(newsSelector)

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  return (
    <div>
      {news.map((item) => {
        return (
          <div key={item.text}>
            <div>{item.title}</div>
            <div>{item.text}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Main

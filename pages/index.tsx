import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import NewsItem from '../components/NewsItem'
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
        return <NewsItem title={item.title} text={item.text} />
      })}
    </div>
  )
}

export default Main

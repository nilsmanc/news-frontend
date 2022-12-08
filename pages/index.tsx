import instance from '../axios'
import NewsItem from '../components/NewsItem'

export default function Main({ news }) {
  return (
    <div>
      {news.map((item) => {
        return <NewsItem title={item.title} text={item.text} />
      })}
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await instance.get('/news')

  return {
    props: { news: data },
  }
}

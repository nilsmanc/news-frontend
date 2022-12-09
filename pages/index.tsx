import instance from '../axios'
import NewsItem from '../components/NewsItem'

const Main = ({ news }) => {
  return (
    <div>
      {news.map((item) => {
        return <NewsItem key={item._id} title={item.title} text={item.text} id={item._id} />
      })}
    </div>
  )
}

export default Main

export async function getServerSideProps() {
  const { data } = await instance.get('/news')

  return {
    props: { news: data },
  }
}

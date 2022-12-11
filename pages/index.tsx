import instance from '../axios'
import MainGrid from '../components/MainGrid'
import NewsItem from '../components/NewsItem'

const Main = ({ news }) => {
  return (
    <div>
      <MainGrid news={news} />
      {news.map((item) => {
        return (
          <NewsItem
            key={item._id}
            title={item.title}
            text={item.text}
            id={item._id}
            image={item.image}
          />
        )
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

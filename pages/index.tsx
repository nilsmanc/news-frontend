import instance from '../axios'
import Heading from '../components/Heading'
import MainGrid from '../components/MainGrid'
import NewsItem from '../components/NewsItem'
import SocialMedia from '../components/SocialMedia'
import Subscribe from '../components/Subscribe'

import styles from '../styles/Main.module.scss'

const Main = ({ news }) => {
  return (
    <div>
      <MainGrid news={news} />
      <Heading title={'Popular'} />
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
      <Subscribe />
      <Heading title={'Follow us'} />
      <SocialMedia />
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

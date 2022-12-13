import instance from '../axios'
import Categories from '../components/Categories'
import Discover from '../components/Discover'
import Heading from '../components/Heading'
import NewsItem from '../components/NewsItem'
import SocialMedia from '../components/SocialMedia'
import Subscribe from '../components/Subscribe'
import { NewsType } from '../types/types'

import styles from '../styles/Main.module.scss'
import Highlights from '../components/Highlights'

const Main = ({ news }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Highlights news={news} />
      </div>
      <div className={styles.popular}>
        <Heading title={'Popular'} />
        {news.map((item: NewsType) => {
          return (
            <div key={item._id} className={styles.list}>
              <NewsItem
                key={item._id}
                title={item.title}
                text={item.text}
                id={item._id}
                image={item.image}
              />
            </div>
          )
        })}
      </div>
      <div className={styles.social}>
        <Heading title={'Follow us'} />
        <SocialMedia />
        <Subscribe />
      </div>
      <div className={styles.categories}>
        <Categories />
      </div>
      <div className={styles.discover}>
        <Discover />
      </div>
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

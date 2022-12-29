import Head from 'next/head'

import Categories from '../components/Categories'
import Discover from '../components/Discover'
import Heading from '../components/Heading'
import NewsItem from '../components/NewsItem'
import SocialMedia from '../components/SocialMedia'
import Subscribe from '../components/Subscribe'
import { NewsType } from '../types'
import Highlights from '../components/Highlights'
import { Api } from '../utils/api'

import styles from '../styles/Main.module.scss'

const Main = ({ news }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Discussion</title>
      </Head>
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
                date={item.date}
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

export const getServerSideProps = async (ctx) => {
  try {
    const news = await Api().news.getAll()

    return {
      props: {
        news,
      },
    }
  } catch (err) {
    console.log(err)
  }
  return {
    props: {
      news: null,
    },
  }
}

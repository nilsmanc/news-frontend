import Image from 'next/image'
import Head from 'next/head'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

import Comments from '../../components/Comments'
import { Api } from '../../utils/api'

import styles from '../../styles/Info.module.scss'

const Info = ({ newsItem }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{newsItem.title}</title>
      </Head>
      <Image className={styles.image} src={newsItem.image} width={2000} height={1000} alt='image' />
      <h2 className={styles.title}>{newsItem.title}</h2>
      <div className={styles.date}>
        <CalendarMonthIcon color='disabled' />
        <span>{newsItem.date}</span>
      </div>
      <p className={styles.text}>{newsItem.text}</p>
      <div className={styles.comments}>
        <Comments newsItem={newsItem._id} />
      </div>
    </div>
  )
}

export default Info

export const getServerSideProps = async (ctx) => {
  try {
    const id = ctx.params.id
    const newsItem = await Api(ctx).news.getOne(id)

    return {
      props: {
        newsItem,
      },
    }
  } catch (err) {
    console.log('Full news item page', err)

    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}

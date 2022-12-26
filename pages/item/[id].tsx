import Image from 'next/image'
import { useRouter } from 'next/router'
import Comments from '../../components/Comments'
import { Api } from '../../utils/api'

import styles from '../../styles/Info.module.scss'

const Info = ({ newsItem, newsComments }) => {
  const router = useRouter()

  const refreshData = async () => {
    await router.replace(router.asPath)
    window.scrollTo(0, document.body.scrollHeight)
  }

  return (
    <div className={styles.wrapper}>
      <Image className={styles.image} src={newsItem.image} width={500} height={500} alt='image' />
      <h2 className={styles.title}>{newsItem.title}</h2>
      <p className={styles.text}>{newsItem.text}</p>
      <div className={styles.comments}>
        <Comments refreshData={refreshData} newsComments={newsComments} id={newsItem._id} />
      </div>
    </div>
  )
}

export default Info

export const getServerSideProps = async (ctx) => {
  try {
    const id = ctx.params.id
    const newsItem = await Api(ctx).news.getOne(id)
    const newsComments = await Api(ctx).comment.getAll(id)

    return {
      props: {
        newsItem,
        newsComments,
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

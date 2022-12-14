import Image from 'next/image'
import instance from '../../axios'
import Comments from '../../components/Comments'

import styles from '../../styles/Info.module.scss'

const Info = ({ newsItem }) => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.image} src={newsItem.image} width={500} height={500} alt='image' />
      <h2 className={styles.title}>{newsItem.title}</h2>
      <p className={styles.text}>{newsItem.text}</p>
      <div className={styles.comments}>
        <Comments id={newsItem._id} />
      </div>
    </div>
  )
}

export default Info

export const getServerSideProps = async ({ params }) => {
  const { id } = params

  const { data } = await instance.get(`/news/${id}`)

  return { props: { newsItem: data } }
}

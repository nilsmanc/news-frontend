import instance from '../../axios'
import Comments from '../../components/Comments'

import styles from '../../styles/Info.module.scss'

const Info = ({ newsItem }) => {
  return (
    <div className={styles.wrapper}>
      <h2>{newsItem.title}</h2>
      <div>{newsItem.text}</div>
      <Comments id={newsItem._id} />
    </div>
  )
}

export default Info

export const getServerSideProps = async ({ params }) => {
  const { id } = params

  const { data } = await instance.get(`/news/${id}`)

  return { props: { newsItem: data } }
}

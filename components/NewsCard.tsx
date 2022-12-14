import Link from 'next/link'

import { NewsType } from '../types'

import styles from '../styles/NewsCard.module.scss'

type NewsCardProps = {
  item: NewsType
}

const NewsCard: React.FC<NewsCardProps> = ({ item: { _id, image, category, title } }) => {
  return (
    <div className={styles.box}>
      <div className={styles.img}>
        <img src={image} alt='' />
      </div>
      <div className={styles.text}>
        <span className={styles.category}>{category}</span>
        <Link href={`/item/${_id}`}>
          <h1 className={styles.titleBg}>{title}</h1>
        </Link>
      </div>
    </div>
  )
}
export default NewsCard

import Link from 'next/link'
import styles from '../styles/NewsItem.module.scss'

type NewsItemProps = {
  title: string
  text: string
  id: string
}

const NewsItem: React.FC<NewsItemProps> = ({ title, text, id }) => {
  return (
    <Link href={`/item/${id}`}>
      <div className={styles.wrapper} key={text}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.text}>{text}</div>
      </div>
    </Link>
  )
}

export default NewsItem

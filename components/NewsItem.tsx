import styles from '../styles/NewsItem.module.scss'

type NewsItemProps = {
  title: string
  text: string
}

const NewsItem: React.FC<NewsItemProps> = ({ title, text }) => {
  return (
    <div className={styles.wrapper} key={text}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.text}>{text}</div>
    </div>
  )
}

export default NewsItem

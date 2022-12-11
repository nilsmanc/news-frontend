import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/NewsItem.module.scss'

type NewsItemProps = {
  title: string
  text: string
  id: string
  image: string
}

const NewsItem: React.FC<NewsItemProps> = ({ title, text, id, image }) => {
  return (
    <Link href={`/item/${id}`}>
      <div className={styles.wrapper} key={text}>
        <Image src={image} width={200} height={200} alt={'image'} />
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.text}>{text}</div>
      </div>
    </Link>
  )
}

export default NewsItem

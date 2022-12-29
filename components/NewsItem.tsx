import Image from 'next/image'
import Link from 'next/link'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

import styles from '../styles/NewsItem.module.scss'

type NewsItemProps = {
  title: string
  text: string
  id: string
  image: string
  date: string
}

const NewsItem: React.FC<NewsItemProps> = ({ title, text, id, image, date }) => {
  return (
    <Link href={`/item/${id}`}>
      <div className={styles.wrapper} key={text}>
        <Image className={styles.image} src={image} width={1000} height={1000} alt={'image'} />
        <p className={styles.title}>{title}</p>
        <div className={styles.date}>
          <CalendarMonthIcon color='disabled' />
          <span>{date}</span>
        </div>
      </div>
    </Link>
  )
}

export default NewsItem

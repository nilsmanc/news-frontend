import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/MainGrid.module.scss'
import { NewsType } from '../types/types'

type MainGridProps = {
  news: NewsType
}

const MainGrid: React.FC<MainGridProps> = ({ news }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Link href={`/item/${news[0]._id}`}>
          <Image src={news[0].image} width={600} height={600} alt={'image'} />
          <p className={styles.title}>{news[0].title}</p>
          <p className={styles.featured}>Featured</p>
        </Link>
      </div>
      <div className={styles.rightTop}>
        <Link href={`/item/${news[1]._id}`}>
          <Image src={news[1].image} width={750} height={225} alt={'image'} />
          <p className={styles.title}>{news[1].title}</p>
          <p className={styles.sport}>Sport</p>
        </Link>
      </div>
      <div className={styles.rigthBottomLeft}>
        <Link href={`/item/${news[2]._id}`}>
          <Image src={news[2].image} width={350} height={350} alt={'image'} />
          <p className={styles.title}>{news[2].title}</p>
          <p className={styles.culture}>Culture</p>
        </Link>
      </div>
      <div className={styles.rightBottomRight}>
        <Link href={`/item/${news[3]._id}`}>
          <Image src={news[3].image} width={350} height={350} alt={'image'} />
          <p className={styles.title}>{news[3].title}</p>
          <p className={styles.technology}>Technology</p>
        </Link>
      </div>
    </div>
  )
}

export default MainGrid

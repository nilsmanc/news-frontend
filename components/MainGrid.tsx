import Image from 'next/image'
import styles from '../styles/MainGrid.module.scss'

type MainGridProps = {
  news: any
}

const MainGrid: React.FC<MainGridProps> = ({ news }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Image src={news[0].image} width={600} height={600} alt={'image'} />
      </div>
      <div className={styles.rightTop}>
        <Image src={news[1].image} width={750} height={220} alt={'image'} />
      </div>
      <div className={styles.rigthBottomLeft}>
        <Image src={news[2].image} width={350} height={350} alt={'image'} />
      </div>
      <div className={styles.rightBottomRight}>
        <Image src={news[3].image} width={350} height={350} alt={'image'} />
      </div>
    </div>
  )
}

export default MainGrid

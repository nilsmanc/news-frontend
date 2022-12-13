import { NewsType } from '../types/types'
import NewsCard from './NewsCard'

import styles from '../styles/Highlights.module.scss'

type HighlightsType = {
  news: NewsType[]
}

const Highlights: React.FC<HighlightsType> = ({ news }) => {
  return (
    <section className={styles.highlights}>
      <div className={styles.container}>
        {news.map((item: NewsType) => {
          return (
            <>
              <NewsCard key={item._id} item={item} />
            </>
          )
        })}
      </div>
    </section>
  )
}

export default Highlights

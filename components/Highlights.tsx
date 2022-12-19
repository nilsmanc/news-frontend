import { NewsType } from '../types'
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
              <NewsCard item={item} />
            </>
          )
        })}
      </div>
    </section>
  )
}

export default Highlights

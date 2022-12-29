import React from 'react'
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
        {news.slice(0, 4).map((item: NewsType, i) => {
          return (
            <React.Fragment key={i}>
              <NewsCard item={item} />
            </React.Fragment>
          )
        })}
      </div>
    </section>
  )
}

export default Highlights

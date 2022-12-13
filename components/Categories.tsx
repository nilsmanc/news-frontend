import Heading from './Heading'

import styles from '../styles/Categories.module.scss'

const categories = [
  'world',
  'travel',
  'sport',
  'fun',
  'health',
  'fashion',
  'business',
  'technology',
]

const Categories = () => {
  return (
    <section>
      <Heading title='Categories' />
      {categories.map((val, i) => {
        return (
          <div key={i} className={styles.category}>
            <span>{val}</span>
          </div>
        )
      })}
    </section>
  )
}

export default Categories

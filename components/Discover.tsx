import { discover } from '../data'
import Heading from './Heading'

import styles from '../styles/Discover.module.scss'

const Discover = () => {
  return (
    <>
      <section className={styles.discover}>
        <Heading title='Discover' />
        <div className={styles.content}>
          {discover.map((val, i) => {
            return (
              <div key={i} className={styles.box}>
                <div className={styles.img}>
                  <img src={val.cover} alt='' />
                </div>
                <h1 className={styles.title}>{val.title}</h1>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Discover

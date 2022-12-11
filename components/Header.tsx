import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>Home</button>
      <button className={styles.button}>Culture</button>
      <button className={styles.button}>Politics</button>
      <button className={styles.button}>Sport</button>
      <button className={styles.button}>Reviews</button>
    </div>
  )
}

export default Header

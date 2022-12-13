import styles from '../styles/Header.module.scss'

const links = ['Home', 'Culture', 'Politics', 'Sport', 'Reviews']
const Header = () => {
  return (
    <div className={styles.wrapper}>
      {links.map((link, i) => (
        <button key={i} className={styles.button}>
          {link}
        </button>
      ))}
    </div>
  )
}

export default Header

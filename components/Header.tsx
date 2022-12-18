import Link from 'next/link'
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

      <Link href={'/login'}>
        <button className={styles.button}>Sing In</button>
      </Link>
      <Link href={'/register'}>
        <button className={styles.button}>Sing Up</button>
      </Link>
    </div>
  )
}

export default Header

import Link from 'next/link'
import { useSelector } from 'react-redux'

import { authDataSelector, logout } from '../redux/slices/auth'
import { useAppDispatch } from '../redux/store'

import styles from '../styles/Header.module.scss'

const links = ['Home', 'Culture', 'Politics', 'Sport', 'Reviews']
const Header = () => {
  const dispatch = useAppDispatch()
  const userData = useSelector(authDataSelector)

  const logoutHandler = () => {
    dispatch(logout())
    window.localStorage.removeItem('authToken')
  }

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
      <button className={styles.button} onClick={logoutHandler}>
        logout
      </button>
      <div>{userData?.data.username}</div>
    </div>
  )
}

export default Header

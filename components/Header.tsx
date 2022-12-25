import Link from 'next/link'
import { useSelector } from 'react-redux'

import { logout } from '../redux/slices/auth'
import { useAppDispatch } from '../redux/store'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

import styles from '../styles/Header.module.scss'

const links = ['Home', 'Culture', 'Politics', 'Sport', 'Reviews']
const Header = () => {
  const dispatch = useAppDispatch()

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
        <ExitToAppIcon />
      </button>
    </div>
  )
}

export default Header

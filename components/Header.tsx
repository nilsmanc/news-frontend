import Link from 'next/link'
import { useSelector } from 'react-redux'
import MenuIcon from '@mui/icons-material/Menu'

import { authDataSelector, logout } from '../redux/slices/auth'
import { useAppDispatch } from '../redux/store'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { destroyCookie } from 'nookies'

import styles from '../styles/Header.module.scss'

const links = ['Home', 'Culture', 'Politics', 'Sport', 'Reviews']

const Header = () => {
  const dispatch = useAppDispatch()
  const authData = useSelector(authDataSelector)

  const logoutHandler = () => {
    dispatch(logout())
    destroyCookie(undefined, 'token')
  }

  return (
    <div className={styles.wrapper}>
      <MenuIcon className={styles.menu} />
      <div className={styles.links}>
        {links.map((link, i) => (
          <button key={i} className={styles.button}>
            {link}
          </button>
        ))}
      </div>
      <div className={styles.auth}>
        {!authData && (
          <>
            <Link href={'/login'}>
              <button className={styles.button}>Sing In</button>
            </Link>
            <Link href={'/register'}>
              <button className={styles.button}>Sing Up</button>
            </Link>
          </>
        )}
        {authData && (
          <>
            <button className={styles.button} onClick={logoutHandler}>
              <ExitToAppIcon />
            </button>
            <div className={styles.username}>{authData?.username}</div>
          </>
        )}
      </div>
    </div>
  )
}

export default Header

import { Button } from '@mui/material'
import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div>logo</div>
      <Button>Main</Button>
      <Button>Login</Button>
    </div>
  )
}

export default Header

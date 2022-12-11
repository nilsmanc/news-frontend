import Image from 'next/image'
import { ReactNode } from 'react'
import Header from './Header'

import styles from '../styles/Layout.module.scss'

interface Props {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Image
        className={styles.logo}
        src={'/static/logo.png'}
        width={400}
        height={60}
        alt={'logo'}
      />
      <Header />
      {children}
    </>
  )
}

export default Layout

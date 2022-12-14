import Image from 'next/image'
import { ReactNode } from 'react'
import Header from './Header'

import styles from '../styles/Layout.module.scss'
import Footer from './Footer'
import Link from 'next/link'

interface Props {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Link href={'/'}>
        <Image
          className={styles.logo}
          src={'/static/logo.png'}
          width={400}
          height={60}
          alt={'logo'}
        />
      </Link>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout

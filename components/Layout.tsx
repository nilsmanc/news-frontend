import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Header from './Header'
import Footer from './Footer'

import styles from '../styles/Layout.module.scss'

type LayoutProps = {
  children?: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
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

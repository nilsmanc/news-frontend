import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

import styles from '../styles/App.module.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <div className={styles.wrapper}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  )
}

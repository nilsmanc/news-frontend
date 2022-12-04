import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'

import store from '../redux/store'

import styles from '../styles/App.module.scss'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <div className={styles.wrapper}>
            <Component {...pageProps} />
          </div>
        </Layout>
      </Provider>
    </>
  )
}

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import store from '../redux/store'
import Layout from '../components/Layout'

import styles from '../styles/App.module.scss'
import '../styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <div className={styles.wrapper}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </Provider>
  )
}

export default App

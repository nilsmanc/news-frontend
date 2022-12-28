import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { wrapper } from '../redux/store'
import Layout from '../components/Layout'
import { setUserData } from '../redux/slices/auth'
import { Api } from '../utils/api'

import styles from '../styles/App.module.scss'
import '../styles/globals.scss'
import Head from 'next/head'

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest)

  const { pageProps } = props

  return (
    <Provider store={store}>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='favicons/favicon-16x16.png' />
      </Head>
      <Layout>
        <div className={styles.wrapper}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </Provider>
  )
}

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
  try {
    const userData = await Api(ctx).user.getMe()

    store.dispatch(setUserData(userData))
  } catch (err) {
    console.log(err)
  }

  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {},
  }
})

export default App

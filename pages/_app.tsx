import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { wrapper } from '../redux/store'
import Layout from '../components/Layout'
import { setUserData } from '../redux/slices/auth'
import { Api } from '../utils/api'

import styles from '../styles/App.module.scss'
import '../styles/globals.scss'

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest)

  const { pageProps } = props

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

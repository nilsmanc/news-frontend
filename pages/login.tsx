import { setCookie } from 'nookies'
import { useForm } from 'react-hook-form'

import { setUserData } from '../redux/slices/auth'
import { useAppDispatch } from '../redux/store'
import { Api } from '../utils/api'
import Link from 'next/link'

import styles from '../styles/AuthPage.module.scss'
import Head from 'next/head'

const LoginPage = () => {
  const dispatch = useAppDispatch()
  const onSubmit = async (values) => {
    const data = await Api().user.login(values)

    dispatch(setUserData(values))

    setCookie(null, 'token', data, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
  }

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onChange',
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign in</title>
      </Head>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          Login
          <input type='text' {...register('username')} />
        </label>
        <label className={styles.label}>
          Password
          <input type='text' {...register('password')} />
        </label>
        <button>Sign In</button>
      </form>
      <div>
        <span className={styles.question}>
          Don&apos;t have an account?{' '}
          <Link className={styles.redirect} href={'/register'}>
            Sign up
          </Link>
        </span>
      </div>
    </div>
  )
}

export default LoginPage

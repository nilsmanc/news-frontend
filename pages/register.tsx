import { useForm } from 'react-hook-form'
import Link from 'next/link'

import { Api } from '../utils/api'

import styles from '../styles/AuthPage.module.scss'
import Head from 'next/head'
import { useRouter } from 'next/router'

const RegisterPage = () => {
  const router = useRouter()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onChange',
  })

  const onSubmit = async (values) => {
    await Api().user.register(values)
    router.push('/login')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign up</title>
      </Head>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          Login
          <input type='text' {...register('username')} />
        </label>
        <label className={styles.label}>
          Password
          <input type='text' {...register('password')} />
        </label>
        <button>Sign Up</button>
      </form>
      <div>
        <span className={styles.question}>
          Have an account?{' '}
          <Link className={styles.redirect} href={'/login'}>
            Sign in
          </Link>
        </span>
      </div>
    </div>
  )
}

export default RegisterPage

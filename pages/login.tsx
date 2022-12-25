import { setCookie } from 'nookies'
import { useForm } from 'react-hook-form'

import { fetchLogin } from '../redux/asyncActions'
import { useAppDispatch } from '../redux/store'

import styles from '../styles/AuthPage.module.scss'

const LoginPage = () => {
  const dispatch = useAppDispatch()

  const onSubmit = async (values) => {
    const data = await dispatch(fetchLogin(values))
    console.log(data)
    setCookie(null, 'token', data.payload.data, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    if (data.payload.data) {
      window.localStorage.setItem('authToken', data.payload.data)
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onChange',
  })

  return (
    <div className={styles.container}>
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
        <span className={styles.question}>Don't have account? Sign up</span>
      </div>
    </div>
  )
}

export default LoginPage

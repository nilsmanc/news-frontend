import { useForm } from 'react-hook-form'
import { fetchLogin } from '../redux/asyncActions'
import { useAppDispatch } from '../redux/store'
import styles from '../styles/AuthPage.module.scss'

const LoginPage = () => {
  const dispatch = useAppDispatch()

  const onSubmit = async (values) => {
    const data = await dispatch(fetchLogin(values))
    console.log(data)

    if ('access_token' in data.payload.data) {
      window.localStorage.setItem('access_token', data.payload.data.access_token)
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

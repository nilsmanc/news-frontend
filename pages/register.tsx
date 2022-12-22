import { useForm } from 'react-hook-form'

import { fetchRegister } from '../redux/asyncActions'
import { useAppDispatch } from '../redux/store'

import styles from '../styles/AuthPage.module.scss'

const RegisterPage = () => {
  const dispatch = useAppDispatch()

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

  const onSubmit = async (values) => {
    await dispatch(fetchRegister(values))
  }

  return (
    <div className={styles.container}>
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
        <span className={styles.question}>Have an account? Sign in</span>
      </div>
    </div>
  )
}

export default RegisterPage

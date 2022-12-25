import { logout } from '../redux/slices/auth'
import { useAppDispatch } from '../redux/store'

const dispatch = useAppDispatch()

export const removeUser = () => {
  localStorage.removeItem('auth')
  dispatch(logout)
}

export const getAuthDataFromLS = () => {
  const lsData = localStorage.getItem('authToken')

  return lsData
}

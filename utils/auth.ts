import { logout } from '../redux/slices/auth'
import { useAppDispatch } from '../redux/store'

const dispatch = useAppDispatch()

export const removeUser = () => {
  localStorage.removeItem('auth')
  dispatch(logout)
}

export const getAuthDataFromLS = () => {
  try {
    const lsData = localStorage.getItem('authToken')

    if (!lsData) {
      removeUser()
      return
    }

    return lsData
  } catch (error) {
    removeUser()
  }
}

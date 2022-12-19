import { logout } from '../redux/slices/auth'
import { useAppDispatch } from '../redux/store'

const dispatch = useAppDispatch()

export const removeUser = () => {
  localStorage.removeItem('auth')
  dispatch(logout)
}

export const getAuthDataFromLS = () => {
  try {
    const lsData = JSON.parse(localStorage.getItem('auth') as string)

    if (!lsData) {
      removeUser()
      return
    }

    return lsData
  } catch (error) {
    removeUser()
  }
}

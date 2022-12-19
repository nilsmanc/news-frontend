import { IHandleAxiosErrorPayload } from './../types/index'
import { fetchRemoveComment } from './../redux/asyncActions'
import { AxiosError } from 'axios'
import { fetchRefreshToken } from '../redux/asyncActions'

import { getAuthDataFromLS, removeUser } from './auth'

export const handleAxiosError = async (
  error: unknown,
  payload: IHandleAxiosErrorPayload | null = null,
) => {
  const errorMessage =
    ((error as AxiosError).response?.data as { message: string }).message ||
    ((error as AxiosError).response?.data as { error: string }).error

  if (errorMessage) {
    if (errorMessage === 'jwt expired') {
      const payloadData = payload as IHandleAxiosErrorPayload
      const authData = getAuthDataFromLS()

      fetchRefreshToken({
        url: '/auth/refresh',
        token: authData.refresh_token,
        username: authData.username,
      })
      if (payload !== null) {
        switch (payloadData.type) {
          case 'delete':
            fetchRemoveComment(payloadData.deleteComment?.id as string)
            break
          default:
            break
        }
      }
    } else {
      removeUser()
    }
  }
}

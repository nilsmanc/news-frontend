import Cookies, { parseCookies } from 'nookies'
import axios from 'axios'
import { GetServerSidePropsContext, NextPageContext } from 'next'

import { UserApi } from './user'
import { CommentApi } from './comment'
import { NewsApi } from './news'

export type ApiReturnType = {
  user: ReturnType<typeof UserApi>
  news: ReturnType<typeof NewsApi>
  comment: ReturnType<typeof CommentApi>
}

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
  const cookies = ctx ? Cookies.get(ctx) : parseCookies()
  const token = cookies.token

  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Authorization: token,
    },
  })

  const apis = {
    user: UserApi,
    news: NewsApi,
    comment: CommentApi,
  }

  const result = Object.entries(apis).reduce((prev, [key, f]) => {
    return {
      ...prev,
      [key]: f(instance),
    }
  }, {} as ApiReturnType)

  return result
}

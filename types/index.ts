export type NewsType = {
  _id: string
  title: string
  text: string
  image: string
  category: string
}

export type CommentsType = {
  text: string
  newsItem: string
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface IBaseEffectArgs {
  url: string
  token: string
}

export interface IRefreshToken extends IBaseEffectArgs {
  username: string
}

export interface IDeleteComment extends IBaseEffectArgs {
  id: string | number
}

export interface IHandleAxiosErrorPayload {
  type: string
  getCosts?: Partial<IBaseEffectArgs>
  deleteComment?: Partial<IDeleteComment>
}

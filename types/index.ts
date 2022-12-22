export type NewsType = {
  _id: string
  title: string
  text: string
  image: string
  category: string
}

export type CommentType = {
  text: string
  newsItem: string
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
}

export type AuthParams = {
  username: string
  password: string
}

export interface AuthData {
  meta: {
    arg: AuthParams
    requestId: string
    requestStatus: string
  }
  payload: {
    data: string
  }
  type: string
}

export type NewsType = {
  _id: string
  title: string
  text: string
  image: string
  category: string
  date: string
}

export type UserType = {
  _id: string
  username: string
  avatarURL: string
}

export type CommentType = {
  text: string
  newsItem: NewsType
  user: UserType
  _id: string
  createdAt: string
  updatedAt: string
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

export type AuthDto = {
  username: string
  password: string
}

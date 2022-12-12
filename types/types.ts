export type NewsType = {
  _id: string
  title: string
  text: string
  image: string
}

export type CommentsType = {
  text: string
  newsItem: string
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
}

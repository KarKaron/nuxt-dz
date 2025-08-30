export interface IPost {
  id: string
  title: string
  content: string
  author_id: string
  likes: number
  dislikes: number
  rating: number
  published_at: string
  updated_at: string
}

export interface IGetPostsResponse {
  posts: IPost[]
  total: number
  page: number
  page_size: number
  total_pages: number
}

export interface IGetPostByIdResponse {
  post: IPost
}

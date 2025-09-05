export interface IPost {
  id: number
  title: string
  content: string
  author_id: number
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

export const enum ESort {
  "date" = "date",
  "rating" = "rating"
}

export const enum ELike {
  like = "like",
  dislike = "dislike"
}

import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface Post {
  number: string
  html_url: string
  comments: number
  created_at: string
  updated_at: string
  body: string
  title: string
  user: {
    login: string
  }
}

interface PostsProviderProps {
  children: ReactNode
}

interface PostsContextType {
  post: Post
  posts: Post[]
  fetchPost: (postNumber: string) => Promise<void>
  fetchPosts: (query?: string) => Promise<void>
}

const GITHUB_REPO = 'ignite-desafio-github-blog'
const GITHUB_USER = 'lemartins07'

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [post, setPost] = useState<Post>({} as Post)

  const fetchPosts = useCallback(async (query?: string) => {
    try {
      const response = await api.get('search/issues', {
        params: {
          q:
            query !== undefined
              ? `${query} repo:${GITHUB_USER}/${GITHUB_REPO}`
              : `repo:${GITHUB_USER}/${GITHUB_REPO}`,
        },
      })
      console.log('query: ', query)

      // const response = await api.get(`posts${query && '?search=' + query}`)

      const data = response.data.items

      setPosts(data)
    } catch (e) {
      console.error(e)
    }
  }, [])

  const fetchPost = useCallback(async (postNumber: string) => {
    try {
      // https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1

      const response = await api.get(
        `repos/${GITHUB_USER}/${GITHUB_REPO}/issues/${postNumber}`,
      )

      // const response = await api.get(`posts/${postNumber}`)

      const data = response.data
      setPost(data)
    } catch (e) {
      console.error(e)
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider value={{ posts, fetchPosts, fetchPost, post }}>
      {children}
    </PostsContext.Provider>
  )
}

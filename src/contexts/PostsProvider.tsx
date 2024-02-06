import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface Posts {
  id: string
  url: string
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
  posts: Posts[]
  fetchPosts: (query?: string) => Promise<void>
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Posts[]>([])

  const fetchPosts = useCallback(async (query = '') => {
    try {
      const response = await api.get('search/issues', {
        params: {
          q: `${query}repo:lemartins07/ignite-desafio-github-blog`,
        },
      })

      const data = response.data.items

      setPosts(data)
    } catch (e) {
      console.log(e)
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}

import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface User {
  login: string
  avatar_url: string
  bio: string
  company: string
  followers: number
  name: string
  html_url: string
}

interface UserProviverProps {
  children: ReactNode
}

interface UserContextType {
  user: User
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserProviverProps) {
  const [user, setUser] = useState<User>({} as User)

  const fetchUser = useCallback(async () => {
    const response = await api.get('users/lemartins07')
    const data = response.data

    setUser(data)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}

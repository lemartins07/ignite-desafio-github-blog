import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface UserProviverProps {
  children: ReactNode
}

export const UserContext = createContext({})

export function UserProvider({ children }: UserProviverProps) {
  const [user, setUser] = useState({})

  const fetchUser = useCallback(async () => {
    const response = await api.get('users/lemartins07')
    const data = response.data

    console.log(data)

    setUser(data)
  }, [])

  useEffect(() => {
    // fetchUser()
  }, [fetchUser])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

import { createContext, ReactNode, useState } from "react"
import axios from 'axios'

interface UserContextData {
  userInfo: any
}

export const UserContext = createContext({} as UserContextData)

interface UserContextProviderProps {
  children: ReactNode
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [userInfo, setUserInfo] = useState({})
  const username = 'felipemacci' // Change username here

  const setGithubUser = async() => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`)

      setUserInfo(await response.data)
    } catch(error) {
      console.error(error)
    }
  }

  setGithubUser()

  return (
    <UserContext.Provider
      value={{userInfo}}
    >
      {children}
    </UserContext.Provider>
  )
}
import { createContext, useContext } from 'react'

export const GithubContext = createContext()
export const useGithub = () => useContext(GithubContext)
import axios from "axios"
import { useQuery } from "react-query"

export enum QueryKeys {
  Projects = "projects",
}

export type Project = {
  id: string
  emoji: string
  backgroundColor: string
  name: string
}

export const useProjects = () => {
  return useQuery(QueryKeys.Projects, async (): Promise<Project[]> => {
    const response = await axios.get(`projects`, {
      baseURL: process.env.REACT_APP_API_URL,
    })
    return response.data?.projects || []
  })
}

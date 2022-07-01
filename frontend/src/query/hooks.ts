import axios from "axios"
import { useQuery } from "react-query"
import projectsPlaceholder from "./data.json"

export enum QueryKeys {
  Projects = "projects",
}

export type Project = typeof projectsPlaceholder.projects[0]

export const useProjects = () => {
  return useQuery(
    QueryKeys.Projects,
    async (): Promise<Project[]> => {
      const response = await axios.get(`projects`, {
        baseURL: process.env.REACT_APP_API_URL,
      })
      return response.data?.projects || []
    },
    {
      placeholderData: projectsPlaceholder.projects,
    }
  )
}

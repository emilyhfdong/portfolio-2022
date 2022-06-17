import React from "react"
import { Box, Flex, Text } from "rebass"
import { ProjectCard } from "./components/ProjectCard"
import { ALL_PROJECTS } from "./data"

export const App: React.FC = () => (
  <Flex sx={{ height: "100vh", width: "100vw", padding: "2rem" }}>
    <Flex>
      {ALL_PROJECTS.map((project) => (
        <ProjectCard project={project} />
      ))}
    </Flex>
  </Flex>
)

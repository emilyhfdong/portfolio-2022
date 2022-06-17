import React from "react"
import { Box, Flex } from "rebass"
import { Project } from "../types"

type ProjectCardProps = {
  project: Project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Flex
      sx={{
        height: 100,
        width: 100,
        backgroundColor: project.backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 35,
        borderRadius: "1rem",
        marginLeft: "1rem",
      }}
    >
      {project.emoji}
    </Flex>
  )
}

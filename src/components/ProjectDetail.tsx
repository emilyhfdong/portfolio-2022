import React from "react"
import { Flex, Text } from "rebass"
import { Project } from "../types"

type ProjectDetailProps = {
  project: Project
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project: { emoji, name },
}) => {
  return (
    <Flex
      sx={{
        padding: "2rem",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Text sx={{ fontSize: 70 }}>
        {emoji} {name}
      </Text>
    </Flex>
  )
}

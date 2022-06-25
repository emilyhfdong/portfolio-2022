import React from "react"
import { Box, Flex, Text } from "rebass"
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
        padding: [10, "2rem"],
        flexDirection: "column",
        alignItems: ["start", "center"],
        width: "100%",
      }}
    >
      <Text sx={{ fontSize: [30, 60], fontWeight: "600" }}>
        {emoji}
        <Box
          as="br"
          sx={{ display: ["flex", "none"], marginBottom: "2rem" }}
        />{" "}
        {name}
      </Text>
    </Flex>
  )
}

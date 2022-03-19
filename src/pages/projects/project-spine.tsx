import React from "react"
import { Flex } from "rebass"
import { Text } from "../../components/text"
import { IProject } from "./data"

export const ProjectSpine: React.FC<IProject> = ({ name, year }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        opacity: 0.6,
        ":hover": {
          opacity: 1,
        },
        paddingY: 4,
      }}
    >
      <Text type="title" sx={{ writingMode: "vertical-rl", fontSize: 40 }}>
        {name}
      </Text>
      <Text type="body" sx={{ writingMode: "vertical-rl", fontSize: 30 }}>
        {year}
      </Text>
    </Flex>
  )
}

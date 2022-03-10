import React from "react"
import { Flex } from "rebass"
import { theme } from "../theme/theme"

export const Projects: React.FC = () => {
  return (
    <Flex
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: theme.colors.blue,
      }}
    ></Flex>
  )
}

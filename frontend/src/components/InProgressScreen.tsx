import React from "react"
import { Flex, Text } from "rebass"

type InProgressScreenProps = {}

export const InProgressScreen: React.FC<InProgressScreenProps> = () => {
  return (
    <Flex
      sx={{
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Text sx={{ fontSize: 80 }}>👷🏻‍♀️</Text>
      <Text sx={{ fontSize: [50, 60] }}>coming soon!</Text>
    </Flex>
  )
}

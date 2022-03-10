import React from "react"
import { Text } from "rebass"
import { theme } from "../theme/theme"

interface ITitleProps {
  text: string
}

export const Title: React.FC<ITitleProps> = () => {
  return (
    <Text
      sx={{
        color: theme.colors.orange,
        fontFamily: theme.fontFamily.lekyCalgria,
        fontSize: 50,
        marginLeft: 6,
      }}
    >
      emily dong
    </Text>
  )
}

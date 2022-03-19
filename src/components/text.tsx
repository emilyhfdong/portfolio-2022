import React from "react"
import { SxStyleProp, Text as RText } from "rebass"
import { theme } from "../theme/theme"

interface ITitleProps {
  type?: "body" | "title" | "note" | "header"
  sx?: SxStyleProp
  className?: string
}

export const Text: React.FC<ITitleProps> = ({
  sx,
  type = "body",
  className,
  children,
}) => {
  return (
    <RText
      className={className}
      sx={{
        color: theme.colors.white,
        ...theme.fontStyles[type],
        ...sx,
      }}
    >
      {children}
    </RText>
  )
}

import React, { useRef } from "react"
import { Box, Flex } from "rebass"

type BreakpointHelperProps = {}

export const BreakpointHelper: React.FC<BreakpointHelperProps> = () => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <Flex
      ref={ref}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        justifyContent: "flex-end",
      }}
    >
      <Box sx={{ display: ["flex", "none", "none", "none", "none"] }}>1</Box>
      <Box sx={{ display: ["none", "flex", "none", "none", "none"] }}>2</Box>
      <Box sx={{ display: ["none", "none", "flex", "none", "none"] }}>3</Box>
      <Box sx={{ display: ["none", "none", "none", "flex", "none"] }}>4</Box>
      <Box sx={{ display: ["none", "none", "none", "none", "flex"] }}>5</Box>
    </Flex>
  )
}

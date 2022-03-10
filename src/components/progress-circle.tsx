import React from "react"
import { Box, Flex } from "rebass"

interface IProgressBarProps {
  color: string
  totalSteps: number
  currentStep: number
}

export const ProgressBar: React.FC<IProgressBarProps> = ({
  totalSteps,
  color,
  currentStep,
}) => {
  return (
    <Flex
      sx={{
        position: "fixed",
        height: "100vh",
        right: 0,
        justifyContent: "center",
        flexDirection: "column",
        zIndex: 1,
      }}
    >
      {new Array(totalSteps).fill(0).map((_, idx) => (
        <ProgressCircle
          color={color}
          key={idx}
          filled={idx === currentStep - 1}
        />
      ))}
    </Flex>
  )
}

interface IProgressCircleProps {
  filled: boolean
  color: string
}

const ProgressCircle: React.FC<IProgressCircleProps> = ({ filled, color }) => {
  return (
    <Box
      sx={{
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: "5px 40px",
        border: `1px solid ${color}`,
        ...(filled && { bg: color }),
      }}
    />
  )
}

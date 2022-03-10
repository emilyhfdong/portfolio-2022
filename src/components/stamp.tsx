import React from "react"
import { Box } from "rebass"
import { theme } from "../theme/theme"

export interface IDimensions {
  width: number
  height: number
}

export interface IStampProps {
  position: { x: number; y: number }
  dimensions: IDimensions
}

export const getStampDimensions = (windowDimensions: IDimensions) => {
  const multiplyFactors = [0.4, 0.5, 0.6, 0.7, 0.8]
  const getRandomFactor = () => {
    const index = Math.floor(Math.random() * multiplyFactors.length)
    return multiplyFactors[index]
  }
  return {
    width: windowDimensions.width * getRandomFactor(),
    height: windowDimensions.height * getRandomFactor(),
  }
}

export const Stamp: React.FC<IStampProps> = ({
  position,
  dimensions: { height, width },
}) => {
  const top = position.y - height / 2
  const left = position.x - width / 2

  return (
    <Box
      sx={{
        position: "absolute",
        backgroundColor: theme.colors.orange,
        opacity: 0.2,
        top,
        left,
        width,
        height,
      }}
    />
  )
}

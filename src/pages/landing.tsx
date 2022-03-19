import React, { useEffect, useState } from "react"
import { Box, Flex, Image } from "rebass"
import {
  Stamp,
  getStampDimensions,
  IDimensions,
  IStampProps,
  AnimatedNote,
} from "../components"
import { theme } from "../theme/theme"
import { useWindowSize } from "../utils/hooks"
import clickMe from "../images/click-me.png"
import { Text } from "../components/text"

interface IPosition {
  x: number
  y: number
}

export const Landing: React.FC = () => {
  const windowDimensions = useWindowSize()
  const [mousePosition, setMousePosition] = useState<IPosition>({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState<IDimensions>({
    width: 0,
    height: 0,
  })
  const [stamps, setStamps] = useState<IStampProps[]>([])

  const positionAndDimensionsSet = Boolean(mousePosition.x && dimensions.width)

  useEffect(() => {
    if (windowDimensions.width && !dimensions.width) {
      setDimensions(getStampDimensions(windowDimensions))
    }
  }, [windowDimensions, dimensions])

  return (
    <Flex
      onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
      onClick={() => {
        setStamps([...stamps, { dimensions, position: mousePosition }])
        setDimensions(getStampDimensions(windowDimensions))
      }}
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.colors.beige,
        alignItems: "center",
        position: "relative",
        paddingLeft: theme.margins.left,
      }}
    >
      <Text sx={{ color: theme.colors.orange }} type="title">
        emily dong
      </Text>
      <Box
        sx={{
          position: "absolute",
          backgroundColor: theme.colors.orange,
          opacity: 0.2,
          bottom: 0,
          left: 0,
          width: "60vw",
          height: "48vh",
        }}
      />
      {positionAndDimensionsSet && (
        <Stamp position={mousePosition} dimensions={dimensions} />
      )}
      {positionAndDimensionsSet && (
        <Box sx={{ bg: "red" }}>
          {stamps.length === 1 && (
            <AnimatedNote
              sx={{
                position: "absolute",
                left: mousePosition.x + 45,
                top: mousePosition.y - 50,
              }}
            />
          )}
          <Image
            src={clickMe}
            sx={{
              height: 80,
              animation: "rotation 8s infinite linear",
              position: "absolute",
              left: mousePosition.x - 40,
              top: mousePosition.y - 40,
              // bg: "blue",
            }}
          />
        </Box>
      )}
      {stamps.map((props, idx) => (
        <Stamp key={idx} {...props} />
      ))}
    </Flex>
  )
}

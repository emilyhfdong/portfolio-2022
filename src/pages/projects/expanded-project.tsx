import React from "react"
import { Box, Flex } from "rebass"
import { Text } from "../../components/text"
import { theme } from "../../theme/theme"
import { IProject } from "./data"
import { RatingHearts } from "./rating-hearts"

export const ExpandedProject: React.FC<IProject> = ({
  name,
  year,
  rating,
  motivation,
  summary,
  finalProduct,
}) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        width: "100%",
        paddingX: 4,
        paddingY: 2,
        maxHeight: "100vh",
        overflow: "scroll",
      }}
    >
      <Flex
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text type="title" sx={{ fontSize: 40 }}>
          {name}
        </Text>
        <Text type="body" sx={{ fontSize: 30 }}>
          {year}
        </Text>
      </Flex>
      <Text type="note" sx={{ fontStyle: "italic" }}>
        {summary}
      </Text>
      <RatingHearts rating={rating} />
      <Box sx={{ borderTop: `1px solid #FFFFFF50`, paddingY: 25 }}>
        <Text type="header" sx={{ marginBottom: "5px" }}>
          Motivation
        </Text>
        <Text type="body">{motivation}</Text>
      </Box>
      <Text type="header" sx={{ marginBottom: "5px" }}>
        Final Product
      </Text>
      <Text type="body">{finalProduct}</Text>
    </Flex>
  )
}

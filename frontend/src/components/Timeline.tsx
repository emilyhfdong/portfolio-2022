import { DateTime } from "luxon"
import React from "react"
import { Box, Flex, Text } from "rebass"

type TimelineProps = {
  dateCreated: string
  lastUpdatedAt: string
  backgroundColor: string
}

const formatDate = (isoDate: string) =>
  DateTime.fromISO(isoDate).toFormat("LLL dd yyyy")

export const Timeline: React.FC<TimelineProps> = ({
  dateCreated,
  lastUpdatedAt,
  backgroundColor,
}) => {
  const monthsBetween = Math.floor(
    DateTime.fromISO(lastUpdatedAt)
      .diff(DateTime.fromISO(dateCreated))
      .as("months")
  )

  const unit = monthsBetween >= 1 ? "months" : "days"

  const unitsBetween = Math.floor(
    DateTime.fromISO(lastUpdatedAt).diff(DateTime.fromISO(dateCreated)).as(unit)
  )

  return (
    <Flex sx={{ flexDirection: "column", marginBottom: "2rem" }}>
      <Flex sx={{ marginBottom: "1rem", justifyContent: "space-between" }}>
        <Text
          sx={{
            fontSize: 12,
            color: backgroundColor,
            filter: "brightness(50%)",
          }}
        >
          {formatDate(dateCreated).toUpperCase()}
        </Text>
        <Text
          sx={{
            fontSize: 12,
            color: backgroundColor,
            filter: "brightness(50%)",
          }}
        >
          {unitsBetween}{" "}
          {unit.split("").slice(0, unitsBetween > 1 ? undefined : -1)}
        </Text>
        <Text
          sx={{
            fontSize: 12,
            color: backgroundColor,
            filter: "brightness(50%)",
          }}
        >
          {formatDate(lastUpdatedAt).toUpperCase()}
        </Text>
      </Flex>
      <Flex sx={{ position: "relative" }}>
        <Box
          sx={{
            height: "0.5rem",
            width: "0.5rem",
            borderRadius: "50%",
            backgroundColor: "black",
            position: "absolute",
            left: 0,
          }}
        ></Box>
        <Box
          sx={{
            height: "0.25rem",
            marginTop: "1px",
            borderBottom: "2px solid black",
            width: "100%",
          }}
        ></Box>
        {new Array(unitsBetween).fill(0).map((_, idx) => {
          return (
            <Box
              sx={{
                height: "0.5rem",
                width: "0.5rem",
                borderRadius: "50%",
                backgroundColor: "black",
                position: "absolute",
                left: `${((idx + 1) / unitsBetween) * 100}%`,
              }}
            ></Box>
          )
        })}
      </Flex>{" "}
    </Flex>
  )
}

import React from "react"
import { Flex, Image } from "rebass"
import emptyHeart from "../../images/empty-heart.png"
import filledHeart from "../../images/filled-heart.png"

interface IRatingHeartsProps {
  rating: number
}

export const RatingHearts: React.FC<IRatingHeartsProps> = ({ rating }) => {
  return (
    <Flex sx={{ marginY: 15 }}>
      {new Array(5).fill(0).map((_, idx) => (
        <Image
          src={idx < rating ? filledHeart : emptyHeart}
          sx={{ width: 20 }}
        />
      ))}
    </Flex>
  )
}

import React from "react"
import { Flex, Image } from "rebass"
import CloseIcon from "../images/close.svg"

type CloseButtonProps = {
  close: () => void
  backgroundColor: string
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  close,
  backgroundColor,
}) => {
  return (
    <Flex
      onClick={() => close()}
      sx={{
        top: ["2px", "1rem"],
        right: ["2px", "1rem"],
        position: "absolute",
        flexShrink: 0,
        padding: "1rem",
        height: "fit-content",
        borderRadius: "50%",
        cursor: "pointer",
        backgroundColor,
        ":hover": {
          filter: "brightness(95%)",
        },
        transition: "filter 0.3s",
      }}
    >
      <Image sx={{ height: "1rem", width: "1rem" }} src={CloseIcon} />
    </Flex>
  )
}

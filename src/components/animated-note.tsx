import React, { useEffect, useState } from "react"
import { Flex, SxStyleProp } from "rebass"
import { Text } from "./text"
import "./animated-note.css"

interface IAnimatedNoteProps {
  sx?: SxStyleProp
}

export const AnimatedNote: React.FC<IAnimatedNoteProps> = ({ sx }) => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200)
  }, [])
  return isVisible ? (
    <Flex sx={{ ...sx, alignItems: "center" }}>
      <svg
        width="42"
        height="25"
        viewBox="0 0 42 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="animated-loop"
          d="M1.04391 24.0242C1.04391 24.0242 0.709101 19.021 1.52655 15.9833C2.05651 14.0139 2.39925 12.8576 3.53085 11.1608C4.43044 9.81194 5.06452 9.10577 6.3372 8.1013C7.45013 7.22292 8.77836 6.64958 10.0883 6.10724C10.0883 6.10724 13.4515 5.12589 14.3943 4.95347C15.7889 4.69839 16.6191 4.78437 18.0247 4.96964C19.294 5.13693 20.0445 5.22483 21.2049 5.76576C22.4899 6.36481 23.2104 6.85263 24.0996 7.95697C24.8949 8.94473 25.2993 9.62252 25.5388 10.8678C25.7617 12.0263 25.7786 12.781 25.3578 13.8832C25.0115 14.7905 24.7065 15.3395 23.9245 15.9155C23.0234 16.5791 22.2574 16.8582 21.1564 16.6572C20.2914 16.4993 19.7758 16.2015 19.2065 15.5314C18.482 14.6784 18.4026 13.8807 18.4648 12.7633C18.5242 11.6953 18.661 11.2478 19.1182 10.2807C19.5691 9.32676 20.1296 8.69185 20.7767 7.8584C21.3915 7.06649 21.8407 6.70586 22.6 6.05124C23.7024 5.10087 24.3611 4.58365 25.6536 3.91444C26.8733 3.28293 27.6443 3.11263 28.9544 2.70034C30.1405 2.32707 30.8177 2.15254 32.0301 1.87622C33.49 1.54349 34.3137 1.34713 35.8033 1.19484C36.9438 1.07823 37.5908 1.11769 38.7362 1.06826C39.8816 1.01883 41.6691 0.941683 41.6691 0.941683"
          stroke="white"
        />
      </svg>
      <Text
        className="typewriter"
        type="note"
        sx={{ paddingBottom: 25, paddingLeft: 10 }}
      >
        this doesn't actually do anything
        <br />i just think it looks cool (scroll to see more)
      </Text>
    </Flex>
  ) : null
}

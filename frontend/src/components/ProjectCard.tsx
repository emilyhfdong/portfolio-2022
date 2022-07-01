import { DateTime } from "luxon"
import React, { useRef, useState } from "react"
import { Flex, Text } from "rebass"
import { useDimensions } from "../hooks"
import { Project } from "../query"
import { ProjectDetail } from "./ProjectDetail"

type ProjectCardProps = {
  project: Project
}

export const PROJECT_CARD_EXPAND_DURATION_S = 0.5

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const ref = useRef<HTMLElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  const { x, y, width } = useDimensions(ref)

  return (
    <>
      <Flex
        ref={ref}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        sx={{
          height: width,
          width: "100%",
          backgroundColor: project.backgroundColor,
          justifyContent: "center",
          alignItems: "center",
          fontSize: 35,
          borderRadius: "1rem",
          cursor: "pointer",
          ":hover": {
            fontSize: [35, 40],
            transform: ["none", "scale(1.05)"],
          },
          transition: "transform 0.3s, font-size 0.3s",
          position: "relative",
        }}
      >
        <Text
          sx={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            fontSize: 10,
            color: project.backgroundColor,
            filter: "brightness(70%)",
            opacity: isHovering ? 1 : 0,
            transition: "opacity 0.3s",
            display: ["none", "flex"],
          }}
        >
          {project.name.toUpperCase()}
        </Text>
        <Text
          sx={{
            position: "absolute",
            bottom: "1rem",
            right: "1rem",
            fontSize: 10,
            color: project.backgroundColor,
            filter: "brightness(70%)",
            opacity: isHovering ? 1 : 0,
            transition: "opacity 0.3s",
            display: ["none", "flex"],
          }}
        >
          {DateTime.fromISO(project.dateCreated)
            .toFormat("MMM yyyy")
            .toUpperCase()}
        </Text>
        {project.emoji}
      </Flex>
      <Flex
        sx={{
          clipPath: isOpen
            ? `circle(200vh at ${x + width / 2}px ${y + width / 2}px)`
            : `circle(0px at ${x + width / 2}px ${y + width / 2}px)`,
          position: "fixed",
          width: "100vw",
          height: "100vh",
          backgroundColor: project.backgroundColor,
          left: 0,
          top: 0,
          transition: `clip-path ${PROJECT_CARD_EXPAND_DURATION_S}s`,
          overflow: "scroll",
          zIndex: 1,
        }}
      >
        {isOpen && (
          <ProjectDetail close={() => setIsOpen(false)} project={project} />
        )}
      </Flex>
    </>
  )
}

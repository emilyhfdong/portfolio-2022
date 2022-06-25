import React, { useRef, useState } from "react"
import { Flex } from "rebass"
import { useDimensions } from "../hooks"
import { Project } from "../types"
import { ProjectDetail } from "./ProjectDetail"

type ProjectCardProps = {
  project: Project
}

export const PROJECT_CARD_EXPAND_DURATION_S = 0.4

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const ref = useRef<HTMLElement>(null)

  const [isOpen, setIsOpen] = useState(false)

  const { x, y, width, height } = useDimensions(ref)

  return (
    <>
      <Flex
        ref={ref}
        onClick={() => setIsOpen(!isOpen)}
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
            transform: "scale(1.05)",
          },
          transition: "transform 0.3s",
        }}
      >
        {project.emoji}
      </Flex>
      <Flex
        onClick={() => setIsOpen(false)}
        sx={{
          clipPath: isOpen
            ? `circle(200vh at ${x + width / 2}px ${y + height / 2}px)`
            : `circle(0px at ${x + width / 2}px ${y + height / 2}px)`,
          position: "fixed",
          width: "100vw",
          height: "100vh",
          backgroundColor: project.backgroundColor,
          left: 0,
          top: 0,
          transition: `all ${PROJECT_CARD_EXPAND_DURATION_S}s`,
        }}
      >
        <ProjectDetail project={project} />
      </Flex>
    </>
  )
}

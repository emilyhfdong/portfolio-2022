import React, { useState } from "react"
import { Flex } from "rebass"
import { theme } from "../../theme/theme"
import { PROJECTS, IProject } from "./data"
import { ProjectSpine } from "./project-spine"
import { ExpandedProject } from "./expanded-project"

export const Projects: React.FC = () => {
  const [projectIdx, setProjectIdx] = useState<number | null>(0)
  return (
    <Flex
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: theme.colors.blue,
        alignItems: "center",
      }}
    >
      <Flex
        sx={{
          borderRight: `2px solid ${theme.colors.white}`,
          overflow: "scroll",
        }}
      >
        {PROJECTS.map((project, idx) => (
          <Project
            onClick={() => setProjectIdx(idx)}
            expanded={idx === projectIdx}
            {...project}
            key={idx}
          />
        ))}
      </Flex>
    </Flex>
  )
}

interface IProjectProps extends IProject {
  expanded: boolean
  onClick: () => void
}

export const Project: React.FC<IProjectProps> = ({
  expanded,
  onClick,
  ...project
}) => {
  return (
    <Flex
      sx={{
        borderLeft: `2px solid ${theme.colors.white}`,
        height: "100vh",
        width: expanded ? "80vw" : "150px",
        transition: "0.15s width",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {expanded ? (
        <ExpandedProject {...project} />
      ) : (
        <ProjectSpine {...project} />
      )}
    </Flex>
  )
}

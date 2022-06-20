import React from "react"
import { Flex, Text } from "rebass"
import { ALL_PROJECTS } from "./data"
import { ContactDetail, ProjectCard } from "./components"

export const App: React.FC = () => (
  <Flex sx={{ height: "100vh", width: "100vw" }}>
    <Flex
      sx={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Text
        sx={{
          fontSize: 80,
          fontWeight: "600",
        }}
      >
        emily dong
      </Text>
      <Text sx={{ fontSize: 16, marginTop: "1rem" }}>
        • full stack developer based in toronto •
      </Text>
      <Flex sx={{ marginTop: "3rem", alignItems: "center" }}>
        <ContactDetail type="github" />
        <ContactDetail type="linkedin" />
        <ContactDetail type="email" />
      </Flex>
    </Flex>
    <Flex sx={{ padding: "2rem", flex: 1, flexWrap: "wrap" }}>
      {ALL_PROJECTS.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </Flex>
  </Flex>
)

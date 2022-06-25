import React from "react"
import { Box, Flex, Text } from "rebass"
import { ContactDetail, ProjectCard, BreakpointHelper } from "./components"
import { useProjects } from "./query"

export const App: React.FC = () => {
  const { data, isLoading } = useProjects()
  if (isLoading) {
    return <div></div>
  }
  return (
    <Flex
      sx={{
        height: "100vh",
        width: "100vw",
        flexDirection: ["column", "column", "column", "row", "row"],
      }}
    >
      {process.env.REACT_APP_ENV !== "dev" && <BreakpointHelper />}
      <Flex
        sx={{
          flex: [0, 0, 0, 1],
          paddingY: ["3rem", "3rem", "3rem", 0],
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Text
          sx={{
            fontSize: [60, 70, 70, 70, 80],
            fontWeight: "600",
          }}
        >
          emily dong
        </Text>
        <Text sx={{ fontSize: 16, marginTop: "1rem" }}>
          • full stack dev building silly little apps •
        </Text>
        <Flex sx={{ marginTop: "2rem", alignItems: "center" }}>
          <ContactDetail type="github" />
          <ContactDetail type="linkedin" />
          <ContactDetail type="email" />
        </Flex>
      </Flex>
      <Flex
        sx={{
          flex: 1,
          height: "100%",
          overflow: ["none", "none", "none", "scroll"],
          paddingX: [10, "2rem"],
          paddingY: [0, 0, 0, "2rem"],
        }}
      >
        <Box
          sx={{
            width: "100%",
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: [
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ],
            columnGap: 10,
            rowGap: 10,
          }}
        >
          {data?.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </Box>
      </Flex>
    </Flex>
  )
}

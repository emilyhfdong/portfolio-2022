import React from "react"
import { ProgressBar } from "./components"
import { Landing } from "./pages/landing"
import { Projects } from "./pages/projects"
import { theme } from "./theme/theme"

export const App: React.FC = () => {
  return (
    <>
      {/* <ProgressBar color={theme.colors.white} totalSteps={4} currentStep={1} /> */}
      <Landing />
      <Projects />
    </>
  )
}

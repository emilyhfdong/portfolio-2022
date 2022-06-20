import React from "react"
import { Image, Link, Text } from "rebass"

import Github from "../images/github.svg"
import LinkedIn from "../images/linkedin.svg"
import Email from "../images/email.png"

type ContactDetailProps = {
  type: "github" | "linkedin" | "email"
}

const contactTypeToDetails: {
  [type in ContactDetailProps["type"]]: { img: string; href: string }
} = {
  email: { img: Email, href: "mailto:emilyhfdong@gmail.com" },
  github: { img: Github, href: "https://github.com/emilyhfdong" },
  linkedin: {
    img: LinkedIn,
    href: "https://www.linkedin.com/in/emily-dong-b13515134/",
  },
}

export const ContactDetail: React.FC<ContactDetailProps> = ({ type }) => {
  const { img, href } = contactTypeToDetails[type]
  return (
    <Link
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        ":hover": { transform: "scale(1.05)" },
        transition: "all 0.3s",
        color: "black",
        textDecoration: "none",
      }}
      href={href}
      target="_blank"
    >
      <Image sx={{ height: "1rem" }} src={img} />
      <Text sx={{ fontSize: 14, marginRight: "1rem", marginLeft: "0.25rem" }}>
        {type}
      </Text>
    </Link>
  )
}

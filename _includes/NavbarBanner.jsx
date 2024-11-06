import React from "react"
import { Container, ContainerFluid } from "@layouts/Container"
import styles from "@includes/scss/Navbar.module.scss"
import { Paragraph } from "./Texts"
import Link from "next/link"

const NavbarBanner = () => {
  return (
    <ContainerFluid className={styles.bannerBackground}>
      <Container className="h-8 w-full flex items-center justify-center gap-1">
        <Paragraph dark bold secondary>
          Meet us at Kubecon NA 2024, Kiosk: #16A
        </Paragraph>
        <Link href="https://litmuschaos.io/blog/litmuschaos-is-joining-kubecon-cloudnativecon-north-america-2024-3blg">
          <a
            className="text-white text-sm font-semibold underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </Link>
      </Container>
    </ContainerFluid>
  )
}

export default NavbarBanner

import React from "react"
import { ContainerFluid, Container } from "@layouts/Container"
import styles from "@includes/scss/UpcomingEvent.module.scss"
import { Paragraph } from "@includes/Texts"
import Link from "next/link"
import { TextLink } from "@includes/CTA"

const UpcomingEvent = () => {
  return (
    <ContainerFluid className={styles.upcomingEventContainerFluid}>
      <div className={styles.background} />
      <Container>
        <div className={styles.upcomingEventContainer}>
          <div className={styles.imageContainer}></div>
          <div className={styles.textContainer}>
            <div className={styles.topText}>
              <p className={styles.gradText}>UPCOMING COMMUNITY EVENT</p>
              <h3 className="text-2xl md:text-3xl font-medium mt-2 text-primary">
                Lorem ipsum dolor sit
              </h3>
              <h4 className="text-lg md:text-xl font-medium text-primary mt-1 md:mt-4">
                29 Sep @ 6:30PM
              </h4>
              <Paragraph>Speakers from Harness.io, Accenture</Paragraph>
            </div>
            <TextLink href="#">See Event Details</TextLink>
          </div>
        </div>
      </Container>
    </ContainerFluid>
  )
}

export default UpcomingEvent

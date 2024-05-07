import React from "react"
import { ContainerFluid, Container } from "@layouts/Container"
import styles from "@includes/scss/UpcomingEvent.module.scss"
import { Paragraph } from "@includes/Texts"
import { TextLink } from "@includes/CTA"
import { GetLocalTime } from "@lib/utils"

const UpcomingEvent = () => {
  return (
    <ContainerFluid className={styles.upcomingEventContainerFluid}>
      <div className={styles.background} />
      <Container>
        <div className={styles.upcomingEventContainer}>
          <div className={styles.imageContainer}>
            <img
              src="/landing_images/nextEvent.png"
              alt="LitmusChaos"
              className="w-full h-72 object-cover object-center"
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.topText}>
              <p className={styles.gradText}>UPCOMING COMMUNITY EVENT</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mt-2 text-primary">
                LitmusChaosCon
              </h3>
              <h4 className="text-base sm:text-lg md:text-xl font-medium text-primary mt-1 md:mt-4">
                {GetLocalTime("12 Sep 2024 00:00:00 +0530").dateString}
              </h4>
              <Paragraph>
                LitmusChaos Con is an event surrounding all things LitmusChaos
                and Chaos Engineering. It is a platform for SREs, QA Engineers,
                Developers, Performance Engineers and Students to exchange their
                ideas, experience, contribution stories and usage of
                LitmusChaos.
              </Paragraph>
            </div>
            <TextLink
              external
              href="https://community.cncf.io/events/details/cncf-virtual-project-events-2024-hosted-by-cncf-presents-litmuschaoscon-virtual/"
            >
              See Event Details
            </TextLink>
          </div>
        </div>
      </Container>
    </ContainerFluid>
  )
}

export default UpcomingEvent

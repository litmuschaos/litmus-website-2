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
              className="w-full h-auto object-cover object-center"
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.topText}>
              <p className={styles.gradText}>UPCOMING COMMUNITY EVENT</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mt-2 text-primary">
                KubeCon NA 2024
              </h3>
              <h4 className="text-base sm:text-lg md:text-xl font-medium text-primary mt-1 md:mt-4 mb-2">
                {GetLocalTime("13 Nov 2024 00:00:00 +0530").dateString}
                {" - "}
                {GetLocalTime("15 Nov 2024 00:00:00 +0530").dateString}
              </h4>
              <Paragraph>
                Meet LitmusChaos at KubeCon North America 2024.
                <div className="text-sm my-1">
                  <span className="font-semibold">Location:</span> Level 1 |
                  Halls A-C + 1-5 | Project Pavilion (Hall 1)
                </div>
                <div className="text-sm mb-1">
                  <span className="font-semibold">Kiosk:</span> #16A
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Shift:</span> Half-shift AM
                  schedule
                </div>
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

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
              src="/landing_images/nextEvent.jpeg"
              alt="LitmusChaos"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.topText}>
              <p className={styles.gradText}>UPCOMING COMMUNITY EVENT</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mt-2 text-primary">
                Chaos Engineering Meetup
              </h3>
              <h4 className="text-base sm:text-lg md:text-xl font-medium text-primary mt-1 md:mt-4">
                {GetLocalTime("26 Nov 2022 09:30:00 +0530").dateString} @{" "}
                {GetLocalTime("26 Nov 2022 09:30:00 +0530").time}
              </h4>
              <Paragraph>Speakers from Harness.io</Paragraph>
            </div>
            <TextLink
              external
              href="https://www.meetup.com/chaos-engineering-meetup-group/events/289083048/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link"
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

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
                KubeCon EU
              </h3>
              {/* <h4 className="text-base sm:text-lg md:text-xl font-medium text-primary mt-1 md:mt-4">
                {GetLocalTime("18 Apr 2023 :30:00 +0530").dateString} @{" "}
                {GetLocalTime("18 Apr 2023 16:30:00 +0530").time}
              </h4> */}
              <h4 className="text-base sm:text-lg md:text-xl font-medium text-primary mt-1 md:mt-4">
                Apr 18<sup>th</sup> - Apr 21<sup>st</sup>, 2023
              </h4>
            </div>
            <TextLink
              external
              href="https://kccnceu2023.sched.com/event/1JWQB/litmuschaos-project-meeting?iframe=no&w=&sidebar=yes&bg=no"
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

import React from "react"
import { ContainerFluid, Container } from "@layouts/Container"
import styles from "@includes/scss/UpcomingEvent.module.scss"
import { Paragraph } from "@includes/Texts"
import { TextLink } from "@includes/CTA"

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
                KubeCon North America
              </h3>
              {/* <h4 className="text-base sm:text-lg md:text-xl font-medium text-primary mt-1 md:mt-4">
                {GetLocalTime("18 Apr 2023 :30:00 +0530").dateString} @{" "}
                {GetLocalTime("18 Apr 2023 16:30:00 +0530").time}
              </h4> */}
              <h4 className="text-base sm:text-lg md:text-xl font-medium text-primary mt-1 md:mt-4">
                Nov 6<sup>th</sup> - 9<sup>th</sup>, 2023
              </h4>
              <Paragraph>
                <span className="mt-3 block font-semibold">
                  Project Working Session
                </span>{" "}
                6th November (10:30 AM- 12:30 PM CST)
                <br />
                <span className="font-medium">Venue:</span> Hilton Garden Inn
                McCormick Place - level 3 123 E. Cermak, Suite 300 Chicago, IL
                60616
                <br />
                Connected to McCormick Place by skybridge. The skybridge at
                McCormick Place is on level 3.
                <br />
                <span className="font-medium">Project Booth Number:</span> F20
              </Paragraph>
            </div>
            <TextLink
              external
              href="https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/program/project-engagement/"
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

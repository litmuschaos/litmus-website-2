import React from "react"
import { Container } from "@layouts/Container"
import styles from "@includes/scss/Support.module.scss"
import { Paragraph, SubHeading } from "@includes/Texts"
import { RegularButton } from "@includes/CTA"

const HCE = () => {
  const HCEData = [
    {
      title: "CI/CD Pipeline Integrated",
      description:
        "Systems' reliability, and protecting your business from the costs of downtime, is a team sport. Chaos isn’t only for SRE… Harness engages all teams spanning developers, DevOps, SRE, and any one else involved in your SDLC to create reliable systems. Leverage the chaos integration with Harness CD and CV or the robust API for your own pipeline tooling.",
      image1: "f1",
      image2: null
    },
    {
      title: "Integrations with Observability Systems",
      description:
        "With included integrations to leading observability systems such as Dynatrace and Prometheus, Harness CE ensures that all involved in your SDLC can see results of your chaos experiments and make reliability improvements accordingly. Harness CE builds in steady statement measurement to enable users to validate the impact to the targeted system.",
      image1: "f2",
      image2: "f2b"
    },
    {
      title: "GameDay Experience",
      description:
        "Harness CE enables you to run a GameDay with your team to proactively address points of failure.  Validate post-mortem actions from an outage, test your incident management process to train new team members, and run a repeatable IT disaster recovery exercise. Prepare, execute, observe and learn!",
      image1: "f3",
      image2: null
    },
    {
      title: "Largest Chaos Experiment Library",
      description:
        "The largest and most diverse set of chaos experiments available today, spanning pod, node, network, stress, cloud services, and application chaos testing. Users can also create their own experiments and can contribute them back to the public ChaosHub catalog.",
      image1: "f4",
      image2: "f4b"
    }
  ]
  return (
    <Container className="py-12 md:py-20">
      <SubHeading className="text-center md:text-left">
        Harness Chaos Engineering
      </SubHeading>
      <Paragraph className="md:max-w-3xl mt-4 text-center md:text-left text-hint">
        Whether you want to explore advanced chaos engineering for your target
        system or find a partner to help you build a custom solution, we can
        help.
      </Paragraph>
      <div className={styles.hceContainer}>
        <div className={styles.leftCont}>
          <img
            src="/hce_logo.svg"
            alt="Harness Chaos Engineering"
            width={322}
            height={59}
          />
          <Paragraph className="mt-6 text-center md:text-left">
            Improve application resiliency and reduce costly downtime.
          </Paragraph>
          <Paragraph className="mt-2 text-center md:text-left">
            Harness enables enterprises to securely scale chaos engineering
            across their entire organization with the support from the creators
            of Litmus.
          </Paragraph>
          <div className="mt-8 flex justify-center items-center md:justify-start">
            <RegularButton
              external
              href="https://harness.io/products/chaos-engineering"
              className="inline-block"
            >
              Get Started
            </RegularButton>
          </div>
        </div>
        <div className={styles.rightCont}>
          <Paragraph hint>Features</Paragraph>
          <div className={styles.featuresCont}>
            {HCEData.map(feature => (
              <div key={feature.title}>
                <img
                  src={`/support/${feature.image1}.svg`}
                  alt={feature.title}
                  height={48}
                  width={48}
                />
                <p className="text-lg md:text-xl font-medium leading-tight">
                  {feature.title}
                </p>
                {feature.description && (
                  <p className="text-xs md:text-sm text-hint mt-2">
                    {feature.description}
                  </p>
                )}
                {feature.image2 && (
                  <img
                    src={`/support/${feature.image2}.svg`}
                    alt="Feature"
                    className="h-12 w-auto mt-4"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default HCE

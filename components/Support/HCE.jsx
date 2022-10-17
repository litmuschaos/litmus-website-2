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
        "Systems’ reliability, and protecting your business from the costs of downtime, is a team sport. Chaos isn’t only for SRE, Harness engages all teams spanning dev, DevOps, SRE, and any one else involved in your SDLC to create reliable systems. ",
      image1: "f1",
      image2: null
    },
    {
      title: "Integrations with Monitoring systems",
      description: null,
      image1: "f2",
      image2: "f2b"
    },
    {
      title: "Game Days",
      description:
        "Support for on-premises, air-gapped installations, means businesses can use Harness CE without any risk of exposing where your vulnerabilities may be to any 3rd parties.",
      image1: "f3",
      image2: null
    },
    {
      title: "Wide variety of chaos experiments",
      description:
        "Experiments to to orchestrate and analyze chaos in their environments.",
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
            <RegularButton href="#" className="inline-block">
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

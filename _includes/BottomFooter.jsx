const { Container } = require("@layouts/Container")
const { ContainerFluid } = require("@layouts/Container")
const { RegularButton } = require("./CTA")
const { Paragraph } = require("./Texts")
const { BodyHead } = require("./Texts")
import { CNCFLogo, CnSVG, LitmusLogoDark } from "@components/SVG/FooterSVG"
import { GithubButton } from "@components/SVG/NavbarSVG"
import styles from "@includes/scss/Footer.module.scss"
import Link from "next/link"
import { FooterData } from "./Footer.data"

const PreFooter = props => {
  return (
    <ContainerFluid className={`${props.attached ? "" : "bg-[#FAFBFC]"}`}>
      <Container className="flex flex-col gap-8 items-center md:flex-row py-6 md:py-12 lg:py-20">
        <div className="w-full md:w-1/2">
          <BodyHead>Chaos Engineering made easy</BodyHead>
          <Paragraph hint className="mt-4">
            Litmus is highly extensible and integrates with other tools to
            enable the creation of custom experiments. Kubernetes developers &
            SREs use Litmus to manage chaos in a declarative manner and find
            weaknesses in their applications and infrastructure.
          </Paragraph>
          <RegularButton
            href="https://github.com/litmuschaos/litmus"
            external
            className="mt-4 w-full text-center sm:w-auto"
          >
            <span className="flex items-center">
              <GithubButton />
              Get started with Litmus
            </span>
          </RegularButton>
        </div>
        <div className={`w-full md:w-1/2 ${styles.cncfLogoCont}`}>
          <div className={styles.cncfLogo}>
            <CNCFLogo />
          </div>
          <Paragraph hint>
            We are a Cloud Native Computing Foundation sandbox project.
          </Paragraph>
        </div>
      </Container>
    </ContainerFluid>
  )
}

const BottomFooter = props => {
  return (
    <>
      {props.noPreFooter ? "" : <PreFooter attached />}
      <ContainerFluid className={styles.footerFluidCont}>
        <Container className={styles.footerCont}>
          <div className={styles.companyDetCont}>
            <Link href="/">
              <a>
                <LitmusLogoDark />
              </a>
            </Link>
            <Paragraph dark secondary className="mb-4">
              Copyright © 2020 LitmusChaos Authors. All rights reserved.
            </Paragraph>
            <Paragraph dark secondary>
              The Linux Foundation has registered trademarks and uses
              trademarks. For a list of trademarks of The Linux Foundation,
              please see our{" "}
              <Link href="https://www.linuxfoundation.org/trademark-usage/">
                <a
                  className="text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trademark Usage page
                </a>
              </Link>
              .
            </Paragraph>
          </div>
          <div className={styles.linkContainer}>
            {FooterData.map(row => (
              <div key={row.heading}>
                <h2>{row.heading}</h2>
                <ul
                  className={
                    row.heading != "Join the Community"
                      ? ""
                      : "flex flex-wrap gap-x-3 sm:max-w-xs md:max-w-sm"
                  }
                >
                  {row.links.map(link => (
                    <li key={link.text}>
                      <Link href={link.linkTo}>
                        <a
                          className="flex gap-2 items-center"
                          target={link.external ? "_blank" : "_self"}
                          rel={link.external ? "noopener noreferrer" : ""}
                        >
                          {link.svg ?? ""}
                          {link.text}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
                {row.heading != "Join the Community" ? (
                  ""
                ) : (
                  <RegularButton
                    href="https://github.com/litmuschaos/litmus"
                    className="w-full md:w-auto text-center mt-4"
                    external
                  >
                    <span className="flex items-center">
                      <GithubButton />
                      Get started with Litmus
                    </span>
                  </RegularButton>
                )}
              </div>
            ))}
          </div>
        </Container>
        <Container className="pb-12 flex justify-center items-center">
          <span className="flex gap-1 items-center md:items-baseline flex-col md:flex-row">
            <Paragraph dark className="font-medium">
              Originally created by
            </Paragraph>
            <Link href="https://www.chaosnative.com/">
              <a rel="noopener noreferrer" target="_blank" className="accent">
                <CnSVG />
              </a>
            </Link>
          </span>
        </Container>
      </ContainerFluid>
    </>
  )
}

export { BottomFooter, PreFooter }

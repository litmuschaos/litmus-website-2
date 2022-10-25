import { GithubButton, SlackSVG } from "@components/SVG/NavbarSVG"
import { OutlinedButton, RegularButton } from "@includes/CTA"
import styles from "@includes/scss/Hero.module.scss"
import { HeroHead, Paragraph } from "@includes/Texts"
import { Container, ContainerFluid } from "@layouts/Container"

const Hero = () => {
  return (
    <ContainerFluid className="bg-[#FAFBFC]">
      <Container className={styles.heroCont}>
        <div className={styles.textCont}>
          <HeroHead hero>
            <span className="block">Open Source</span>
            <span className="block">Chaos Engineering</span>
            <span className="block">platform</span>
          </HeroHead>
          <Paragraph hint className="mt-6 text-center lg:text-left">
            Litmus is an open source Chaos Engineering platform that enables
            teams to identify weaknesses & potential outages in infrastructures
            by inducing chaos tests in a controlled way.
          </Paragraph>
          <Paragraph hint className="mt-4 text-center lg:text-left">
            Developers & SREs can simply execute Chaos Engineering with Litmus
            as it is easy to use, based on modern chaos engineering practices &
            community collaborated. Litmus is 100% open source & CNCF-hosted.
          </Paragraph>
          <div className="mt-4 flex gap-4 justify-center lg:justify-start">
            <RegularButton
              href="https://github.com/litmuschaos/litmus"
              external
            >
              <span className="flex items-center">
                <GithubButton />
                Get Started
              </span>
            </RegularButton>
            <OutlinedButton
              external
              href="https://kubernetes.slack.com/?redir=%2Farchives%2FCNXNB0ZTN"
            >
              <span className="flex items-center">
                <SlackSVG />
                Join Slack
              </span>
            </OutlinedButton>
          </div>
        </div>
        <div className={styles.heroImg}>
          <img
            src="/landing_images/hero/hero_img.svg"
            alt="LitmusChaos"
            height={587}
            width={596}
          />
        </div>
      </Container>
    </ContainerFluid>
  )
}
export default Hero

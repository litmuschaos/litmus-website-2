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
            <span className="block">Enterprise Editions</span>
            <span className="block">& Trainings</span>
          </HeroHead>
          <Paragraph hint className="mt-6 text-center lg:text-left">
            LitmusChaos was originally created by ChaosNative (Acquired by
            Harness) and is a CNCF incubated project from 2022 January onwards.
          </Paragraph>
          <Paragraph hint className="mt-4 text-center lg:text-left">
            The listed partners offer enterprise distributions, training, and
            commercial support for LitmusChaos.
          </Paragraph>
        </div>
        <div className={styles.heroImg}>
          <img
            src="/landing_images/enterprise_back.svg"
            alt="LitmusChaos"
            height={280}
            width={578}
          />
        </div>
      </Container>
    </ContainerFluid>
  )
}
export default Hero

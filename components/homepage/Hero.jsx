import { GithubButton, SlackSVG } from "@components/SVG/NavbarSVG"
import { OutlinedButton, RegularButton } from "@includes/CTA"
import styles from "@includes/scss/Hero.module.scss"
import { HeroHead, Paragraph } from "@includes/Texts"
import { Container, ContainerFluid } from "@layouts/Container"

const Hero = () => {
  return (
    <ContainerFluid className="bg-[#ffffff] relative">
      {/* Sticky Content Container */}
      <div className="md:sticky md:top-[64px] z-20 bg-white">
        <Container className="flex flex-col items-center justify-center text-center py-8 md:pt-16">
          <div className="max-w-4xl mx-auto">
            <div className="content-container">
          <HeroHead hero>


            <span className="block">Open Source</span>
            <span className="block">Chaos Engineering platform</span>

          </HeroHead>
          <Paragraph hint className="mt-6 text-center">
          Litmus is a CNCF-hosted, open-source Chaos Engineering platform that helps teams indentify infrastructure weaknesses through safe, controlled chaos tests, simple for developers and SREs, built on modern practices, and powered by the community.
          </Paragraph>
      
          <div className="mt-8 flex gap-4 justify-center">
            <RegularButton
              href="https://github.com/litmuschaos/litmus"
              external
            >
              <span className="flex items-center">
             Try Litmus
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
          </div>
        </Container>
      </div>
      
      {/* Hero Image Container - will scroll under the sticky content */}
      <Container className="relative -mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="mt-12 flex justify-center image-container">
            <div className={styles.heroImageContainer}>
              <img
                src="/landing_images/hero/hero_litmus_ui.avif"
                alt="Litmus Chaos Engineering Platform Interface"
                className="w-full h-auto object-cover"
              />
              {/* White fading overlay */}
              <div className={styles.whiteFadeOverlay}></div>
            </div>
          </div>
        </div>
      </Container>
      
    </ContainerFluid>
  )
}
export default Hero

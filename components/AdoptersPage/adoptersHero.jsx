import { HeroHead, Paragraph } from "@includes/Texts"
import { Container } from "@layouts/Container"

const AdoptersHero = () => {
  return (
    <>
      <Container className="md:py-20 py-16">
        <HeroHead hero className="max-w-4xl">
          LitmusChaos platform is adopted by various end user organisations
        </HeroHead>
        <Paragraph
          hint
          className="max-w-4xl mt-4 md:mt-8 text-center md:text-left"
        >
          Hundreds of the most innovative companies choose LitmusChaos to
          increase resiliency and ensure smooth functioning of their systems.
        </Paragraph>
      </Container>
    </>
  )
}

export default AdoptersHero

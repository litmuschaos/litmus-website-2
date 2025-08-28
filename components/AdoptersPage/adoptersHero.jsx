import { HeroHead, Paragraph, BodyHead } from "@includes/Texts"
import { Container } from "@layouts/Container"
import styles from "@includes/scss/Hero.module.scss"

const AdoptersHero = () => {
  return (
    <>
      <Container className="py-20 md:py-28 lg:pt-20 lg:pb-28">
        <div className="text-center">
          <BodyHead className="mb-4">
          Adopted by Industry Leaders
          </BodyHead>
          <Paragraph className="mb-8 max-w-3xl mx-auto">
            Hundreds of the most innovative companies choose LitmusChaos to
            increase resiliency and ensure smooth functioning of their systems.
          </Paragraph>
          
          
          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">140+</div>
              <div className="text-gray-600">Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">2M+</div>
              <div className="text-gray-600">Chaos Experiments</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default AdoptersHero

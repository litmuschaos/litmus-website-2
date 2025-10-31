import { HeroHead, Paragraph, BodyHead } from "@includes/Texts"
import { Container } from "@layouts/Container"

const AdoptersHero = () => {
  return (
    <>
      <Container className="py-8 md:py-16">
        <div className="text-center">
          <HeroHead className="mb-4 !font-bold">
            Adopted by Industry Leaders
          </HeroHead>
          <Paragraph className="mb-8 max-w-3xl mx-auto">
            Hundreds of the most innovative companies choose LitmusChaos to
            increase resiliency and ensure smooth functioning of their systems.
          </Paragraph>

          {/* Stats section */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16">
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-purple-600 mb-2">
                140+
              </div>
              <div className="text-gray-600 text-sm sm:text-base">
                Organizations
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-purple-600 mb-2">
                50+
              </div>
              <div className="text-gray-600 text-sm sm:text-base">
                Countries
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-purple-600 mb-2">
                2M+
              </div>
              <div className="text-gray-600 text-sm sm:text-base">
                Chaos Experiments
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default AdoptersHero

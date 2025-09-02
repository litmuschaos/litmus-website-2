import { HeroHead, Paragraph } from "@includes/Texts"
import { Container } from "@layouts/Container"


const CommunityHero = () => {
  return (
    <>
      <Container className="py-8 md:py-16">
        <div className="text-center">
          <HeroHead className="mb-4 !font-bold">
            Get Involved with Community!
          </HeroHead>
          <Paragraph className="mb-8 max-w-3xl mx-auto">
            This is the starting point for joining and contributing to the
            LitmusChaos community - improving docs, improving code, discussing
            new features and use cases etc. For all collaboration and
            communication going on in all LitmusChaos projects, please read and
            follow our Code of Conduct.
          </Paragraph>
          
          {/* Stats section */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16">
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-purple-600 mb-2">2.5K+</div>
              <div className="text-gray-600 text-sm sm:text-base">Community Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-purple-600 mb-2">4.8K+</div>
              <div className="text-gray-600 text-sm sm:text-base">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-purple-600 mb-2">250+</div>
              <div className="text-gray-600 text-sm sm:text-base">Contributors</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CommunityHero

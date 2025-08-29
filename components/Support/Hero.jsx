import { HeroHead, Paragraph } from "@includes/Texts"
import { Container, ContainerFluid } from "@layouts/Container"

const Hero = () => {
  return (
    <ContainerFluid className="bg-[#FAFBFC]">
      <Container className="flex justify-between items-center py-8 md:py-16 flex-col lg:flex-row">
        <div className="w-full min-w-0 lg:w-2/5 lg:min-w-[400px]">
          <HeroHead className="text-center md:text-left !font-bold">
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
        <div className="mt-8 flex justify-end items-center lg:mt-0 lg:ml-8">
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

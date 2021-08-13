import { HeroHead, Paragraph } from "@includes/Texts"
import { Container } from "@layouts/Container"
import Link from "next/link"

const Hero = ({ data }) => {
  return (
    <Container>
      <div className="flex pt-20">
        <Link href="/adopters">
          <a>
            <Paragraph hint>End User Adopters &nbsp;</Paragraph>
          </a>
        </Link>
        <Paragraph>&#62; &nbsp;</Paragraph>
        <Paragraph bold>{data.adopter}</Paragraph>
      </div>
      <div className="flex flex-col mx-auto mt-10 md:mt-16 text-center w-5/6">
        <HeroHead className="mb-4">{data.subHeading}</HeroHead>
        <Paragraph hint>{data.paragraph}</Paragraph>
      </div>
    </Container>
  )
}

export default Hero

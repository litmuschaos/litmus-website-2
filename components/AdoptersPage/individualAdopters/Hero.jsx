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
        <Paragraph>{data.adopter}</Paragraph>
      </div>
      <div className="flex flex-col space-y-8 mx-auto pt-20 text-center w-5/6">
        <HeroHead>{data.subHeading}</HeroHead>
        <Paragraph hint>{data.paragraph}</Paragraph>
      </div>
    </Container>
  )
}

export default Hero

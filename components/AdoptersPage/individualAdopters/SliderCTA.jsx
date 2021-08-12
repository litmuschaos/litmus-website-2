import { Adopters } from "@components/AdoptersPage/adopter.data"
import { SubHeading } from "@includes/Texts"
import { Container } from "@layouts/Container"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

const CtaCard = ({ bgcolor, adopter, width, text }) => (
  <Link href={`/adopters/${adopter}`}>
    <a>
      <div className="w-full">
        <div
          className="relative xs:h-300 h-200 border-box rounded-xl"
          style={{ background: bgcolor }}
        >
          <img
            src={`/adoptersPage/${adopter}/pattern-${adopter}.svg`}
            alt="pattern"
          />
          <div className={`absolute top-4 right-6 ${width} h-16`}>
            <Image
              src={`/adoptersPage/${adopter}/logo.svg`}
              layout="fill"
              alt={`${adopter} logo`}
            />
          </div>
          <div className="absolute top-4 right-4">
            <img
              src={`/adoptersPage/adopter-logo/${adopter}.png`}
              alt={adopter}
            />
          </div>
          <div className="absolute w-3/4 bottom-4 left-4">
            <SubHeading dark>{text}</SubHeading>
          </div>
        </div>
      </div>
    </a>
  </Link>
)

const SliderCTA = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          speed: 500
        }
      }
    ]
  }
  return (
    <Container className="pt-20 pb-10">
      <Slider {...settings}>
        {Adopters.map(item => {
          return (
            <CtaCard
              key={item.key}
              adopter={item.link}
              width={item.ctaWidth}
              bgcolor={item.bgColor}
              text={item.subHeading}
            />
          )
        })}
      </Slider>
    </Container>
  )
}

export default SliderCTA

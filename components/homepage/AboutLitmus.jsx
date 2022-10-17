import styles from "@includes/scss/About.module.scss"
import { BodyHead, Paragraph } from "@includes/Texts"
import {
  Container,
  ContainerFluid,
  SkewedContainerFluid,
  SkewedGradient
} from "@layouts/Container"

const AboutData = [
  {
    name: "overview",
    heading: (
      <BodyHead dark className="text-center md:text-left">
        An end to end{" "}
        <span className="block text-accent">Chaos Engineering</span> platform
      </BodyHead>
    ),
    img: "p1",
    desc: "Litmus is an end-to-end chaos engineering platform for cloud native infrastructure and applications. Litmus is designed to orchestrate and analyze chaos in their environments.",
    footerImg: null
  },
  {
    name: "rocket",
    heading: (
      <BodyHead dark className="text-center md:text-left">
        Get Started in minutes
      </BodyHead>
    ),
    img: "p2",
    desc: "A chaos experiment can be scheduled within minutes from scratch with almost no learning curve. The initial start of your chaos engineering journey is straight forward.",
    footerImg: null
  }
]

const Steps = ({ about, index }) => {
  return (
    <div
      className={`${styles.partDiv} ${
        index % 2 != 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
      }`}
    >
      <div className={styles.leftCont}>
        <img
          src={`/landing_images/about_litmus/${about.name}.svg`}
          alt={about.name}
          height={64}
          width={64}
          draggable={false}
          className="mb-4"
        />
        {about.heading}
        <Paragraph hint className="max-w-md mt-4 text-center md:text-left">
          {about.desc}
        </Paragraph>
        {about.footerImg ? (
          <img
            src={`/landing_images/about_litmus/${about.footerImg}.svg`}
            alt={about.name}
            height={170}
            width={378}
            className="mt-6 h-36 w-auto"
          />
        ) : (
          ""
        )}
      </div>
      <img
        src={`/landing_images/about_litmus/${about.img}.svg`}
        alt={about.name}
        draggable={false}
        className={styles.partImg}
      />
    </div>
  )
}

const AboutLitmus = () => {
  const skewBg =
    "radial-gradient(70.56% 155.58% at 56.93% 16.11%, #EB8172 16.67%, #5B44BA 61.41%), radial-gradient(34.96% 33.39% at 56.66% 50%, #F19389 44.79%, rgba(133, 140, 221, 0) 83.19%), radial-gradient(13.35% 23.03% at 6.58% 67.25%, #AFE9FF 0%, #90E0FF 41.45%, rgba(144, 224, 255, 0) 100%), radial-gradient(19.75% 48.55% at 19.59% 56.88%, #B8EBFF 0%, #90E0FF 60.58%, rgba(169, 96, 238, 0) 83.24%), radial-gradient(10.9% 23.5% at 7.65% 84.98%, #A960EE 25.96%, rgba(255, 51, 61, 0) 100%), radial-gradient(27.77% 40.9% at 19.29% 57.22%, rgba(144, 224, 255, 0.1) 50.74%, rgba(169, 96, 238, 0) 100%), radial-gradient(20.43% 35.1% at 45.83% 17.78%, #19C2FF 31.7%, rgba(199, 33, 255, 0.75) 100%), radial-gradient(26.67% 62.22% at 0% 100%, #ECB22E 19.21%, #FB9C40 54.54%), radial-gradient(18.22% 46.29% at 5.34% 39.33%, #FFCB57 41.18%, rgba(183, 120, 225, 0) 71.99%), conic-gradient(from 3.28deg at 22.11% 40.38%, rgba(169, 96, 238, 0) 0deg, #5469D4 178.27deg, rgba(136, 99, 228, 0.383199) 290.36deg, rgba(169, 96, 238, 0) 360deg), radial-gradient(34.48% 62.34% at 21.35% 32.43%, #19C2FF 0%, #858CDD 100%)"

  return (
    <ContainerFluid className="bg-[#16102D]">
      <Container className="grid gap-16 md:pt-36 md:pb-28 pt-16 pb-14">
        {AboutData.map((data, index) => (
          <Steps key={data.name} about={data} index={index + 1} />
        ))}
      </Container>
    </ContainerFluid>
  )
}

export default AboutLitmus

import { TextLink } from "@includes/CTA"
import styles from "@includes/scss/Features.module.scss"
import { BodyHead, Paragraph } from "@includes/Texts"
import { Container, ContainerFluid } from "@layouts/Container"
import { featureUtils } from "./utils/featureUtils"

const FeatureCard = ({ feature, index }) => {
  return (
    <div
      className={styles.featureCard}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="600"
    >
      <div className={styles.featureMascot}>
        <img
          src={feature.mascot}
          alt={`${feature.title} mascot`}
          className="w-full h-full object-contain"
        />
      </div>
      <div className={styles.featureContent}>
        <h3 className="text-xl md:text-2xl font-medium mt-4 mb-2">
          {feature.title}
        </h3>
        <Paragraph hint>{feature.content}</Paragraph>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <ContainerFluid className="bg-white">
      <Container className="md:py-16 py-8">
        <div className="text-center">
          <BodyHead
            className="text-center"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            Packed with features to{" "}
            <span className="text-[#5b44ba] md:block">achieve resilience</span>
          </BodyHead>
          <Paragraph
            className="md:max-w-2xl mt-4 text-center mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            Over time, with the monthly cadence releases and community
            engagement, we have added a lot of features and made LitmusChaos
            much easier for the end-users. With the launch of Litmus 2.0, a new
            way of chaos engineering can be performed by the users.
          </Paragraph>
        </div>
        <div className={styles.featureCardCont}>
          {featureUtils.map((feature, index) => {
            return (
              <FeatureCard
                key={feature.title + index}
                feature={feature}
                index={index}
              />
            )
          })}
        </div>

        <div
          className={styles.moreFeatureCard}
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
        >
          <div className={styles.content}>
            <h3 className="text-xl md:text-2xl text-success font-medium mb-2">
              And many more features
            </h3>
            <TextLink
              href="https://docs.litmuschaos.io/docs/introduction/features/"
              external
            >
              View more features
            </TextLink>
          </div>
          <div className={styles.mascot}></div>
        </div>
      </Container>
    </ContainerFluid>
  )
}

export default Features

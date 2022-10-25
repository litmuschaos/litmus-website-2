import { TextLink } from "@includes/CTA"
import styles from "@includes/scss/Features.module.scss"
import { BodyHead, Paragraph } from "@includes/Texts"
import { Container, ContainerFluid } from "@layouts/Container"
import { featureUtils } from "./utils/featureUtils"

const FeatureCard = ({ feature }) => {
  return (
    <div className={styles.featureCard}>
      {feature.svg ?? ""}
      <h3 className="text-xl md:text-2xl text-primary font-medium mt-4 mb-2">
        {feature.title}
      </h3>
      <Paragraph hint>{feature.content}</Paragraph>
    </div>
  )
}

const Features = () => {
  return (
    <ContainerFluid className="bg-[#FAFBFC]">
      <Container className="md:pt-36 md:pb-28 pt-16 pb-14">
        <BodyHead className="text-center md:text-left">
          Loaded with features to{" "}
          <span className="text-accent md:block">achieve resilience</span>
        </BodyHead>
        <Paragraph className="md:max-w-3xl mt-4 text-center md:text-left">
          Over time, with the monthly cadence releases and community engagement,
          we have added a lot of features and made LitmusChaos much easier for
          the end-users. With the launch of Litmus 2.0, a new way of chaos
          engineering can be performed by the users.
        </Paragraph>
        <div className={styles.featureCardCont}>
          {featureUtils.map((feature, index) => {
            return <FeatureCard key={feature.title + index} feature={feature} />
          })}
          <div className={`${styles.featureCard} ${styles.cardBackImg}`}>
            <h3 className="text-xl md:text-2xl text-success font-medium mt-4 mb-2">
              And many more features
            </h3>
            <TextLink
              href="https://docs.litmuschaos.io/docs/introduction/features/"
              external
            >
              View more features
            </TextLink>
          </div>
        </div>
      </Container>
    </ContainerFluid>
  )
}

export default Features

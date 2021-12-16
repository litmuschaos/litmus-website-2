import { TextLink } from "@includes/CTA"
import styles from "@includes/scss/Features.module.scss"
import { BodyHead, Paragraph } from "@includes/Texts"
import { SkewedContainerFluid } from "@layouts/Container"
import { featureUtils } from "./utils/featureUtils"

const FeatureCard = ({ feature }) => {
  return (
    <div className={styles.featureCard} style={{ background: "#231a47" }}>
      {feature.svg ?? ""}
      <h3 className="text-xl md:text-2xl text-white font-medium mt-4 mb-2">
        {feature.title}
      </h3>
      <Paragraph dark>{feature.content}</Paragraph>
    </div>
  )
}

const Features = () => {
  return (
    <SkewedContainerFluid color="#1C0732">
      <BodyHead dark>
        <span className="accent">LitmusChaos</span> Features
      </BodyHead>
      <div className={styles.featureCardCont}>
        {featureUtils.map((feature, index) => {
          return <FeatureCard key={feature.title + index} feature={feature} />
        })}
        <div className={`${styles.featureCard} ${styles.cardBackImg}`}>
          <h3 className="text-xl md:text-2xl text-success font-medium mt-4 mb-2">
            And many more features
          </h3>
          <TextLink
            href="https://docs.litmuschaos.io/docs/introduction/features"
            external
            dark
          >
            View more features
          </TextLink>
        </div>
      </div>
    </SkewedContainerFluid>
  )
}

export default Features

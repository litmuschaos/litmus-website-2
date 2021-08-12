import { TextLink } from "@includes/CTA"
import styles from "@includes/scss/Adopters.module.scss"
import { Paragraph } from "@includes/Texts"
import { SkewedContainerFluid, SkewedGradient } from "@layouts/Container"
import { bgadopter } from "@layouts/gradColor"
import { Adopters } from "./adopter.data"

const AdoptersList = () => {
  return (
    <>
      <SkewedGradient color={bgadopter} />
      <SkewedContainerFluid color="#F7F8FA">
        <div className={styles.adopterListCardCont}>
          {Adopters.map(adopter => {
            return (
              <div
                key={adopter.key}
                className={`${styles.adopterListCard} ${
                  adopter.key % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
                } flex-col`}
              >
                <div
                  style={{ background: adopter.bgColor }}
                  className={styles.adopterLogoCont}
                >
                  <img
                    style={{ width: adopter.width + "px", height: "auto" }}
                    src={`/adoptersPage/${adopter.link}/logo.svg`}
                    alt={`${adopter.link} logo`}
                    className={styles.adoperLogoImg}
                  />
                </div>
                <div className={styles.adopterTextCont}>
                  <h2 className="text-primary text-lg md:text-2xl font-medium">
                    {adopter.subHeading}
                  </h2>
                  <Paragraph hint className="mt-4">
                    {adopter.paragraph}
                  </Paragraph>
                  <TextLink
                    href={`/adopters/${adopter.link}`}
                    className="inline-block mt-2"
                  >
                    Read the case study
                  </TextLink>
                </div>
              </div>
            )
          })}
        </div>
      </SkewedContainerFluid>
    </>
  )
}

export default AdoptersList

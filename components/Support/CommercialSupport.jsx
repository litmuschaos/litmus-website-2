import { MoreSVG } from "@components/SVG/FeatureSVG"
import styles from "@includes/scss/Support.module.scss"
import { BodyHead, Paragraph } from "@includes/Texts"
import { Container } from "@layouts/Container"
import Link from "next/link"
import { Supporters } from "./utils"

const CommercialSupport = () => {
  return (
    <Container className={styles.supportCont}>
      <BodyHead>Commercial Support</BodyHead>
      <div className={styles.gridCont}>
        {Supporters.map(support => {
          return (
            <Link href={support.link} key={support.name}>
              <a target="_blank" rel="noopener norefferer">
                <div className={styles.supportCard}>
                  <img src={support.logo} alt={support.name} />
                  <Paragraph hint className="mt-4">
                    {support.desc}
                  </Paragraph>
                </div>
              </a>
            </Link>
          )
        })}
        <Link href="https://github.com/litmuschaos/litmus/blob/master/Commercial%20Support.md">
          <a target="_blank" rel="noopener norefferer">
            <div className={styles.addCard}>
              <h2 className="text-lg md:text-xl font-normal">
                Offering support for Litmus?
              </h2>
              <span className="flex items-center gap-2 mt-4">
                <MoreSVG />{" "}
                <p className="text-success text-base md:text-lg font-medium">
                  Add your company
                </p>
              </span>
            </div>
          </a>
        </Link>
      </div>
    </Container>
  )
}

export default CommercialSupport

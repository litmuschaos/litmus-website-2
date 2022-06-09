import { MoreSVG } from "@components/SVG/FeatureSVG"
import styles from "@includes/scss/Support.module.scss"
import { BodyHead, Paragraph } from "@includes/Texts"
import { Container } from "@layouts/Container"
import Link from "next/link"
import { CourseData } from "./utils"

const Courses = () => {
  return (
    <Container className={styles.courseCont}>
      <BodyHead>Courses</BodyHead>
      <div className={styles.gridCont}>
        {CourseData.map(support => {
          return (
            <Link href={support.link} key={support.name}>
              <a target="_blank" rel="noopener norefferer">
                <div className={styles.supportCard}>
                  <img
                    height={32}
                    width={255}
                    src={support.logo}
                    alt={support.name}
                  />
                  <Paragraph hint className="mt-4">
                    {support.desc}
                  </Paragraph>
                </div>
              </a>
            </Link>
          )
        })}
        {/* <Link href="https://github.com/litmuschaos/litmus/blob/master/COMMERCIAL_SUPPORT.md">
          <a target="_blank" rel="noopener norefferer">
            <div className={styles.addCard}>
              <h2 className="text-lg md:text-xl font-normal">
                Offering training for Litmus?
              </h2>
              <span className="flex items-center gap-2 mt-4">
                <MoreSVG />{" "}
                <p className="text-success text-base md:text-lg font-medium">
                  Add your company
                </p>
              </span>
            </div>
          </a>
        </Link> */}
      </div>
    </Container>
  )
}

export default Courses

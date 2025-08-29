import { MoreSVG } from "@components/SVG/FeatureSVG"
import styles from "@includes/scss/Support.module.scss"
import { Paragraph, BodyHead } from "@includes/Texts"
import { Container } from "@layouts/Container"
import Link from "next/link"
import { CourseData } from "./utils"

const Courses = () => {
  return (
    <Container className={styles.courseCont}>
      <BodyHead className="text-center">Trainings & Certifications</BodyHead>
      <Paragraph hint className="text-center mt-4 mb-8 max-w-3xl mx-auto">
        Enhance your chaos engineering skills with comprehensive training programs and certifications from our trusted partners.
      </Paragraph>
      <div className={styles.gridCont}>
        {CourseData.map(support => {
          return (
            <Link href={support.link} key={support.name}>
              <a target="_blank" rel="noopener noreferrer">
                <div className={styles.supportCard}>
                  <img
                    src={support.logo}
                    alt={support.name}
                    className="h-8 w-auto"
                  />
                  <Paragraph hint className="mt-4">
                    {support.desc}
                  </Paragraph>
                </div>
              </a>
            </Link>
          )
        })}
        <Link href="https://github.com/litmuschaos/litmus/blob/master/TRAINING_AND_COURSES.md">
          <a target="_blank" rel="noopener noreferrer">
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
        </Link>
      </div>
    </Container>
  )
}

export default Courses

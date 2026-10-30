import styles from "@includes/scss/LitmusLite.module.scss"
import { Container, ContainerFluid } from "@layouts/Container"
import Link from "next/link"
import { links } from "./data"

const ClosingCTA = () => (
  <ContainerFluid className={styles.closing}>
    <Container className={styles.closingInner}>
      <img
        src="/litmus-lite/pip.svg"
        alt="Pip, the litmus-lite mascot"
        className={styles.closingPip}
        width="140"
        height="140"
      />
      <h2 className={styles.closingTitle}>
        Break something on purpose, before production does.
      </h2>
      <p className={styles.closingText}>
        litmus-lite is open source (Apache-2.0). Install it, ask your agent for
        a failure, and see how your service copes. Pip will be waiting.
      </p>
      <div className={styles.ctas}>
        <a
          className={styles.ctaPrimary}
          href={links.quickStart}
          target="_blank"
          rel="noopener noreferrer"
        >
          Quick start
        </a>
        <a
          className={styles.ctaSecondary}
          href={links.releases}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download a release
        </a>
        <a
          className={styles.ctaSecondary}
          href={`${links.repo}/issues`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share feedback
        </a>
      </div>
      <Link href={links.blog}>
        <a className={styles.closingLink}>Read the launch post →</a>
      </Link>
    </Container>
  </ContainerFluid>
)

export default ClosingCTA

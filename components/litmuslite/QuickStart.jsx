import styles from "@includes/scss/LitmusLite.module.scss"
import { BodyHead, Paragraph } from "@includes/Texts"
import { Container, ContainerFluid } from "@layouts/Container"
import { steps } from "./data"

// `dark` continues the dark spotlight band on the homepage; the default is the
// light band used on the litmus-lite page.
const QuickStart = ({ dark }) => (
  <ContainerFluid
    className={dark ? styles.quickDark : styles.quickLight}
    id="quick-start"
  >
    <Container className={dark ? "pb-10 md:pb-16" : "py-10 md:py-20"}>
      {dark ? (
        <h3 className={styles.quickHeadDark}>Quick start in three steps</h3>
      ) : (
        <div className="text-center max-w-3xl mx-auto">
          <BodyHead>Quick start</BodyHead>
          <Paragraph hint className="mt-4 md:mt-6">
            From download to your first verdict in a few minutes. Nothing leaves
            your machine.
          </Paragraph>
        </div>
      )}
      <ol className={styles.steps}>
        {steps.map((step, i) => (
          <li
            key={step.title}
            className={`${styles.step} ${step.quote ? styles.stepPip : ""}`}
          >
            {step.quote && (
              <img
                src="/litmus-lite/pip-head.svg"
                alt=""
                aria-hidden="true"
                className={styles.stepPipImg}
                width="54"
                height="54"
              />
            )}
            <span className={styles.stepNum}>{i + 1}</span>
            <h4 className={styles.stepTitle}>{step.title}</h4>
            <p className={styles.stepDesc}>{step.desc}</p>
            {step.code && (
              <pre className={styles.stepCode}>
                <span className={styles.ps}>$ </span>
                {step.code}
              </pre>
            )}
            {step.quote && (
              <blockquote className={styles.stepQuote}>{step.quote}</blockquote>
            )}
            <a
              className={styles.stepLink}
              href={step.link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {step.link.text} →
            </a>
          </li>
        ))}
      </ol>
    </Container>
  </ContainerFluid>
)

export default QuickStart

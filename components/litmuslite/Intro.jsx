import styles from "@includes/scss/LitmusLite.module.scss"
import { Container, ContainerFluid } from "@layouts/Container"
import Link from "next/link"
import { useState } from "react"
import {
  askSteps,
  chips,
  links,
  PROMPT,
  scenarioYaml,
  tabs,
  terminal
} from "./data"

const Check = () => (
  <svg
    className={styles.check}
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="10" fill="#ffb547" fillOpacity="0.18" />
    <path
      d="m6 10.5 2.6 2.6L14 7.5"
      stroke="#ffb547"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const DemoCard = () => {
  const [active, setActive] = useState("ask")
  const current = tabs.find(t => t.id === active)

  return (
    <div className={styles.demo}>
      <div className={styles.demoHeader}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.demoFile}>{current.file}</span>
      </div>
      <div className={styles.tabs} role="tablist" aria-label="litmus-lite demo">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`ll-tab-${tab.id}`}
            aria-selected={active === tab.id}
            aria-controls={`ll-panel-${tab.id}`}
            className={`${styles.tab} ${
              active === tab.id ? styles.tabActive : ""
            }`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className={styles.panel}
        role="tabpanel"
        id={`ll-panel-${active}`}
        aria-labelledby={`ll-tab-${active}`}
      >
        {active === "ask" && (
          <>
            <div className={styles.prompt}>
              <span className={styles.promptLabel}>You</span>
              {PROMPT}
            </div>
            <ul className={styles.askList}>
              {askSteps.map(step => (
                <li key={step}>
                  <Check />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </>
        )}
        {active === "file" && <pre className={styles.code}>{scenarioYaml}</pre>}
        {active === "run" && (
          <pre className={styles.code}>
            {terminal.map((line, i) => (
              <span key={i} className={styles.line}>
                {line.prompt && <span className={styles.ps}>$ </span>}
                {line.comment ? (
                  <span className={styles.comment}># {line.text}</span>
                ) : (
                  line.text
                )}
              </span>
            ))}
          </pre>
        )}
      </div>
    </div>
  )
}

// `page` renders the heading as the page's h1 and drops the "see more" link
// that the homepage spotlight uses to point at the dedicated page.
const Intro = ({ page }) => {
  const Heading = page ? "h1" : "h2"

  return (
    <ContainerFluid className={styles.intro}>
      <div className={styles.glow} aria-hidden="true" />
      <Container className={styles.introInner}>
        <div className={styles.introText}>
          <span className={styles.pill}>
            <span className={styles.pillNew}>New</span>
            Launching litmus-lite
          </span>
          <Heading className={styles.title}>
            Chaos testing for developers.{" "}
            <span className={styles.titleAccent}>Just ask.</span>
          </Heading>
          <p className={styles.lead}>
            litmus-lite injects a failure into your service, judges the run
            against hypotheses you wrote, and writes one HTML report. Ask for it
            in Cursor or run it from a terminal. One binary, scenarios as files,
            a verdict you can trust.
          </p>
          <ul className={styles.chips}>
            {chips.map(chip => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
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
              href={links.docs}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the docs
            </a>
            <a
              className={styles.ctaSecondary}
              href={links.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          {!page && (
            <Link href="/litmus-lite">
              <a className={styles.more}>
                Why litmus-lite, and how it works with your agent →
              </a>
            </Link>
          )}
        </div>
        <div className={styles.introVisual}>
          <img
            src="/litmus-lite/pip.svg"
            alt="Pip, the litmus-lite mascot: a small bird in round glasses holding a litmus strip"
            className={styles.pip}
            width="200"
            height="200"
          />
          <DemoCard />
        </div>
      </Container>
    </ContainerFluid>
  )
}

export default Intro

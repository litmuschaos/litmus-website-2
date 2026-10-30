import styles from "@includes/scss/LitmusLite.module.scss"
import { Container, ContainerFluid } from "@layouts/Container"
import { audiences, links, speech } from "./data"

const BuiltFor = () => (
  <ContainerFluid className={styles.quickLight}>
    <Container className="py-10 md:py-20">
      <div className={styles.builtHead}>
        <img
          src="/litmus-lite/pip.svg"
          alt="Pip, the litmus-lite mascot"
          className={styles.builtPip}
          width="160"
          height="160"
        />
        <div className={styles.bubble}>
          <p>{speech}</p>
        </div>
      </div>
      <h2 className={styles.builtTitle}>
        Built for developers <span>and</span> their agents
      </h2>
      <div className={styles.compareGrid}>
        {audiences.map(col => (
          <div key={col.who} className={styles.compareCard}>
            <span className={styles.compareTag}>{col.who}</span>
            <h3 className={styles.compareName}>{col.title}</h3>
            <ul className={styles.comparePoints}>
              {col.points.map(point => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className={styles.family}>
        litmus-lite is part of the{" "}
        <a
          href="https://github.com/litmuschaos/litmus"
          target="_blank"
          rel="noopener noreferrer"
        >
          LitmusChaos
        </a>{" "}
        project. Read about{" "}
        <a href={links.agent} target="_blank" rel="noopener noreferrer">
          working with an agent
        </a>
        .
      </p>
    </Container>
  </ContainerFluid>
)

export default BuiltFor

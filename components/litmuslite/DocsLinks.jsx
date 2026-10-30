import styles from "@includes/scss/LitmusLite.module.scss"
import { BodyHead, Paragraph } from "@includes/Texts"
import { Container, ContainerFluid } from "@layouts/Container"
import { docsLinks, links } from "./data"

const DocsLinks = () => (
  <ContainerFluid className="bg-white">
    <Container className="py-10 md:py-20">
      <div className="text-center max-w-3xl mx-auto">
        <BodyHead>Find your way around the docs</BodyHead>
        <Paragraph hint className="mt-4 md:mt-6">
          Everything lives on the{" "}
          <a
            className="text-litmus underline"
            href={links.docs}
            target="_blank"
            rel="noopener noreferrer"
          >
            litmus-lite documentation site
          </a>
          . Jump straight to what you need.
        </Paragraph>
      </div>
      <div className={styles.docsGrid}>
        {docsLinks.map(item => (
          <a
            key={item.text}
            className={styles.docsCard}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.docsCardTitle}>
              {item.text}
              <span aria-hidden="true">→</span>
            </span>
            <span className={styles.docsCardDesc}>{item.desc}</span>
          </a>
        ))}
      </div>
    </Container>
  </ContainerFluid>
)

export default DocsLinks

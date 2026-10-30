import styles from "@includes/scss/LitmusLite.module.scss"
import { BodyHead, Paragraph } from "@includes/Texts"
import { Container, ContainerFluid } from "@layouts/Container"
import { why } from "./data"

const icons = {
  file: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </>
  ),
  bot: (
    <>
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <path d="M12 8V4H8M2 14h2M20 14h2M15 13v2M9 13v2" />
    </>
  ),
  scale: (
    <>
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1ZM2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  box: (
    <>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 14 4-4 4 4 5-6" />
    </>
  )
}

const Why = () => (
  <ContainerFluid className="bg-white">
    <Container className="py-10 md:py-20">
      <div className="text-center max-w-3xl mx-auto">
        <BodyHead>
          Why <span className="text-litmus">litmus-lite</span>?
        </BodyHead>
        <Paragraph hint className="mt-4 md:mt-6">
          Know whether your service survives a slow dependency or a failing
          route before you merge. Describe the failure in plain words or in a
          small file, and get a clear verdict back.
        </Paragraph>
      </div>
      <div className={styles.whyGrid}>
        {why.map((item, i) => (
          <div
            key={item.title}
            className={styles.whyCard}
            data-aos="fade-up"
            data-aos-delay={(i % 3) * 100}
          >
            <span className={styles.whyIcon}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {icons[item.icon]}
              </svg>
            </span>
            <h3 className={styles.whyTitle}>{item.title}</h3>
            <p className={styles.whyDesc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </ContainerFluid>
)

export default Why

import Intro from "@components/litmuslite/Intro"
import QuickStart from "@components/litmuslite/QuickStart"

// Homepage spotlight for litmus-lite: the pitch, a live demo card and the
// three-step quick start. The full story lives at /litmus-lite.
const LitmusLite = () => {
  return (
    <section id="litmus-lite" aria-label="litmus-lite">
      <Intro />
      <QuickStart dark />
    </section>
  )
}

export default LitmusLite

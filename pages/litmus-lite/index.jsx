import ClosingCTA from "@components/litmuslite/ClosingCTA"
import BuiltFor from "@components/litmuslite/BuiltFor"
import DocsLinks from "@components/litmuslite/DocsLinks"
import Intro from "@components/litmuslite/Intro"
import QuickStart from "@components/litmuslite/QuickStart"
import Why from "@components/litmuslite/Why"
import SEO from "@lib/SEO"

const LitmusLite = () => {
  return (
    <>
      <SEO
        page={"litmus-lite"}
        title="litmus-lite - Chaos testing for developers | LitmusChaos"
        description="litmus-lite is a single-binary chaos testing tool from the LitmusChaos project. Ask for a failure in Cursor or run it from a terminal: scenarios are files, runs are judged against your hypotheses, and there is no cluster, control plane or account."
      />
      <Intro page />
      <Why />
      <BuiltFor />
      <QuickStart />
      <DocsLinks />
      <ClosingCTA />
    </>
  )
}

export default LitmusLite

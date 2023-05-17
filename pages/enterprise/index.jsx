import Courses from "@components/Support/Courses"
import HCE from "@components/Support/HCE"
import Hero from "@components/Support/Hero"
import { PreFooter } from "@includes/BottomFooter"
import SEO from "@lib/SEO"

const Support = () => {
  return (
    <>
      <SEO page={"support"} />
      <Hero />
      <HCE />
      <Courses />
      <PreFooter />
    </>
  )
}

export default Support

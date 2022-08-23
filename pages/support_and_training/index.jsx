import CommercialSupport from "@components/Support/CommercialSupport"
import Courses from "@components/Support/Courses"
import OtherSupport from "@components/Support/OtherSupport"
import SEO from "@lib/SEO"

const Support = () => {
  return (
    <>
      <SEO page={"support_and_training"} />
      <Courses />
      <CommercialSupport />
      <OtherSupport />
    </>
  )
}

export default Support

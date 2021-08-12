import CommercialSupport from "@components/Support/CommercialSupport"
import OtherSupport from "@components/Support/OtherSupport"
import SEO from "@lib/SEO"

const Support = () => {
  return (
    <>
      <SEO page={"support"} />
      <CommercialSupport />
      <OtherSupport />
    </>
  )
}

export default Support

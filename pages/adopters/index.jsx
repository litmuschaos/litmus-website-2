import AdoptersHero from "@components/AdoptersPage/adoptersHero"
import AdoptersList from "@components/AdoptersPage/adoptersList"
import Adopters from "@components/homepage/Adopters"
import SEO from "@lib/SEO"

const AdoptersIndex = () => {
  return (
    <>
      <SEO page={"adopters"} />
      <AdoptersHero />
      <AdoptersList />
      <Adopters />
    </>
  )
}

export default AdoptersIndex

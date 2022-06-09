import CommunityHero from "@components/CommunityPage/communityHero"
import CommunityList from "@components/CommunityPage/communityList"
import Adopters from "@components/homepage/Adopters"
import SEO from "@lib/SEO"

const Community = () => {
  return (
    <>
      <SEO page={"community"} />
      <CommunityHero />
      <CommunityList />
      <Adopters />
    </>
  )
}

export default Community

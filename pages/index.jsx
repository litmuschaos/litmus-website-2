import AboutLitmus from "@components/homepage/AboutLitmus"
import Adopters from "@components/homepage/Adopters"
import Community from "@components/homepage/Community"
import Features from "@components/homepage/Features"
import Hero from "@components/homepage/Hero"
import Testimonials from "@components/homepage/Testimonials"
import { PreFooter } from "@includes/BottomFooter"
import SEO from "@lib/SEO"
import MCPServer from "@components/homepage/MCPServer"

const Home = () => {
  return (
    <>
      <SEO page={""} />
      <Hero />
      {/* <UpcomingEvent /> */}
      <Adopters />
      <MCPServer />
      <AboutLitmus />
      <Features />
      <PreFooter />
      <Testimonials />
      <Community />
    </>
  )
}

export default Home

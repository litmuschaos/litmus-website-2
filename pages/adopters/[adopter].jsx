import { Data } from "@components/AdoptersPage/indAdopter.data"
import Comment from "@components/AdoptersPage/individualAdopters/Comments"
import Hero from "@components/AdoptersPage/individualAdopters/Hero"
import SliderCTA from "@components/AdoptersPage/individualAdopters/SliderCTA"
import Video from "@components/AdoptersPage/individualAdopters/Video"
import SEO from "@lib/SEO"

const IndAdopter = ({ adopter }) => {
  return (
    <>
      <SEO page={adopter.key} adopter={{ name: adopter.key }} />
      <Hero data={adopter} />
      <Video data={adopter} />
      <Comment data={adopter} />
      <SliderCTA />
    </>
  )
}

export async function getStaticProps({ params }) {
  const adopterName = params.adopter
  const adopter = await Data.filter(item => item.key === adopterName)[0]

  return {
    props: { adopter }
  }
}

export async function getStaticPaths() {
  const paths = Data.map(adopter => `/adopters/${adopter.key}`)

  return {
    paths,
    fallback: false
  }
}

export default IndAdopter

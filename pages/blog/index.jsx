import BlogIndexHero from "@components/BlogIndex/BlogIndexHero"
import BlogsContainer from "@components/BlogIndex/BlogsContainer"
import { posts } from "@blog/BlogData"
import SEO from "lib/SEO"

const Index = ({ posts }) => {
  return (
    <>
      <SEO page="blog" />
      <BlogIndexHero />
      <BlogsContainer posts={posts} />
    </>
  )
}
export async function getStaticProps() {
  const postsData = posts()
  return {
    props: {
      posts: postsData
    }
  }
}
export default Index

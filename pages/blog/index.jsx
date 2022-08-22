import { getAllArticles } from "@blog/devto"
import BlogIndexHero from "@components/BlogIndex/BlogIndexHero"
import BlogsContainer from "@components/BlogIndex/BlogsContainer"
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
  const articles = await getAllArticles()
  return {
    props: {
      posts: articles
    }
  }
}

export default Index

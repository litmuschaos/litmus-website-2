import { postForSlug, postSlugs } from "@blog/BlogData"
import { PostHero } from "@components/BlogPost/PostHero"
import SEO from "lib/SEO"
import dynamic from "next/dynamic"

const PostContent = dynamic(() => import("@components/BlogPost/PostContent"))

const Post = ({ frontmatter, body, links, pageSlug }) => {
  if (!frontmatter) return <></>
  return (
    <>
      <SEO page={"blog"} />
      <PostHero data={frontmatter} />
      <PostContent body={body} links={links} data={frontmatter} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const pageSlug = params.post
  const { frontmatter, body, links } = await postForSlug(params.post)
  return {
    props: {
      frontmatter,
      body,
      links,
      pageSlug
    }
  }
}

export async function getStaticPaths() {
  const paths = postSlugs().map(slug => `/blog/${slug}`)
  return {
    paths,
    fallback: false
  }
}

export default Post

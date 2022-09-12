import { getAllArticles, getArticleFromCache } from "@blog/devto"
import { PostHero } from "@components/BlogPost/PostHero"
import SEO from "lib/SEO"
import fs from "fs"
import path from "path"
import dynamic from "next/dynamic"

const cacheFile = ".dev-to-cache.json"
const PostContent = dynamic(() => import("@components/BlogPost/PostContent"))

const Post = ({ article }) => {
  const frontmatter = {
    author_twitter: article.user.twitter_username,
    author_image: article.user.profile_image,
    author_role: "Author",
    blog_image: article.cover_image,
    image_alt: article.title,
    tag: article.tag_list,
    date: article.published_at,
    author: article.user.name,
    title: article.title,
    content: article.description,
    ttr: article.reading_time_minutes,
    localSlug: article.localSlug,
    seoImage: article.social_image
  }
  if (!frontmatter) return <></>
  return (
    <>
      <SEO
        page={frontmatter.title}
        blog={{
          localSlug: frontmatter.localSlug,
          seoImage: frontmatter.seoImage,
          tag: frontmatter.tag
        }}
      />
      <PostHero data={frontmatter} />
      <PostContent body={article.markdown} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const cacheContents = fs.readFileSync(
    path.join(process.cwd(), cacheFile),
    "utf-8"
  )
  const cache = JSON.parse(cacheContents)
  const article = await getArticleFromCache(cache, params.slug)
  return { props: { article }, revalidate: 43200 }
}

export async function getStaticPaths() {
  const articles = await getAllArticles()
  fs.writeFileSync(
    path.join(process.cwd(), cacheFile),
    JSON.stringify(articles)
  )
  const paths = articles.map(({ localSlug }) => {
    return {
      params: { slug: localSlug }
    }
  })
  return { paths, fallback: false }
}

export default Post

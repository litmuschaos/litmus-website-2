import matter from "gray-matter"

export const posts = () =>
  (context => {
    const keys = context.keys()
    const documents = keys.map(context)

    return keys
      .map((key, index) => {
        const slug = key.replace(/^.*[\\\/]/, "").slice(0, -3)
        const document = documents[index]
        const { data: frontmatter, content: body } = matter(document.default)
        return { frontmatter, body, slug }
      })
      .sort(
        (post1, post2) =>
          new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date)
      )
  })(require.context("./", true, /\.\/.*\.md$/))

export const postSlugs = () =>
  (context => {
    return context.keys().map(key => key.replace(/^.*[\\\/]/, "").slice(0, -3))
  })(require.context("./", true, /\.\/.*\.md$/))

export const postForSlug = async slug => {
  const document = await import(`./${slug}.md`)
  const { data: frontmatter, content: body } = matter(document.default)
  const postsData = posts()
  const index = postsData.findIndex(post => post.slug === `${slug}`)
  const links = {
    back: {
      slug: postsData[index - 1]?.slug ?? null,
      title: postsData[index - 1]?.frontmatter.title ?? null
    },
    next: {
      slug: postsData[index + 1]?.slug ?? null,
      title: postsData[index + 1]?.frontmatter.title ?? null
    }
  }
  return { frontmatter, body, slug, links }
}

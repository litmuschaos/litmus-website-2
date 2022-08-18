import BlogDeskCard from "@components/BlogIndex/BlogDeskCard"
import { SubHeading } from "@includes/Texts"
import { Container } from "@layouts/Container"

const BlogsContainer = ({ posts }) => {
  return (
    <>
      <Container className="pt-32 pb-32">
        <SubHeading>Other Blogs</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mt-12">
          {posts.map((post, idx) => {
            const { frontmatter, slug } = post
            return <BlogDeskCard data={frontmatter} slug={slug} key={idx} />
          })}
        </div>
      </Container>
    </>
  )
}
export default BlogsContainer

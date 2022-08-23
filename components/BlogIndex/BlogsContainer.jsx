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
            return (
              <BlogDeskCard
                data={{
                  blog_image: post.cover_image,
                  image_alt: post.title,
                  tag: post.tag_list,
                  date: post.published_at,
                  author: post.user.name,
                  title: post.title,
                  content: post.description,
                  ttr: post.reading_time_minutes,
                  profileImage: post.user.profile_image
                }}
                slug={post.slug}
                key={idx}
              />
            )
          })}
        </div>
      </Container>
    </>
  )
}
export default BlogsContainer

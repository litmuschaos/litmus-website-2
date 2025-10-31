import { useState } from "react"
import BlogDeskCard from "@components/BlogIndex/BlogDeskCard"
import { SubHeading, BodyHead } from "@includes/Texts"
import { Container } from "@layouts/Container"
import styles from "@includes/scss/Blog.module.scss"

const BlogsContainer = ({ posts }) => {
  const filteredPosts = posts.filter(post => post.markdown !== "")

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 9 // 3x3 grid

  // Calculate pagination
  const totalPosts = filteredPosts.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  const handlePageChange = page => {
    setCurrentPage(page)
    // Smooth scroll to top of blog section
    document.querySelector(".blog-container")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-8 md:py-16 blog-container">
      <Container>
        <div className="text-center mb-16">
          <BodyHead className="mb-4">Latest Articles</BodyHead>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of in-depth articles, tutorials, and insights
            from chaos engineering experts and practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {currentPosts.map((post, idx) => {
            return (
              <div
                key={post.slug || idx}
                className={`opacity-0 ${styles["animate-fade-in"]}`}
                style={{
                  animationDelay: `${idx * 100}ms`,
                  animationFillMode: "forwards"
                }}
              >
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
                />
              </div>
            )
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center mt-16 gap-2 px-4">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 md:px-4 md:py-2 rounded-lg font-medium border transition-all duration-300 ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600  hover:shadow-lg"
              }`}
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
              const isActive = page === currentPage
              // More restrictive on mobile
              const isMobile =
                typeof window !== "undefined" && window.innerWidth < 768
              const maxVisible = isMobile ? 1 : 2
              const isNearCurrent = Math.abs(page - currentPage) <= maxVisible
              const isFirstOrLast = page === 1 || page === totalPages
              const showEllipsis = totalPages > (isMobile ? 5 : 7)

              if (!isNearCurrent && !isFirstOrLast && showEllipsis) {
                if (
                  page === currentPage - (maxVisible + 1) ||
                  page === currentPage + (maxVisible + 1)
                ) {
                  return (
                    <span
                      key={page}
                      className="px-1 md:px-2 text-gray-400 text-sm"
                    >
                      ...
                    </span>
                  )
                }
                if (Math.abs(page - currentPage) > maxVisible) {
                  return null
                }
              }

              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 md:px-4 md:py-2 rounded-lg font-medium border text-sm md:text-base transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 hover:shadow-lg hover:transform hover:scale-105"
                  }`}
                >
                  {page}
                </button>
              )
            })}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 md:px-4 md:py-2 rounded-lg border font-medium transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 hover:shadow-lg"
              }`}
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </Container>
    </div>
  )
}
export default BlogsContainer

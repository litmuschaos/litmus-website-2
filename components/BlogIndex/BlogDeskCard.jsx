import moment from "moment"
import Image from "next/image"
import Link from "next/link"

const BlogDeskCard = ({ data, slug }) => {
  const {
    blog_image,
    image_alt,
    date,
    author,
    title,
    content,
    ttr,
    profileImage
  } = data
  
  return (
    <div className="flex flex-col h-full group">
      <Link href={`blog/${slug}`}>
        <a className="block h-full">
          <div className="bg-white h-full shadow-xl rounded-2xl flex flex-col overflow-hidden">
            {/* Image Container with Gradient Overlay */}
            <div className="relative w-full h-38 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 z-10"></div>
              {blog_image ? (
                <img
                  src={blog_image}
                  alt={image_alt}
                   height={192}
                    width="auto"
                    layout="responsive"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <img
                    src="/blog/emptyBlogCover.png"
                    alt={image_alt || "Default blog cover"}
                    width={1000}
                    height={420}
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>
              )}
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-white/30 rounded-full backdrop-blur-sm"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/20 rounded-full backdrop-blur-sm"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              {/* Author Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={profileImage}
                  alt={author}
                  className="w-10 h-10 rounded-full ring-2 ring-purple-100"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">{author}</p>
                  <p className="text-xs text-gray-500">
                    {date && moment(date).format('MMM DD, YYYY')}
                  </p>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 leading-tight line-clamp-2 flex-1">
                {title}
              </h2>

              {/* Content */}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                {content}
              </p>

              {/* Read Time */}
              {ttr && (
                <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                  <span>{ttr} min read</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-100 text-purple-600"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default BlogDeskCard

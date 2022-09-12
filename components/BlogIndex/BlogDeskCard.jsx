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
    <div className="flex flex-col">
      <Link href={`blog/${slug}`}>
        <a className="block h-full">
          <div className="bg-white h-full shadow-lg hover:shadow-xl rounded-md flex justify-between flex-col">
            <div>
              <div className="relative w-full">
                {blog_image ? (
                  <img
                    src={blog_image}
                    alt={image_alt}
                    height={192}
                    width="auto"
                    layout="responsive"
                    className="object-cover rounded-t-md bg-black"
                  />
                ) : (
                  <img
                    src="/blog/emptyBlogCover.png"
                    alt={image_alt}
                    height={212}
                    width="auto"
                    layout="responsive"
                    className="object-cover rounded-t-md bg-black"
                  />
                )}
              </div>
              <div className="py-4 px-2 md:p-4">
                <div className="w-full flex flex-col justify-between font-medium text-xss">
                  <div className="flex items-center gap-2">
                    <img
                      src={profileImage}
                      alt={image_alt}
                      height={40}
                      width={40}
                      className="rounded-full"
                    />
                    <p className="text-xs text-hint font-medium">{author}</p>
                  </div>
                </div>
                <h2 className="flex-auto text-lg md:text-xl font-medium mt-3 md:mt-5">
                  {title}
                </h2>
                <p className="text-hint mt-2 text-xs md:text-sm">{content}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default BlogDeskCard

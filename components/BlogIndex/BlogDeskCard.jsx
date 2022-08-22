import moment from "moment"
import Link from "next/link"

const BlogDeskCard = ({ data, slug }) => {
  const { blog_image, image_alt, tag, date, author, title, content, ttr } = data

  return (
    <div className="flex flex-col">
      <Link href={`blog/${slug}`}>
        <a className="inline-block h-full">
          <div className="bg-white h-full shadow-lg hover:shadow-xl rounded-md flex justify-between flex-col">
            <div>
              <div className="relative w-full">
                <img
                  src={blog_image}
                  alt={image_alt}
                  height={192}
                  width="auto"
                  layout="responsive"
                  className="object-cover rounded-t-md bg-black"
                />
              </div>
              <div className="mx-3 py-2 px-2">
                <div className="w-full flex flex-col justify-between font-medium text-xss">
                  <div>
                    <span className="font-normal text-xs opacity-60">
                      <span className="align-baseline">[{tag.join(", ")}]</span>
                    </span>
                  </div>
                  <div className="text-sm opacity-60 pt-2">
                    {author} | {moment(date).format("Do MMMM YYYY")}
                  </div>
                </div>
                <h2 className="flex-auto text-2xl font-medium mt-5 w-9/12 line-clamp-2">
                  {title}
                </h2>
                <p className="line-clamp-5 text-hint mt-2 text-sm">{content}</p>
              </div>
            </div>
            <div className="mb-2 py-2 mx-3 px-2 text-sm font-medium">
              <div className="py-1 border-t border-gray-200 " />
              <div className="flex justify-between items-center">
                <div className="inline-flex items-center gap-1">
                  <span className="rounded-lg opacity-60">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-xs opacity-60 uppercase">
                    {ttr} min read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default BlogDeskCard
